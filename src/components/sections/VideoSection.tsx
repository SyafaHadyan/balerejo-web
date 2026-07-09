import VideoPlayer from "@/components/VideoPlayer";

export default function VideoSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] py-[30px]" aria-label="Kehidupan desa">
      <div className="flex flex-col items-center gap-[30px] text-center px-6">
        <p className="font-sans font-semibold text-[11px] tracking-[2px] uppercase text-accent">
          DESA BALEREJO
        </p>
        <h2 className="font-heading font-bold text-[28px] md:text-[36px] leading-[1.3] text-primary">
          Kehidupan Desa Balerejo
        </h2>
        <p className="font-sans text-[15px] leading-[1.6] text-muted">
          Potensi alam dan kehidupan masyarakat Desa Balerejo
        </p>
      </div>

      <VideoPlayer />
    </section>
  );
}
