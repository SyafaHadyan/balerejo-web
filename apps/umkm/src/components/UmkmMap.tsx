"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
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
  /* padding-right on the title avoids the MapLibre close button (×) overlap */
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
 * MapLibre renders its popup outside Next.js's CSS scope so Tailwind/global CSS
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

/* ── Popup controller ───────────────────────────────────────── */
function MapController({
  selectedSlug,
  onClose,
  sidebarOpen,
  sidebarWidth,
}: {
  selectedSlug: string | null;
  onClose: () => void;
  sidebarOpen: boolean;
  sidebarWidth: number;
}) {
  const { map, isLoaded } = useMap();
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  /* Refs so flyTo reads the current sidebar state without re-triggering
     the effect every time the sidebar is opened/closed. */
  const sidebarOpenRef = useRef(sidebarOpen);
  sidebarOpenRef.current = sidebarOpen;
  const sidebarWidthRef = useRef(sidebarWidth);
  sidebarWidthRef.current = sidebarWidth;

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
      popup.setHTML(popupHTML(product)).setLngLat([product.lng, product.lat]);
      if (!popup.isOpen()) popup.addTo(map);
      stylePopup(popup);
      /* Offset flyTo so the marker centers in the visible map area (not behind
         the sidebar). Sidebar state is read via refs — sidebar open/close should
         not re-trigger flyTo, only a product change should. */
      map.flyTo({
        center: [product.lng, product.lat],
        zoom: 15,
        duration: 800,
        padding: {
          left: sidebarOpenRef.current ? sidebarWidthRef.current : 0,
          top: 0, right: 0, bottom: 0,
        },
      });
    } else {
      popup.remove();
    }
  }, [product, map, isLoaded, popup]); // sidebarOpen/Width intentionally read via refs

  useEffect(() => () => { popup.remove(); }, [popup]);

  return null;
}

/* ── User location blue dot ─────────────────────────────────── */
function UserLocationMarker({
  onLocated,
}: {
  onLocated: (coords: [number, number]) => void;
}) {
  const [coords, setCoords] = useState<[number, number] | null>(null);
  const onLocatedRef = useRef(onLocated);
  onLocatedRef.current = onLocated;

  useEffect(() => {
    if (!navigator.geolocation) return;

    /* enableHighAccuracy: false — desktops have no GPS chip; high-accuracy
       mode causes immediate failure on many desktop environments. */
    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const c: [number, number] = [pos.coords.longitude, pos.coords.latitude];
        setCoords(c);
        onLocatedRef.current(c);
      },
      () => { /* permission denied or unavailable — fail silently */ },
      { enableHighAccuracy: false, timeout: 10000 },
    );

    return () => navigator.geolocation.clearWatch(id);
  }, []);

  if (!coords) return null;

  return (
    <MapMarker longitude={coords[0]} latitude={coords[1]}>
      <MarkerContent>
        {/* Use inline styles — Tailwind animate-ping gets clipped inside
            MapLibre's marker element. CSS animation via inline keyframes is safer. */}
        <div style={{ position: "relative", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Pulsing outer ring */}
          <div style={{
            position: "absolute",
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "rgba(66,133,244,0.25)",
            animation: "umkm-ping 1.6s ease-out infinite",
          }} />
          {/* Solid inner dot */}
          <div style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#4285F4",
            border: "2.5px solid white",
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }} />
        </div>
      </MarkerContent>
    </MapMarker>
  );
}

/* ── "Fly to my location" button (inside <Map> to access useMap) ── */
function LocateButton() {
  const { map, isLoaded } = useMap();
  const [status, setStatus] = useState<"idle" | "loading" | "denied">("idle");

  const handleLocate = useCallback(() => {
    if (!navigator.geolocation || !map || !isLoaded) return;
    setStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        map.flyTo({
          center: [pos.coords.longitude, pos.coords.latitude],
          zoom: 15,
          duration: 1200,
        });
        setStatus("idle");
      },
      (err) => {
        /* Only hide the button permanently on explicit permission denial (code 1).
           Timeout (3) or position unavailable (2) are transient — reset to idle
           so the user can try again. */
        setStatus(err.code === 1 ? "denied" : "idle");
      },
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }, [map, isLoaded]);

  /* Hide only if geolocation API is absent or permission was explicitly denied */
  if (typeof navigator !== "undefined" && !navigator.geolocation) return null;
  if (status === "denied") return null;

  return (
    <button
      type="button"
      onClick={handleLocate}
      disabled={status === "loading"}
      title="Lokasi saya"
      aria-label="Pergi ke lokasi saya"
      className="absolute bottom-[172px] right-4 z-20 w-10 h-10 flex items-center justify-center bg-white border border-[#e0e0e0] rounded-lg shadow-md hover:bg-[#f5f8f5] transition-colors disabled:opacity-60 disabled:cursor-wait"
    >
      {status === "loading" ? (
        /* Spinner */
        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#1D392B" strokeWidth="3" />
          <path className="opacity-75" fill="#1D392B" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      ) : (
        /* Crosshair/locate icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke="#1D392B" strokeWidth="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#1D392B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}

/* ── Main map component ─────────────────────────────────────── */
interface UmkmMapProps {
  selectedSlug: string | null;
  onMarkerClick: (slug: string) => void;
  onPopupClose: () => void;
  sidebarOpen: boolean;
  sidebarWidth: number;
}

export default function UmkmMap({
  selectedSlug,
  onMarkerClick,
  onPopupClose,
  sidebarOpen,
  sidebarWidth,
}: UmkmMapProps) {
  /* userCoords is set once geolocation is available — currently unused but
     available to wire up additional behaviour (e.g. distance-to-UMKM). */
  const [, setUserCoords] = useState<[number, number] | null>(null);

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

      <MapController
        selectedSlug={selectedSlug}
        onClose={onPopupClose}
        sidebarOpen={sidebarOpen}
        sidebarWidth={sidebarWidth}
      />

      <UserLocationMarker onLocated={setUserCoords} />
      <LocateButton />

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
