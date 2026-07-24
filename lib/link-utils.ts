import type { AnchorHTMLAttributes } from "react";

type AnchorTarget = AnchorHTMLAttributes<HTMLAnchorElement>["target"];

export function getLinkBehavior(
  href: string,
  target?: AnchorTarget,
  rel?: string,
) {
  const isExternal = /^https?:\/\//i.test(href);
  const resolvedTarget = target ?? (isExternal ? "_blank" : undefined);
  const opensInNewTab = resolvedTarget === "_blank";
  const resolvedRel = opensInNewTab
    ? Array.from(new Set([...(rel?.split(" ") ?? []), "noopener", "noreferrer"]))
        .filter(Boolean)
        .join(" ")
    : rel;

  return {
    target: resolvedTarget,
    rel: resolvedRel,
    opensInNewTab,
  };
}
