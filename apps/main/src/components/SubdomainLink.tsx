"use client";

import { useEffect, useState } from "react";

interface Props {
  prefix: string;
  className?: string;
  children: React.ReactNode;
}

export default function SubdomainLink({ prefix, className, children }: Props) {
  const [href, setHref] = useState("#");

  useEffect(() => {
    const { protocol, host } = window.location;
    setHref(`${protocol}//${prefix}.${host}`);
  }, [prefix]);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
