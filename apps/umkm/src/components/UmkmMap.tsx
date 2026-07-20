"use client";

import Link from "next/link";
import {
  Map,
  MapGeoJSON,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@balerejo/shared/map";
import { PRODUCTS } from "@/data/umkm";

/* average of all product coords — map initial center */
const CENTER: [number, number] = [
  PRODUCTS.reduce((s, p) => s + p.lng, 0) / PRODUCTS.length,
  PRODUCTS.reduce((s, p) => s + p.lat, 0) / PRODUCTS.length,
];

export default function UmkmMap() {
  return (
    <Map
      center={CENTER}
      zoom={12}
      className="h-full w-full rounded-[16px]"
    >
      <MapGeoJSON
        data="/data/balerejo-border.geojson"
        fillPaint={{ "fill-color": "#1D392B", "fill-opacity": 0.06 }}
        linePaint={{ "line-color": "#c0392b", "line-width": 2.5, "line-opacity": 0.9 }}
      />

      {PRODUCTS.map((product) => (
        <MapMarker
          key={product.slug}
          longitude={product.lng}
          latitude={product.lat}
        >
          <MarkerContent>
            <svg
              width="28"
              height="36"
              viewBox="0 0 28 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z"
                fill="#1D392B"
              />
              <circle cx="14" cy="14" r="5.5" fill="#DCBe82" />
            </svg>
          </MarkerContent>

          <MarkerPopup className="w-44 p-0" closeButton offset={16}>
            <div className="flex flex-col gap-1 p-3">
              <p
                style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                className="font-bold text-[14px] text-[#1D392B] leading-[1.3]"
              >
                {product.name}
              </p>
              <p className="text-[13px] font-semibold text-[#37644d]">
                {product.price}
              </p>
              <p className="text-[11px] text-[#61665e] leading-[1.4] mt-0.5">
                {product.address}
              </p>
              <Link
                href={`/${product.slug}`}
                className="mt-1.5 inline-flex items-center justify-center rounded-md bg-[#1D392B] text-white text-[12px] font-semibold px-2.5 py-1 hover:opacity-90 transition-opacity"
              >
                Lihat Detail →
              </Link>
            </div>
          </MarkerPopup>
        </MapMarker>
      ))}
    </Map>
  );
}
