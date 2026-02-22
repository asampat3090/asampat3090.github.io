import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { quartzPosts } from "@/data/quartz-posts";

const QUARTZ_BASE_URL = "https://asampat3090.github.io";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function formatPostDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  return dateFormatter.format(new Date(Date.UTC(year, month - 1, day)));
}

export const metadata: Metadata = {
  title: "Writing",
  description: "Writing archive sourced from the deployed Quartz branch.",
};

export default function WritingPage() {
  return (
    <SiteShell>
      <h1>Writing</h1>

      <section className="max-w-3xl space-y-5 text-[16px] leading-8 text-gray-700">
        <p>
          This archive mirrors the currently deployed Quartz writing branch. I am
          gradually curating it into a cleaner and simpler reading experience.
        </p>
        <div>
          <Link
            href={QUARTZ_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-black/20 px-5 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-black hover:text-black"
          >
            Open full Quartz archive
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-3 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-4">
        <ul className="divide-y divide-black/8">
          {quartzPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`${QUARTZ_BASE_URL}/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 rounded-xl px-3 py-4 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-[15px] leading-7 text-gray-800 transition-colors group-hover:text-black">
                  {post.title}
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-gray-500">
                  {formatPostDate(post.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
