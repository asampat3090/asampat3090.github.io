"use client";

import { useEffect, useRef, useState } from "react";

const BACKGROUND_TRACK_URL =
  "https://wshfffletkoqogfavjvm.supabase.co/storage/v1/object/public/audio-files/1760799519718_v1-see-you-again-in-my-memories.mp3";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.loop = true;
    audio.volume = 0.12;

    const attemptPlayback = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAutoplayBlocked(false);
      } catch {
        setIsPlaying(false);
        setAutoplayBlocked(true);
      }
    };

    const syncPlaybackState = () => {
      setIsPlaying(!audio.paused);
    };

    const handleFirstInteraction = () => {
      if (audio.paused) {
        void attemptPlayback();
      }
    };

    audio.addEventListener("play", syncPlaybackState);
    audio.addEventListener("pause", syncPlaybackState);
    document.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
    });
    document.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    void attemptPlayback();

    return () => {
      audio.removeEventListener("play", syncPlaybackState);
      audio.removeEventListener("pause", syncPlaybackState);
      document.removeEventListener("pointerdown", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
      return;
    }

    audio.pause();
  };

  return (
    <>
      <audio ref={audioRef} src={BACKGROUND_TRACK_URL} preload="metadata" />
      <button
        type="button"
        onClick={() => {
          void togglePlayback();
        }}
        className="fixed right-4 bottom-4 z-[120] rounded-full border border-black/15 bg-white/90 px-4 py-2 text-xs tracking-[0.08em] text-gray-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-colors hover:border-black/35 hover:text-black"
      >
        {isPlaying ? "SOUND ON" : autoplayBlocked ? "PLAY SOUND" : "SOUND OFF"}
      </button>
    </>
  );
}
