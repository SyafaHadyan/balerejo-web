"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { WISATA, type WisataSpot } from "@/data/wisata";

const TYPE_LABEL: Record<WisataSpot["type"], string> = {
  pantai: "PANTAI",
  dam: "DAM",
  taman: "TAMAN",
  sumber: "SUMBER AIR",
};

export default function WisataGallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section className="relative w-full h-[calc(100vh-58px)]" aria-label="Galeri wisata">
      {/* Slide track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex h-full overflow-x-scroll snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {WISATA.map((spot, i) => (
          <div key={spot.slug} className="snap-start shrink-0 w-screen h-full relative">
            {/* Image */}
            <Image
              src={spot.image}
              alt={spot.name}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

            {/* Slide counter */}
            <p className="absolute top-8 right-10 font-sans text-[13px] text-white/50 tabular-nums">
              {String(i + 1).padStart(2, "0")} / {String(WISATA.length).padStart(2, "0")}
            </p>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 md:pb-20 max-w-[900px]">
              <p className="font-sans font-semibold text-[11px] text-accent tracking-[1.5px] mb-4">
                {TYPE_LABEL[spot.type]}
              </p>
              <h2 className="font-heading font-bold text-[36px] md:text-[54px] text-white leading-[1.15] mb-4">
                {spot.name}
              </h2>
              <p className="font-sans text-[15px] text-white/70 leading-[1.75] mb-5 max-w-[560px]">
                {spot.description}
              </p>
              <p className="font-sans text-[13px] text-white/40 mb-7">{spot.address}</p>

              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans font-semibold text-[13px] text-white border border-white/30 rounded-lg px-5 py-2.5 hover:bg-white/10 transition-colors backdrop-blur-sm"
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
          </div>
        ))}
      </div>

      {/* Prev arrow */}
      {activeIndex > 0 && (
        <button
          onClick={() => scrollTo(activeIndex - 1)}
          aria-label="Sebelumnya"
          className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {activeIndex < WISATA.length - 1 && (
        <button
          onClick={() => scrollTo(activeIndex + 1)}
          aria-label="Berikutnya"
          className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
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
    </section>
  );
}
