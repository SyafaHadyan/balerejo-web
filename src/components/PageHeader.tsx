interface PageHeaderProps {
  eyebrow: string;
  heading: string;
}

export default function PageHeader({ eyebrow, heading }: PageHeaderProps) {
  return (
    <div className="bg-primary flex flex-col items-center justify-center gap-[27px] text-center py-[67px]">
      <p className="font-sans font-semibold text-[17px] leading-[1.6] text-accent">
        {eyebrow}
      </p>
      <h1 className="font-heading font-bold text-[48px] leading-[1.3] text-white">
        {heading}
      </h1>
    </div>
  );
}
