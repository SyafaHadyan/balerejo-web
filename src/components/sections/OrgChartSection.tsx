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

      <div className="hidden md:flex flex-col items-center w-full">
        <OrgCard {...ORG_CHIEF} />
        <VLine />
        <OrgCard {...ORG_SECRETARY} />

        {/* T-branch connector: trunk → H-bar → 3 drops */}
        <div className="relative w-full h-[55px]" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[25px]" style={{ backgroundColor: SEP }} />
          <div className="absolute top-[25px] h-[2px]" style={{ left: "calc(100% / 6)", right: "calc(100% / 6)", backgroundColor: SEP }} />
          <div className="absolute top-[25px] w-[2px] h-[30px]" style={{ left: "calc(100% / 6 - 1px)", backgroundColor: SEP }} />
          <div className="absolute top-[25px] w-[2px] h-[30px]" style={{ left: "calc(50% - 1px)", backgroundColor: SEP }} />
          <div className="absolute top-[25px] w-[2px] h-[30px]" style={{ right: "calc(100% / 6 - 1px)", backgroundColor: SEP }} />
        </div>

        <div className="grid grid-cols-3 gap-[5px] w-full">
          {ORG_STAFF.map(({ name, role }) => (
            <div key={role} className="flex justify-center">
              <OrgCard name={name} role={role} />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center w-full max-w-[500px] mx-auto">
        <OrgCard {...ORG_CHIEF} />
        <VLine h={22} />
        <OrgCard {...ORG_SECRETARY} />
        <div className="relative w-full">
          <div
            className="absolute top-0 h-[20px]"
            style={{ left: "calc(25% - 4px)", right: "50%", borderTop: "1px solid " + SEP, borderLeft: "1px solid " + SEP }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 h-[20px]"
            style={{ left: "50%", right: "calc(25% - 4px)", borderTop: "1px solid " + SEP, borderRight: "1px solid " + SEP }}
            aria-hidden="true"
          />
          <div
            className="absolute top-0 h-full"
            style={{ left: "calc(50% - 0.5px)", width: "1px", backgroundColor: SEP }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-6 w-full pt-[20px]">
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
