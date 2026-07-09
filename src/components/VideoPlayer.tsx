"use client";

import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
