import { HarmonicVisualizer } from "@/components/harmonic-visualizer";
import { LatexShowcase } from "@/components/latex-showcase";
import { MusicGrid } from "@/components/music-grid";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <h1>Music technologist and piano artist based in San Francisco.</h1>

      <MusicGrid />

      <div className="grid gap-6 pb-2 lg:grid-cols-2">
        <LatexShowcase />
        <HarmonicVisualizer />
      </div>
    </SiteShell>
  );
}
