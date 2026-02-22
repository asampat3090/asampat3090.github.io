"use client";

import { useEffect, useRef } from "react";

export function HarmonicVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frameId = 0;
    let width = 0;
    const height = 280;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const colors = [
      "rgba(147, 197, 253, 0.30)",
      "rgba(96, 165, 250, 0.35)",
      "rgba(56, 189, 248, 0.45)",
      "rgba(99, 102, 241, 0.55)",
    ];

    const resize = () => {
      width = canvas.clientWidth;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (timestamp: number) => {
      const t = timestamp * 0.001;

      const background = context.createLinearGradient(0, 0, width, height);
      background.addColorStop(0, "#0f172a");
      background.addColorStop(1, "#1e293b");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      context.strokeStyle = "rgba(255, 255, 255, 0.06)";
      context.lineWidth = 1;
      for (let x = 0; x <= width; x += 24) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let layer = 0; layer < colors.length; layer += 1) {
        context.beginPath();
        for (let x = 0; x <= width; x += 4) {
          const nx = x / width;
          const waveA = Math.sin(nx * Math.PI * (2.4 + layer * 0.8) + t * (1.2 + layer * 0.15));
          const waveB = Math.cos(nx * Math.PI * (8 + layer) - t * (0.8 + layer * 0.2));
          const y = height * 0.5 + waveA * (22 + layer * 9) + waveB * 4;

          if (x === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.strokeStyle = colors[layer];
        context.lineWidth = 1.4 + layer * 0.4;
        context.stroke();
      }

      for (let index = 0; index < 12; index += 1) {
        const x = (index / 11) * width;
        const pulse = 0.4 + 0.6 * Math.sin(t * 3 + index * 0.85);
        context.beginPath();
        context.arc(x, height - 24, 2 + pulse * 2.2, 0, Math.PI * 2);
        context.fillStyle = `rgba(147, 197, 253, ${0.35 + pulse * 0.35})`;
        context.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resize();
    frameId = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)]">
      <canvas
        ref={canvasRef}
        className="block h-[280px] w-full"
        aria-label="Animated harmonic visualization"
      />
      <div className="border-t border-black/10 px-4 py-3 text-sm text-gray-600">
        Harmonic field driven by layered sine and cosine functions.
      </div>
    </div>
  );
}
