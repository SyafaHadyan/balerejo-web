"use client";

import { useState } from "react";
import InfografisSection from "@/components/sections/InfografisSection";
import APBDesSection from "@/components/sections/APBDesSection";

function IconPenduduk({ active }: { active: boolean }) {
  const color = active ? "#1D392B" : "#9ca3af";
  return (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="10" cy="9" r="4" stroke={color} strokeWidth="1.8" />
      <path d="M2 23c0-4 3.6-7 8-7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="9" r="4" stroke={color} strokeWidth="1.8" />
      <path d="M19 16c4.4 0 8 3 8 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconAPBDes({ active }: { active: boolean }) {
  const color = active ? "#1D392B" : "#9ca3af";
  return (
    <svg width="36" height="36" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="22" height="16" rx="3" stroke={color} strokeWidth="1.8" />
      <path d="M3 11h22" stroke={color} strokeWidth="1.8" />
      <path d="M8 17h4M16 17h4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const TABS = [
  { id: "penduduk", label: "Penduduk", Icon: IconPenduduk },
  { id: "apbdes",   label: "APBDes",   Icon: IconAPBDes   },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function InfografisTabs() {
  const [active, setActive] = useState<TabId>("penduduk");

  return (
    <div>
      <div className="border-b border-divider overflow-x-auto">
        <div className="flex justify-center w-full">
          {TABS.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={[
                  "relative flex flex-col items-center gap-[8px] px-10 py-5 transition-colors",
                  isActive ? "text-primary" : "text-[#9ca3af] hover:text-muted",
                ].join(" ")}
              >
                <Icon active={isActive} />
                <span className={`font-sans text-[15px] leading-none ${isActive ? "font-semibold" : ""}`}>
                  {label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-t-[2px]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {active === "penduduk" && <InfografisSection />}
      {active === "apbdes"   && <APBDesSection />}
    </div>
  );
}
