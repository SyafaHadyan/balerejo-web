const SEP = "#b2ada3";

const ORG_CHIEF     = { name: "Nama Kepala Desa",     role: "Kepala Desa" };
const ORG_SECRETARY = { name: "Nama Sekretaris",       role: "Sekretaris Desa" };
const ORG_STAFF = [
  { name: "Nama Kaur Keuangan",     role: "Kaur Keuangan" },
  { name: "Nama Kaur Umum",         role: "Kaur Umum & Perencanaan" },
  { name: "Nama Kasi Pemerintahan", role: "Kasi Pemerintahan" },
] as const;

function VLine({ h = 68 }: { h?: number }) {
  return (
    <div
      className="w-[2px] shrink-0"
      style={{ height: h, backgroundColor: SEP }}
      aria-hidden="true"
    />
  );
}


function OrgCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-surface border border-divider rounded-[8px] min-w-[160px] md:min-w-[300px] flex flex-col items-center gap-[10px] px-[10px] py-[16px] shrink-0 overflow-hidden">
      <div className="w-12 h-12 rounded-full bg-accent/30 shrink-0" />
      <div className="flex flex-col items-center gap-[10px] text-center">
        <p className="font-heading font-bold text-[15px] md:text-[18px] leading-[1.3] text-primary">
          {name}
        </p>
        <p className="font-sans text-[11px] leading-[1.6] text-primary">
          {role}
        </p>
      </div>
    </div>
  );
}

export default function OrgChartSection() {
  return (
    <section className="px-5 md:px-[80px] py-[40px] flex flex-col gap-[30px]" aria-label="Struktur pemerintahan">
      <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
        Struktur Pemerintahan
      </h2>

      {/* Desktop (xl+): T-branch from Sekretaris to 3 staff cards */}
      <div className="hidden xl:flex flex-col items-center gap-[5px] w-full">
        <OrgCard {...ORG_CHIEF} />
        <VLine />
        <OrgCard {...ORG_SECRETARY} />
        {/* T-branch connector: 910px = 3×300px cards + 2×5px gaps
            trunk at center (455px), H-bar at y=45, drops to each card top */}
        <div className="relative w-[910px] h-[75px]" aria-hidden="true">
          <div className="absolute inset-y-0 left-1/2 -translate-x-px w-[2px]" style={{ backgroundColor: SEP }} />
          <div className="absolute h-[2px]" style={{ top: "45px", left: "150px", right: "150px", backgroundColor: SEP }} />
          <div className="absolute w-[2px]" style={{ top: "45px", bottom: 0, left: "149px", backgroundColor: SEP }} />
          <div className="absolute w-[2px]" style={{ top: "45px", bottom: 0, right: "149px", backgroundColor: SEP }} />
        </div>
        <div className="flex gap-[5px]">
          <OrgCard {...ORG_STAFF[0]} />
          <OrgCard {...ORG_STAFF[1]} />
          <OrgCard {...ORG_STAFF[2]} />
        </div>
      </div>

      {/* Mobile/Tablet (below xl): 2+1 layout — Kaur Keuangan + Kaur Umum side by side,
          Kasi Pemerintahan centered below. T-branch from Sekretaris branches to the two
          side-by-side cards; center line continues through the gap down to Kasi. */}
      <div className="xl:hidden flex flex-col items-center w-full max-w-[500px] mx-auto gap-[5px]">
        <OrgCard {...ORG_CHIEF} />
        <VLine h={30} />
        <OrgCard {...ORG_SECRETARY} />
        <div className="relative w-full">
          {/* Center vertical line — hidden behind opaque cards, visible in gaps */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-px w-[2px]" style={{ backgroundColor: SEP }} aria-hidden="true" />
          {/* H-bar at y=22 — the trunk (center line from y=0→22) is visible above it */}
          <div className="absolute h-[2px]" style={{ top: "22px", left: "calc(25% - 4px)", right: "calc(25% - 4px)", backgroundColor: SEP }} aria-hidden="true" />
          {/* Left drop to Kaur Keuangan */}
          <div className="absolute w-[2px] h-[22px]" style={{ top: "22px", left: "calc(25% - 4px)", backgroundColor: SEP }} aria-hidden="true" />
          {/* Right drop to Kaur Umum */}
          <div className="absolute w-[2px] h-[22px]" style={{ top: "22px", right: "calc(25% - 4px)", backgroundColor: SEP }} aria-hidden="true" />
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-5 w-full pt-[44px]">
            <div className="flex justify-center"><OrgCard {...ORG_STAFF[0]} /></div>
            <div className="flex justify-center"><OrgCard {...ORG_STAFF[1]} /></div>
            <div className="col-span-2 flex justify-center">
              <OrgCard {...ORG_STAFF[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
