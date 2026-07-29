import Image from "next/image";
import { WISATA, type WisataSpot } from "@/data/wisata";

const TYPE_LABEL: Record<WisataSpot["type"], string> = {
  pantai: "PANTAI",
  dam: "DAM",
  taman: "TAMAN",
  candi: "CANDI",
  air_terjun: "AIR TERJUN",
};

function WisataCard({ name, type, description, address, htm, image }: WisataSpot) {
  return (
    <article className="group bg-surface border-[1.5px] border-divider rounded-[16px] flex flex-col overflow-hidden">
      {/* image */}
      <div className="relative w-full aspect-[5/3] bg-[#e0dfd1] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover scale-[1.12] group-hover:scale-[1.15] transition-transform duration-300"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {/* type badge over image */}
        <span className="absolute top-4 left-4 font-sans font-semibold text-[11px] tracking-[1.2px] bg-primary/80 text-white px-3 py-[5px] rounded-full">
          {TYPE_LABEL[type]}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <p className="font-heading font-bold text-[18px] text-primary leading-[1.3]">{name}</p>
        <p className="font-sans text-[13px] text-muted leading-none">{address}</p>
        <p className="font-sans text-[14px] text-muted leading-[1.6]">{description}</p>

        <div className="mt-auto pt-3 border-t border-divider flex items-center justify-between">
          <span className="font-sans text-[12px] text-muted">Tiket Masuk</span>
          <span className="font-sans font-semibold text-[13px] text-primary">
            {htm ?? "—"}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function WisataGridSection() {
  return (
    <section
      className="bg-white py-[60px] md:py-[80px] px-6"
      aria-label="Destinasi wisata sekitar Balerejo"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {WISATA.map((spot) => (
          <WisataCard key={spot.slug} {...spot} />
        ))}
      </div>
    </section>
  );
}
