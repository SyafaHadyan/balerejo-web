const STATS = [
  { value: process.env.NEXT_PUBLIC_STAT_PENDUDUK   ?? "±2.500",      label: "Jiwa Penduduk" },
  { value: process.env.NEXT_PUBLIC_STAT_KK         ?? "±800",        label: "Kepala Keluarga" },
  { value: process.env.NEXT_PUBLIC_STAT_DUSUN      ?? "4",           label: "Dusun" },
  { value: process.env.NEXT_PUBLIC_STAT_KECAMATAN  ?? "Panggungrejo", label: "Kecamatan" },
  { value: process.env.NEXT_PUBLIC_STAT_KABUPATEN  ?? "Blitar",      label: "Kabupaten" },
];

export default function StatsBar() {
  return (
    <div className="bg-surface" aria-label="Statistik desa">

      <div className="hidden md:flex items-center justify-center h-[150px]">
        <dl className="flex items-center w-[1108px]">
          {STATS.map(({ value, label }, index) => (
            <div key={label} className="flex items-center flex-1">
              <div className="flex-1 flex flex-col items-center gap-[6px] text-center px-6">
                <dt className="order-2 font-sans text-[13px] leading-[1.6] text-muted">
                  {label}
                </dt>
                <dd className="order-1 font-heading font-bold text-[36px] leading-[1.3] text-primary">
                  {value}
                </dd>
              </div>
              {index < STATS.length - 1 && (
                <div className="w-px h-[68px] bg-divider shrink-0" aria-hidden="true" />
              )}
            </div>
          ))}
        </dl>
      </div>

      <dl className="md:hidden grid grid-cols-2 divide-x divide-y divide-divider">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-[6px] py-6 px-4 text-center">
            <dt className="order-2 font-sans text-[12px] leading-[1.6] text-muted">
              {label}
            </dt>
            <dd className="order-1 font-heading font-bold text-[28px] leading-none text-primary">
              {value}
            </dd>
          </div>
        ))}
      </dl>

    </div>
  );
}
