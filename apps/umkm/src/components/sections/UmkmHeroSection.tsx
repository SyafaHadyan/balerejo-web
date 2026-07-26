import Image from "next/image";

export default function UmkmHeroSection() {
  return (
    <section
      className="relative h-[400px] md:h-[520px] overflow-hidden bg-[#c9c8ba]"
      aria-label="Hero produk UMKM"
    >
      <Image
        src="/images/umkm-desa.jpg"
        alt="Produk UMKM Desa Balerejo"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* dark green scrim */}
      <div className="absolute inset-0 bg-[rgba(29,57,43,0.5)]" aria-hidden="true" />

      {/* centred copy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-sans font-semibold text-[12px] text-accent tracking-[1.5px]">
          PRODUK UNGGULAN DESA
        </p>
        <h1 className="font-heading font-bold text-[32px] md:text-[42px] text-white leading-[1.3] max-w-[800px]">
          Cita Rasa &amp; Karya Desa Balerejo
        </h1>
        <p className="font-sans text-[15px] md:text-[16px] text-[#bfbfbf] max-w-[600px]">
          Dari dapur dan tangan warga, untuk meja dan rumah Anda.
        </p>
      </div>


    </section>
  );
}
