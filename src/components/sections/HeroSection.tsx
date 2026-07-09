import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative h-[500px] md:h-[810px] overflow-hidden flex flex-col items-center justify-center gap-[30px]"
      aria-label="Selamat datang di Desa Balerejo"
    >
      <Image
        src="/images/hero.jpeg"
        alt="Pemandangan persawahan Desa Balerejo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(29,57,43,0.82) 0%, rgba(29,57,43,0.65) 50%, rgba(29,57,43,0.38) 100%)" }}
        aria-hidden="true"
      />

      <p className="relative z-10 font-sans font-semibold text-[11px] tracking-[2px] uppercase text-accent text-center">
        KECAMATAN PANGGUNGREJO · KABUPATEN BLITAR
      </p>

      <h1 className="relative z-10 font-heading font-bold text-[32px] md:text-[50px] leading-[1.12] text-white text-center px-4">
        Desa Balerejo,<br />
        tumbuh dari sawah<br />
        menuju sejahtera.
      </h1>

      <p className="relative z-10 font-sans text-[14px] md:text-[17px] text-[#bfbfbf]/85 text-center max-w-xl px-6">
        Profil, sejarah, dan data lengkap Desa Balerejo, dari pemerintahan sampai kondisi kependudukan.
      </p>
    </section>
  );
}
