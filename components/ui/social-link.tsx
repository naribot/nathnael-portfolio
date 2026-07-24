import type { AnchorHTMLAttributes, ReactNode } from "react";

import { getLinkBehavior } from "@/lib/link-utils";
import { cn } from "@/lib/utils";

type SocialLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
> & {
  label: string;
  url: string;
  icon?: ReactNode;
};

export function SocialLink({
  label,
  url,
  icon,
  className,
  target,
  rel,
  ...anchorProps
}: SocialLinkProps) {
  const linkBehavior = getLinkBehavior(url, target, rel);

  return (
    <a
      href={url}
      target={linkBehavior.target}
      rel={linkBehavior.rel}
      className={cn(
        "inline-flex min-h-10 max-w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      {...anchorProps}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>
        {label}
        {linkBehavior.opensInNewTab && (
          <span className="sr-only"> (opens in a new tab)</span>
        )}
      </span>
    </a>
  );
}
