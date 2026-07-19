"use client";

import { useEffect, useState } from "react";

/**
 * Returns the base domain by stripping the "umkm." subdomain prefix.
 * e.g. umkm.balerejo.desa.id  → https://balerejo.desa.id
 *      umkm.foo.example.com   → https://foo.example.com
 * Falls back to localhost:3000 in dev (port 3001 → 3000).
 */
export function useMainSiteUrl(): string {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { protocol, host } = window.location;
    const mainHost = host
      .replace(/^umkm\./, "")   // strip subdomain prefix in production
      .replace(/:3001$/, ":3000"); // strip port shift in local dev
    setUrl(`${protocol}//${mainHost}`);
  }, []);

  return url;
}
