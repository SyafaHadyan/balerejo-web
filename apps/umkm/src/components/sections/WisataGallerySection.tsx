"use client";

import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";
import { WISATA, type WisataSpot } from "@/data/wisata";

const TYPE_LABEL: Record<WisataSpot["type"], string> = {
  pantai: "PANTAI",
  dam: "DAM",
  taman: "TAMAN",
  candi: "CANDI",
  air_terjun: "AIR TERJUN",
};

const AUTOPLAY_MS = 6000;

export default function WisataGallerySection() {
  const trackRef      = useRef<HTMLDivElement>(null);
  const timerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIdxRef  = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  /* Bumped on tab-visibility restore — forces text + progress bar to remount */
  const [resumeTick, setResumeTick] = useState(0);

  activeIdxRef.current = activeIndex;

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  }, []);

  /* Pause auto-play when tab is hidden; on restore: sync scroll + bump resumeTick */
  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState === "hidden") {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      } else {
        /* Snap scroll to the correct slide (it may have drifted while hidden) */
        const track = trackRef.current;
        if (track) {
          const slide = track.children[activeIdxRef.current] as HTMLElement;
          slide?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "nearest", inline: "start" });
        }
        /* Force fresh text animations + progress bar */
        setResumeTick((t) => t + 1);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  /* Auto-play — only fires when tab is visible */
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (document.visibilityState === "hidden") return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % WISATA.length;
        const track = trackRef.current;
        if (track) {
          const slide = track.children[next] as HTMLElement;
          slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
        return next;
      });
    }, AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [activeIndex, resumeTick]);

  /* Combined key: changes on slide change OR tab restore — forces remount */
  const animKey = `${activeIndex}-${resumeTick}`;

  return (
    <section className="relative w-full h-[calc(100vh-58px)]" aria-label="Galeri wisata">
      {/* Slide track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex h-full overflow-x-scroll snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {WISATA.map((spot, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={spot.slug} className="snap-start shrink-0 w-screen h-full relative overflow-hidden">
              <Image
                src={spot.image}
                alt={spot.name}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Slide counter */}
              <p
                className="absolute top-8 right-10 font-sans text-[13px] tabular-nums transition-all duration-700"
                style={{
                  color: "rgba(255,255,255,0.5)",
                  opacity: isActive ? 1 : 0,
                  transitionDelay: isActive ? "500ms" : "0ms",
                }}
              >
                {String(i + 1).padStart(2, "0")} / {String(WISATA.length).padStart(2, "0")}
              </p>

              {/* Content — remounts on slide change + tab restore via key */}
              {isActive && (
                <div
                  key={animKey}
                  className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 md:pb-24 max-w-[900px]"
                >
                  <p className="font-sans font-semibold text-[11px] text-accent tracking-[1.5px] mb-4"
                     style={{ animation: "wisata-fade-up 500ms 100ms both" }}>
                    {TYPE_LABEL[spot.type]}
                  </p>
                  <h2 className="font-heading font-bold text-[36px] md:text-[54px] text-white leading-[1.15] mb-4"
                      style={{ animation: "wisata-fade-up 500ms 220ms both" }}>
                    {spot.name}
                  </h2>
                  <p className="font-sans text-[15px] leading-[1.75] mb-3 max-w-[560px]"
                     style={{ color: "rgba(255,255,255,0.7)", animation: "wisata-fade-up 500ms 350ms both" }}>
                    {spot.description}
                  </p>
                  <p className="font-sans text-[13px] mb-7"
                     style={{ color: "rgba(255,255,255,0.4)", animation: "wisata-fade-up 500ms 450ms both" }}>
                    {spot.address}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap"
                       style={{ animation: "wisata-fade-up 500ms 560ms both" }}>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans font-semibold text-[13px] text-white border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/15 hover:border-white/50 active:scale-95 transition-all duration-200 backdrop-blur-sm"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Buka di Google Maps
                    </a>
                    {spot.htm && (
                      <span className="font-sans font-semibold text-[12px] text-primary bg-accent px-4 py-2.5 rounded-lg">
                        {spot.htm}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => scrollTo((activeIndex - 1 + WISATA.length) % WISATA.length)}
        aria-label="Sebelumnya"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={() => scrollTo((activeIndex + 1) % WISATA.length)}
        aria-label="Berikutnya"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-200 backdrop-blur-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Bottom bar — dots + auto-play progress */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-3 pb-5">
        {/* Progress bar — key resets animation on slide change + tab restore */}
        <div className="w-40 h-[2px] bg-white/20 rounded-full overflow-hidden">
          <div
            key={animKey}
            className="h-full bg-white/70 rounded-full origin-left"
            style={{ animation: `wisata-progress ${AUTOPLAY_MS}ms linear forwards` }}
          />
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {WISATA.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Destinasi ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-[6px] bg-white"
                  : "w-[6px] h-[6px] bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
