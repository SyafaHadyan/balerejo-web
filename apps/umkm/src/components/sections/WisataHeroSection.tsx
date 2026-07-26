export default function WisataHeroSection() {
  return (
    <section
      className="relative bg-primary py-[80px] md:py-[100px] px-6 overflow-hidden"
      aria-label="Hero wisata Desa Balerejo"
    >
      {/* decorative circles */}
      <div
        className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border-[1.5px] border-white/10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-16 w-[240px] h-[240px] rounded-full border-[1.5px] border-white/10"
        aria-hidden="true"
      />

      <div className="relative max-w-[1280px] mx-auto">
        <p className="font-sans font-semibold text-[12px] text-accent tracking-[1.5px] mb-4">
          JELAJAH BALEREJO
        </p>
        <h1 className="font-heading font-bold text-[32px] md:text-[48px] text-white leading-[1.2] max-w-[640px]">
          Wisata Alam Sekitar Balerejo
        </h1>
        <p className="font-sans text-[15px] md:text-[16px] text-[#bfbfbf] mt-4 max-w-[520px]">
          Air terjun tersembunyi, pantai selatan yang memukau, dan goa alam yang menanti untuk dijelajahi.
        </p>
      </div>
    </section>
  );
}
