"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/wisata", label: "Wisata", id: "wisata" },
  { href: "/umkm", label: "UMKM", id: "umkm" },
  { href: "/peta-digital", label: "Peta Digital", id: "peta-digital" },
  { href: "/", label: "Situs Utama Desa", id: "situs-utama" },
] as const;

type ActivePage = (typeof NAV_LINKS)[number]["id"];

interface NavbarJelajahProps {
  activePage?: ActivePage;
}

export default function NavbarJelajah({ activePage }: NavbarJelajahProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary flex items-center py-[18px]">
        <div className="w-full flex items-center justify-between px-12">
          <Link
            href="/umkm"
            className="font-heading font-bold text-[22px] text-white leading-none"
            aria-label="Jelajah Balerejo — katalog UMKM"
          >
            Jelajah Balerejo
          </Link>

          <nav aria-label="Navigasi utama">
            <ul className="hidden md:flex items-center gap-12">
              {NAV_LINKS.map(({ href, label, id }) => (
                <li key={id}>
                  <Link
                    href={href}
                    aria-current={activePage === id ? "page" : undefined}
                    className="font-sans font-semibold text-[15px] text-[#bfbfbf] hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={buttonRef}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[#bfbfbf] hover:text-white transition-colors duration-200 rounded focus-visible:outline-2 focus-visible:outline-accent"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-jelajah"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <>
                  <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu-jelajah"
        ref={menuRef}
        aria-label="Menu navigasi"
        className={`fixed inset-x-0 top-[65px] z-40 bg-primary md:hidden transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav aria-label="Navigasi mobile">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map(({ href, label, id }) => (
              <li key={id}>
                <Link
                  href={href}
                  aria-current={activePage === id ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="block px-8 py-4 font-sans font-semibold text-[15px] text-[#bfbfbf] hover:text-white transition-colors duration-150 border-b border-white/10 last:border-b-0"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
