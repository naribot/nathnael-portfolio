"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { Container } from "@/components/layout/container";
import { navigationItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const mobileMenuId = "mobile-navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveId(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md"
      onKeyDown={handleKeyDown}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between">
          <a
            href="#home"
            className="group flex shrink-0 items-center gap-3 rounded-md"
            onClick={() => {
              setActiveId("home");
              setIsOpen(false);
            }}
          >
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-lg border border-accent/50 bg-accent/10 font-mono text-sm font-bold tracking-tight text-accent group-hover:border-accent"
            >
              NA
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-[-0.02em] sm:text-lg">
                {profile.name}
              </span>
              <span className="mt-0.5 hidden font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted sm:block">
                Software Engineer
              </span>
            </span>
          </a>

          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={activeId === item.href.slice(1) ? "location" : undefined}
                    className={cn(
                      "relative rounded-md px-3 py-2 text-[0.925rem] font-medium text-muted hover:bg-surface hover:text-foreground",
                      activeId === item.href.slice(1) &&
                        "bg-surface text-foreground after:absolute after:inset-x-3 after:-bottom-[0.5625rem] after:h-0.5 after:rounded-full after:bg-accent",
                    )}
                    onClick={() => setActiveId(item.href.slice(1))}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-foreground lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <nav
          id={mobileMenuId}
          aria-label="Mobile navigation"
          className={
            isOpen
              ? "max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border py-4 lg:hidden"
              : "hidden"
          }
        >
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeId === item.href.slice(1) ? "location" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-foreground",
                    activeId === item.href.slice(1) &&
                      "bg-surface text-accent",
                  )}
                  onClick={() => {
                    setActiveId(item.href.slice(1));
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
