const CONNECTOR = "rgba(55,100,77,0.4)";

const ORG_CHIEF     = { name: "Nama Kepala Desa",      role: "Kepala Desa" };
const ORG_SECRETARY = { name: "Nama Sekretaris",        role: "Sekretaris Desa" };
const ORG_STAFF = [
  { name: "Nama Kaur Keuangan",      role: "Kaur Keuangan" },
  { name: "Nama Kaur Umum",          role: "Kaur Umum & Perencanaan" },
  { name: "Nama Kasi Pemerintahan",  role: "Kasi Pemerintahan" },
] as const;

function OrgCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white border border-[#d1d1d1] rounded-[14px] w-[200px] min-h-[130px] flex flex-col items-center pt-4 pb-3 shrink-0">
      <div className="w-14 h-14 rounded-full bg-accent/30 shrink-0" />
      <p className="font-sans font-semibold text-[13px] text-primary text-center px-[10px] mt-[10px] leading-tight w-full">
        {name}
      </p>
      <p className="font-sans text-[11px] text-[#37644d] text-center">
        {role}
      </p>
    </div>
  );
}

export default function OrgChartSection() {
  return (
    <section className="px-[80px] py-[40px] flex flex-col gap-[30px]" aria-label="Struktur pemerintahan">
      <h2 className="font-heading font-bold text-[26px] leading-[1.3] text-primary">
        Struktur Pemerintahan
      </h2>

      <div className="flex flex-col items-center w-[720px] mx-auto">
        <OrgCard {...ORG_CHIEF} />

        <div className="w-px h-[40px]" style={{ backgroundColor: CONNECTOR }} aria-hidden="true" />

        <OrgCard {...ORG_SECRETARY} />

        <div className="w-px h-[25px]" style={{ backgroundColor: CONNECTOR }} aria-hidden="true" />

        <div className="relative w-full" aria-hidden="true">
          <div className="absolute top-0 h-px" style={{ left: "100px", right: "100px", backgroundColor: CONNECTOR }} />
          <div className="absolute top-0 left-[100px] w-px h-[30px]" style={{ backgroundColor: CONNECTOR }} />
          <div className="absolute top-0 left-1/2 w-px h-[30px]" style={{ backgroundColor: CONNECTOR }} />
          <div className="absolute top-0 right-[100px] w-px h-[30px]" style={{ backgroundColor: CONNECTOR }} />
        </div>

        <div className="flex justify-between w-full mt-[30px]">
          {ORG_STAFF.map(({ name, role }) => (
            <OrgCard key={role} name={name} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
