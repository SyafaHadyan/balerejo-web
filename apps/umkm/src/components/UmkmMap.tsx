"use client";

import { useEffect, useMemo, useRef } from "react";
import MapLibreGL from "maplibre-gl";
import {
  Map,
  MapGeoJSON,
  MapMarker,
  MarkerContent,
  useMap,
} from "@balerejo/shared/map";
import { PRODUCTS, type Product } from "@/data/umkm";

/* average of all product coords — map initial center */
const CENTER: [number, number] = [
  PRODUCTS.reduce((s, p) => s + p.lng, 0) / PRODUCTS.length,
  PRODUCTS.reduce((s, p) => s + p.lat, 0) / PRODUCTS.length,
];

function popupHTML(product: Product): string {
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${product.lat},${product.lng}`;
  const detailUrl = `/${product.slug}`;
  /* padding-right:28px on the title avoids the MapLibre close button (×) overlap */
  return `
    <div style="display:flex;flex-direction:column;gap:6px;padding:14px;width:210px;font-family:sans-serif;box-sizing:border-box;">
      <p style="font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:14px;color:#1D392B;line-height:1.3;margin:0;padding-right:22px;">${product.name}</p>
      <p style="font-size:12px;font-weight:600;color:#37644d;margin:0;">${product.price}</p>
      <p style="font-size:11px;color:#61665e;line-height:1.5;margin:0;">${product.address}</p>
      <div style="display:flex;gap:6px;margin-top:6px;">
        <a href="${detailUrl}"
           style="flex:1;display:inline-flex;align-items:center;justify-content:center;border-radius:6px;background:#1D392B;color:#fff;font-size:11px;font-weight:600;padding:7px 8px;text-decoration:none;">
          Detail
        </a>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer"
           style="flex:1;display:inline-flex;align-items:center;justify-content:center;gap:3px;border-radius:6px;border:1.5px solid #1D392B;color:#1D392B;font-size:11px;font-weight:600;padding:7px 8px;text-decoration:none;">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Rute
        </a>
      </div>
    </div>
  `;
}

/*
 * MapLibre renders its popup outside Next.js's CSS scope, so Tailwind/global CSS
 * classes won't apply. Patch styles directly on the DOM elements instead.
 * Must run after every setHTML call because MapLibre recreates the close button
 * each time, losing any previously applied inline styles.
 */
function stylePopup(p: MapLibreGL.Popup) {
  const el = p.getElement();
  if (!el) return;
  const content = el.querySelector(".maplibregl-popup-content") as HTMLElement | null;
  if (content) {
    content.style.padding = "0";
    content.style.borderRadius = "10px";
    content.style.overflow = "hidden";
    content.style.boxShadow = "0 6px 20px rgba(0,0,0,0.14)";
    content.style.border = "none";
  }
  const close = el.querySelector(".maplibregl-popup-close-button") as HTMLElement | null;
  if (close) {
    close.style.cssText =
      "position:absolute;top:6px;right:6px;width:22px;height:22px;" +
      "display:flex;align-items:center;justify-content:center;" +
      "background:rgba(0,0,0,0.07);border:none;border-radius:50%;" +
      "cursor:pointer;font-size:15px;color:#444;z-index:1;padding:0;line-height:1;";
  }
}

/*
 * MapController — lives inside <Map> so it can call useMap().
 * Uses popup.setHTML() to avoid React portal timing issues.
 */
function MapController({
  selectedSlug,
  onClose,
}: {
  selectedSlug: string | null;
  onClose: () => void;
}) {
  const { map, isLoaded } = useMap();
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const popup = useMemo(() => {
    const p = new MapLibreGL.Popup({
      offset: 16,
      closeButton: true,
      closeOnClick: false,
      maxWidth: "none",
    });
    p.on("close", () => onCloseRef.current());
    return p;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const product: Product | null = useMemo(
    () =>
      selectedSlug
        ? (PRODUCTS.find((p) => p.slug === selectedSlug) ?? null)
        : null,
    [selectedSlug],
  );

  useEffect(() => {
    if (!map || !isLoaded) return;
    if (product) {
      /* Update content + position first, then add only if not already open.
         addTo() when open triggers internal remove() → fires "close" → resets selectedSlug. */
      popup.setHTML(popupHTML(product)).setLngLat([product.lng, product.lat]);
      if (!popup.isOpen()) {
        popup.addTo(map);
      }
      /* Re-apply DOM styles after every setHTML — MapLibre recreates the close
         button on each content update, losing any previously applied inline styles. */
      stylePopup(popup);
      map.flyTo({ center: [product.lng, product.lat], zoom: 15, duration: 800 });
    } else {
      popup.remove();
    }
  }, [product, map, isLoaded, popup]);

  useEffect(() => () => { popup.remove(); }, [popup]);

  return null;
}

interface UmkmMapProps {
  selectedSlug: string | null;
  onMarkerClick: (slug: string) => void;
  onPopupClose: () => void;
}

export default function UmkmMap({
  selectedSlug,
  onMarkerClick,
  onPopupClose,
}: UmkmMapProps) {
  return (
    <Map
      center={CENTER}
      zoom={12}
      styles={{ light: "/data/osm-style.json", dark: "/data/osm-style.json" }}
      className="h-full w-full"
    >
      <MapGeoJSON
        data="/data/balerejo-border.geojson"
        fillPaint={{ "fill-color": "#1D392B", "fill-opacity": 0.06 }}
        linePaint={{ "line-color": "#c0392b", "line-width": 2.5, "line-opacity": 0.9 }}
      />

      <MapController selectedSlug={selectedSlug} onClose={onPopupClose} />

      {PRODUCTS.map((product) => {
        const isSelected = product.slug === selectedSlug;
        return (
          <MapMarker
            key={product.slug}
            longitude={product.lng}
            latitude={product.lat}
            onClick={() => onMarkerClick(product.slug)}
          >
            <MarkerContent>
              <svg
                width={isSelected ? 34 : 28}
                height={isSelected ? 44 : 36}
                viewBox="0 0 28 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-200 drop-shadow-md"
              >
                <path
                  d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z"
                  fill={isSelected ? "#c0392b" : "#1D392B"}
                />
                <circle cx="14" cy="14" r="5.5" fill={isSelected ? "#fff" : "#DCBe82"} />
              </svg>
            </MarkerContent>
          </MapMarker>
        );
      })}
    </Map>
  );
}
