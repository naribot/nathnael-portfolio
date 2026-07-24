import type { AnchorHTMLAttributes, ReactNode } from "react";

import { getLinkBehavior } from "@/lib/link-utils";
import { cn } from "@/lib/utils";

type ButtonLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  ...anchorProps
}: ButtonLinkProps) {
  const linkBehavior = getLinkBehavior(href, target, rel);

  return (
    <a
      href={href}
      target={linkBehavior.target}
      rel={linkBehavior.rel}
      className={cn(
        "inline-flex min-h-11 max-w-full items-center justify-center rounded-md border px-4 py-2 text-center text-sm font-medium whitespace-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" &&
          "border-accent bg-accent text-background hover:bg-transparent hover:text-accent",
        variant === "secondary" &&
          "border-border bg-surface text-foreground hover:border-accent hover:text-accent",
        className,
      )}
      {...anchorProps}
    >
      {children}
      {linkBehavior.opensInNewTab && (
        <span className="sr-only"> (opens in a new tab)</span>
      )}
    </a>
  );
}
