import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavbarJelajah from "@/components/NavbarJelajah";
import FooterJelajah from "@/components/FooterJelajah";
import { PRODUCTS } from "@/data/umkm";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  return {
    title: product?.name ?? "Detail Produk",
  };
}

function Divider() {
  return <div className="h-px w-full bg-[#dbdbd1]" aria-hidden="true" />;
}

function InfoLabel({ green = false, children }: { green?: boolean; children: React.ReactNode }) {
  return (
    <p
      className={`font-sans font-semibold text-[12px] leading-normal tracking-wide ${
        green ? "text-[#37644d]" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

function InfoValue({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[14px] text-primary leading-[1.6]">{children}</p>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  const waHref = `https://wa.me/${product.contactWa}?text=${encodeURIComponent(
    `Halo, saya tertarik dengan produk ${product.name}`
  )}`;

  return (
    <>
      <NavbarJelajah activePage="umkm" />
      <main>
        <section
          className="bg-white pb-[60px] md:pb-[80px] pt-10 px-6 md:px-[80px]"
          aria-label={`Detail produk ${product.name}`}
        >
          <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
            {/* Back link */}
            <Link
              href="/"
              className="font-sans font-semibold text-[14px] text-[#37644d] hover:text-primary transition-colors duration-200 self-start"
            >
              ← &nbsp;Kembali ke Katalog
            </Link>

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start">
              {/* Gallery */}
              <div className="flex flex-col gap-4 w-full lg:w-[600px] shrink-0">
                {/* Main photo */}
                <div className="relative w-full aspect-[4/3] md:h-[450px] md:aspect-auto rounded-[16px] overflow-hidden bg-[#e0dfd1]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 600px, 100vw"
                  />
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-[10px] overflow-hidden bg-surface border border-[#dbdbd1]"
                    >
                      <Image
                        src={product.image}
                        alt={`${product.name} foto ${i + 1}`}
                        fill
                        className="object-cover opacity-80"
                        sizes="(min-width: 1024px) 130px, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <p className="font-sans font-semibold text-[12px] text-[#37644d] tracking-wide">
                  {product.category}
                </p>
                <h1 className="font-heading font-bold text-[28px] md:text-[32px] text-primary leading-[1.3]">
                  {product.name}
                </h1>
                <p className="font-sans font-semibold text-[22px] md:text-[24px] text-[#37644d]">
                  {product.priceRange}
                </p>

                <Divider />

                <InfoLabel>Deskripsi Produk</InfoLabel>
                <p className="font-sans text-[14px] text-muted leading-[1.7]">
                  {product.description}
                </p>

                <Divider />

                <InfoLabel green>Kontak Penjual</InfoLabel>
                <InfoValue>{product.contactDisplay} (WhatsApp)</InfoValue>

                <InfoLabel green>Alamat</InfoLabel>
                <InfoValue>{product.address}</InfoValue>

                {product.social && (
                  <>
                    <InfoLabel green>Media Sosial (opsional)</InfoLabel>
                    <InfoValue>{product.social}</InfoValue>
                  </>
                )}

                {/* WhatsApp CTA */}
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center bg-accent text-primary font-sans font-semibold text-[15px] h-[52px] px-7 rounded-[8px] w-full sm:w-[200px] hover:opacity-90 transition-opacity duration-200"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterJelajah />
    </>
  );
}
