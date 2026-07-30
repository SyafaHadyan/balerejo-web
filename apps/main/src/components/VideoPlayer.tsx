"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch((err: unknown) => {
            if (err instanceof DOMException && err.name === "NotAllowedError") return;
            console.error("Video playback error:", err);
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-[#111]">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero.jpeg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="https://github.com/SyafaHadyan/balerejo-web/releases/download/v1.0-assets/hero-720p.mp4" type="video/mp4" />
      </video>

      {/* Mute/unmute toggle */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Aktifkan suara" : "Matikan suara"}
        className="absolute bottom-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 backdrop-blur-sm"
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
            <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
