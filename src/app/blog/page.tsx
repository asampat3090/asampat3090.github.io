import type { Metadata } from "next";
import { BlockMath, InlineMath } from "react-katex";
import { HarmonicVisualizer } from "@/components/harmonic-visualizer";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Notes",
  description: "Research and art notes on music, code, and visual form.",
};

const entries = [
  {
    title: "Polyrhythm as Geometry",
    date: "Feb 2026",
    summary:
      "Mapping 13:8 pulse relationships into circular trajectories for performance cues.",
  },
  {
    title: "Piano Mixtape v3",
    date: "Jan 2026",
    summary:
      "Designing a score surface where notation, playback, and synthesis are editable in one view.",
  },
  {
    title: "Embodied Timing Models",
    date: "Dec 2025",
    summary:
      "Studying micro-timing drift to build ML tools that preserve touch instead of flattening it.",
  },
];

export default function BlogPage() {
  return (
    <SiteShell>
      <h1>Notes</h1>

      <section className="space-y-5 text-[16px] leading-8 text-gray-700">
        <p>
          Working notes on musical systems, interaction design, and research
          sketches. This section doubles as a writing space and a lab notebook.
        </p>
        <p>
          Inline equations are supported, for example{" "}
          <InlineMath math={"\\omega = 2\\pi f"} /> for oscillator frequency and{" "}
          <InlineMath math={"H(z)=\\sum_{k=0}^{N} b_k z^{-k}"} /> for filter form.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {entries.map((entry) => (
          <article
            key={entry.title}
            className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
          >
            <p className="text-xs uppercase tracking-[0.12em] text-gray-500">
              {entry.date}
            </p>
            <h2 className="mt-3 font-display text-xl text-gray-900">{entry.title}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">{entry.summary}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 pb-2 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-8">
          <h2 className="font-display text-2xl text-gray-900">Current Equation</h2>
          <p className="mt-4 text-[15px] leading-7 text-gray-600">
            A compact objective for balancing groove alignment and expressive
            velocity contour:
          </p>
          <div className="mt-6">
            <BlockMath
              math={
                "\\mathcal{L}=\\alpha\\sum_t\\|g_t-\\hat g_t\\|_1+\\beta\\sum_t\\|v_t-\\hat v_t\\|_2^2"
              }
            />
          </div>
        </div>
        <HarmonicVisualizer />
      </section>
    </SiteShell>
  );
}
