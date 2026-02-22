import type { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
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
        <div className="space-y-5 text-[16px] leading-8 text-gray-700">
          <p>
            I build music projects where piano performance, software systems, and
            research ideas share the same studio. My work lives between live
            improvisation, composition tooling, and playful machine learning.
          </p>
          <p>
            The goal is to keep things human-first: emotional sound, readable
            code, and visual narratives that make technical ideas approachable.
          </p>
          <p>
            Right now I am focused on interactive composition tools, rhythm-aware
            interfaces, and datasets designed for expressive timing rather than
            strict quantization.
          </p>
        </div>

        <aside className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
          <h2 className="font-display text-xl text-gray-900">Practice Notes</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li>• Piano improvisation + processed tape</li>
            <li>• Generative MIDI and score systems</li>
            <li>• React / Next.js for interactive publishing</li>
            <li>• ML-assisted timbre and gesture analysis</li>
          </ul>
          <p className="mt-5 text-sm leading-7 text-gray-600">
            Current motif:{" "}
            <InlineMath math={"\\Delta t = t_{performed} - t_{quantized}"} />.
          </p>
        </aside>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-8">
        <h2 className="font-display text-2xl text-gray-900">
          Mathematical Texture in Performance
        </h2>
        <p className="mt-4 text-[15px] leading-7 text-gray-600">
          Expressive playing can be represented as a controlled deviation from a
          metrical grid. One useful frame is a weighted blend of pulse and
          phrasing energy:
        </p>
        <div className="mt-6">
          <BlockMath
            math={
              "E(t)=\\lambda\\,\\|r(t)-\\hat r(t)\\|_2^2 + (1-\\lambda)\\,\\|p(t)-\\hat p(t)\\|_2^2"
            }
          />
        </div>
      </section>
    </SiteShell>
  );
}
