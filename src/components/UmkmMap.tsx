"use client";

import Link from "next/link";
import {
  Map,
  MapGeoJSON,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/map";
import { PRODUCTS } from "@/data/umkm";

/* ------------------------------------------------------------------ */
/* Village boundary polygon — traced from public/images/map.jpeg       */
/* Calibrated at zoom-13 scale against OSM landmarks (Balerejo center) */
/* GeoJSON convention: [longitude, latitude]                           */
/* ------------------------------------------------------------------ */
const BALEREJO_BOUNDARY = {
  type: "Feature" as const,
  properties: { name: "Desa Balerejo" },
  geometry: {
    type: "Polygon" as const,
    coordinates: [[
      [112.264, -8.159],
      [112.295, -8.159],
      [112.295, -8.168],
      [112.295, -8.183],
      [112.289, -8.192],
      [112.289, -8.210],
      [112.292, -8.211],
      [112.292, -8.224],
      [112.288, -8.228],
      [112.288, -8.234],
      [112.292, -8.235],
      [112.292, -8.241],
      [112.288, -8.245],
      [112.284, -8.250],
      [112.281, -8.255],
      [112.278, -8.265],
      [112.274, -8.273],
      [112.270, -8.283],
      [112.267, -8.293],
      [112.264, -8.302],
      [112.257, -8.310],
      [112.250, -8.317],
      [112.242, -8.322],
      [112.235, -8.327],
      [112.227, -8.331],
      [112.219, -8.336],
      [112.212, -8.341],
      [112.204, -8.346],
      [112.203, -8.354],
      [112.202, -8.362],
      [112.201, -8.370],
      [112.201, -8.376],
      [112.203, -8.368],
      [112.203, -8.357],
      [112.203, -8.337],
      [112.216, -8.332],
      [112.216, -8.324],
      [112.204, -8.320],
      [112.203, -8.307],
      [112.217, -8.303],
      [112.216, -8.295],
      [112.204, -8.291],
      [112.203, -8.279],
      [112.233, -8.279],
      [112.233, -8.269],
      [112.203, -8.268],
      [112.203, -8.258],
      [112.218, -8.257],
      [112.218, -8.250],
      [112.203, -8.249],
      [112.203, -8.240],
      [112.224, -8.239],
      [112.224, -8.232],
      [112.233, -8.231],
      [112.233, -8.225],
      [112.240, -8.224],
      [112.240, -8.218],
      [112.248, -8.218],
      [112.248, -8.211],
      [112.257, -8.211],
      [112.257, -8.200],
      [112.263, -8.183],
      [112.264, -8.159],
    ]],
  },
};

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
      {/* Village boundary polygon */}
      <MapGeoJSON
        data={BALEREJO_BOUNDARY}
        fillPaint={{ "fill-color": "#1D392B", "fill-opacity": 0.06 }}
        linePaint={{ "line-color": "#c0392b", "line-width": 2.5, "line-opacity": 0.9 }}
      />

      {/* UMKM location markers */}
      {PRODUCTS.map((product) => (
        <MapMarker
          key={product.slug}
          longitude={product.lng}
          latitude={product.lat}
        >
          {/* Custom pin in brand colours */}
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

          {/* Click popup */}
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
                href={`/umkm/${product.slug}`}
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
