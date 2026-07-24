import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  number?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  number,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || number) && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent",
            align === "center" && "justify-center",
          )}
        >
          {number && <span aria-hidden="true">{number}</span>}
          {number && eyebrow && <span aria-hidden="true">/</span>}
          {eyebrow}
          <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
        </p>
      )}
      <h2 className="text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
