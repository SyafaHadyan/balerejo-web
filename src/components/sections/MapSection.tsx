import Image from "next/image";

export default function MapSection() {
  return (
    <section className="flex flex-col items-center gap-[30px] py-[30px]" aria-label="Peta digital desa">
      <div className="flex flex-col items-center gap-[30px] text-center px-6">
        <h2 className="font-heading font-bold text-[28px] md:text-[36px] leading-[1.3] text-primary">
          Wilayah Desa
        </h2>
        <p className="font-sans text-[15px] leading-[1.6] text-muted">
          Jelajahi lokasi dan batas wilayah Desa Balerejo
        </p>
      </div>

      <div className="w-full max-w-[1000px] px-6">
        <Image
          src="/images/map.jpeg"
          alt="Peta Digital Desa Balerejo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
