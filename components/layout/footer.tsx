import { Container } from "@/components/layout/container";
import { profile, socialLinks } from "@/data/portfolio";

export function Footer() {
  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");

  return (
    <footer className="border-t border-border py-6 text-sm text-muted">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {linkedIn && (
            <a
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm py-1 hover:text-foreground"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <a
            href={profile.emailHref}
            className="rounded-sm py-1 hover:text-foreground"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
