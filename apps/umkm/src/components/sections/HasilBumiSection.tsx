import Image from "next/image";
import { HASIL_BUMI } from "@/data/hasil-bumi";

export default function HasilBumiSection() {
  return (
    <section
      className="bg-surface py-[60px] md:py-[80px] px-6"
      aria-label="Hasil bumi Desa Balerejo"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* header */}
        <div className="mb-10">
          <p className="font-sans font-semibold text-[12px] text-muted tracking-[1.5px] mb-3">
            POTENSI DESA
          </p>
          <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-primary leading-[1.2]">
            Hasil Bumi Balerejo
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-muted mt-3 max-w-[540px]">
            Kekayaan alam dan pertanian yang menjadi sumber penghidupan warga Desa Balerejo.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HASIL_BUMI.map(({ name, category, luas, hasil, description, image }) => (
            <div
              key={name}
              className="bg-white border-[1.5px] border-divider rounded-[16px] overflow-hidden flex flex-col gap-3"
            >
              {image && (
                <div className="relative w-full aspect-[16/9] bg-[#e0dfd1] overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover scale-[1.12]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              )}
              <div className="flex flex-col gap-3 p-6 pt-4">
                <span className="self-start font-sans font-semibold text-[11px] text-muted tracking-[1.2px] uppercase bg-divider px-3 py-[5px] rounded-full">
                  {category}
                </span>
                <p className="font-heading font-bold text-[20px] text-primary leading-[1.3]">
                  {name}
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[11px] text-muted">Luas</span>
                    <span className="font-sans font-semibold text-[13px] text-primary">{luas}</span>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-sans text-[11px] text-muted">Hasil</span>
                    <span className="font-sans font-semibold text-[13px] text-primary">{hasil}</span>
                  </div>
                </div>
                <p className="font-sans text-[14px] text-muted leading-[1.6]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
