import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, type Product } from "@/data/umkm";

function ProductCard({ slug, name, price, image }: Pick<Product, "slug" | "name" | "price" | "image">) {
  return (
    <Link
      href={`/${slug}`}
      className="group bg-surface border-[1.5px] border-[#dbdbd1] rounded-[16px] flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200"
      aria-label={`${name} — ${price}`}
    >
      <div className="relative w-full aspect-[5/3] bg-[#e0dfd1] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <p className="font-heading font-bold text-[18px] text-primary leading-[1.3]">{name}</p>
        <p className="font-sans font-semibold text-[16px] text-[#37644d]">{price}</p>
      </div>
    </Link>
  );
}

export default function UmkmGridSection() {
  return (
    <section
      className="bg-white py-[60px] md:py-[80px] px-6"
      aria-label="Katalog produk UMKM"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.slug}
            slug={product.slug}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
