import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}
