type MusicTile = {
  title: string;
  medium: string;
  gradient: string;
  amplitude: number;
  frequency: number;
  phase: number;
};

const tiles: MusicTile[] = [
  {
    title: "Nocturne Engine",
    medium: "Piano + Code",
    gradient: "linear-gradient(140deg, #111827 0%, #1e3a8a 45%, #0ea5e9 100%)",
    amplitude: 20,
    frequency: 2.2,
    phase: 0.2,
  },
  {
    title: "Rain Loop Lab",
    medium: "Tape Study",
    gradient: "linear-gradient(145deg, #022c22 0%, #0f766e 55%, #2dd4bf 100%)",
    amplitude: 18,
    frequency: 2.8,
    phase: 1.3,
  },
  {
    title: "Counterpoint Bloom",
    medium: "Generative MIDI",
    gradient: "linear-gradient(145deg, #3b0764 0%, #7e22ce 60%, #c026d3 100%)",
    amplitude: 17,
    frequency: 3.1,
    phase: 0.9,
  },
  {
    title: "Room Tone Atlas",
    medium: "Field Recording",
    gradient: "linear-gradient(145deg, #172554 0%, #1d4ed8 55%, #93c5fd 100%)",
    amplitude: 22,
    frequency: 1.9,
    phase: 1.9,
  },
  {
    title: "Glass Arpeggios",
    medium: "Live Set",
    gradient: "linear-gradient(145deg, #312e81 0%, #4f46e5 58%, #a5b4fc 100%)",
    amplitude: 19,
    frequency: 2.5,
    phase: 2.6,
  },
  {
    title: "Cloud Harmonics",
    medium: "Spatial Audio",
    gradient: "linear-gradient(145deg, #082f49 0%, #0369a1 52%, #38bdf8 100%)",
    amplitude: 16,
    frequency: 3.3,
    phase: 0.4,
  },
  {
    title: "Pulse Cartography",
    medium: "Rhythm Research",
    gradient: "linear-gradient(145deg, #4a044e 0%, #a21caf 50%, #f472b6 100%)",
    amplitude: 21,
    frequency: 2.1,
    phase: 1.7,
  },
  {
    title: "Midnight Fugue",
    medium: "Solo Piano",
    gradient: "linear-gradient(145deg, #111827 0%, #334155 52%, #94a3b8 100%)",
    amplitude: 15,
    frequency: 2.9,
    phase: 2.4,
  },
  {
    title: "Wave Garden",
    medium: "Audiovisual",
    gradient: "linear-gradient(145deg, #172554 0%, #312e81 45%, #06b6d4 100%)",
    amplitude: 20,
    frequency: 2.6,
    phase: 0.7,
  },
];

function waveformPath(
  amplitude: number,
  frequency: number,
  phase: number,
  width = 420,
  height = 220,
): string {
  const baseline = height / 2;
  const points = Array.from({ length: 36 }, (_, index) => {
    const x = (index / 35) * width;
    const angle = (index / 35) * Math.PI * frequency + phase;
    const y = baseline + Math.sin(angle) * amplitude;
    return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  });
  return points.join(" ");
}

export function MusicGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-10 lg:grid-cols-3">
      {tiles.map((tile) => (
        <div key={tile.title} className="overflow-hidden">
          <div
            className="group relative aspect-square w-full border border-white/20 p-4"
            style={{ background: tile.gradient }}
          >
            <svg
              viewBox="0 0 420 220"
              aria-hidden="true"
              className="absolute inset-x-4 top-1/2 h-20 -translate-y-1/2 text-white/80"
            >
              <path
                d={waveformPath(tile.amplitude, tile.frequency, tile.phase)}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 text-[11px] uppercase tracking-[0.16em] text-white/85">
              <span>{tile.title}</span>
              <span className="text-right text-white/70">{tile.medium}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
