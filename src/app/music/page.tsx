import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Music",
  description: "Music projects, piano experiments, and current work.",
};

export default function MusicPage() {
  return (
    <SiteShell>
      <h1>Music</h1>

      <section className="max-w-3xl space-y-6 pb-2 text-[16px] leading-8 text-gray-700">
        <p>
          I create piano-first music projects that blend arrangement, improvisation,
          and computational experimentation. My work often crosses genres and
          cultures, mixing old and new sonic ideas into short-form, expressive
          pieces.
        </p>
        <p>
          Piano Mixtape is where I publish performances, mashups, and new releases.
          If you want the full catalog and latest uploads, head there directly.
        </p>

        <div className="pt-2">
          <Link
            href="https://pianomixtape.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-black bg-black px-6 py-3 text-sm font-medium tracking-[0.06em] text-white transition-colors hover:bg-gray-900"
          >
            Visit Piano Mixtape
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
