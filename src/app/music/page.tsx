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

      <section className="max-w-3xl space-y-6 pb-2 text-[18px] leading-9 text-gray-800">
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
            className="inline-flex items-center rounded-full border border-slate-900 bg-slate-900 px-7 py-3 text-sm font-semibold tracking-[0.1em] text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)] transition-colors hover:bg-slate-800"
          >
            Visit Piano Mixtape
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
