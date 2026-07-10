interface PageHeaderProps {
  eyebrow: string;
  heading: string;
}

export default function PageHeader({ eyebrow, heading }: PageHeaderProps) {
  return (
    <div className="bg-primary h-[220px] flex flex-col items-center justify-center gap-[18px] text-center pt-[54px] pb-[83px]">
      <p className="font-sans text-[11px] leading-[1.6] text-accent">
        {eyebrow}
      </p>
      <h1 className="font-heading font-bold text-[36px] leading-[1.3] text-white">
        {heading}
      </h1>
    </div>
  );
}
