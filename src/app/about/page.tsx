import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "About Anand Sampat's music, coding, and research practice.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <h1>About</h1>

      <section className="grid gap-10 pb-2 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-[18px] leading-9 text-gray-800">
          <p>
            I am a musician, builder, and researcher focused on projects at the
            intersection of creativity and technology.
          </p>
          <p>
            I care about making things that are both expressive and practical:
            products people can use, writing people can understand, and art that
            still feels human.
          </p>
          <p>
            My background spans machine learning, engineering leadership, product
            strategy, and long-form curiosity across AI, music, and social impact.
          </p>
        </div>

        <aside className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_34px_rgba(15,23,42,0.07)]">
          <h2 className="font-display text-2xl text-gray-900">Current Focus</h2>
          <ul className="mt-4 space-y-3 text-[16px] text-gray-700">
            <li>• Music and composition experiments</li>
            <li>• AI and machine learning applications</li>
            <li>• Writing and public communication</li>
            <li>• Building products with clear user value</li>
          </ul>
          <p className="mt-5 text-[15px] leading-8 text-gray-700">
            This site is intentionally simple: Music, About, and Writing.
          </p>
        </aside>
      </section>
    </SiteShell>
  );
}
