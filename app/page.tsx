import { ExternalLink, Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";
import { SocialLink } from "@/components/ui/social-link";
import { Reveal } from "@/components/ui/reveal";
import { Achievements } from "@/components/sections/achievements";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { profile, socialLinks } from "@/data/portfolio";

export default function Home() {
  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");
  const github = socialLinks.find((link) => link.platform === "GitHub");

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-accent px-4 py-2 font-medium text-background focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="min-w-0 flex-1">
        <Section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/3 -z-10 size-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="min-w-0">
                <p className="mb-5 inline-flex max-w-full rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
                  Open to software engineering opportunities
                </p>
                <p className="font-medium text-accent">{profile.role}</p>
                <h1 className="hero-title mt-3 break-words bg-gradient-to-r from-foreground to-accent bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
                  {profile.bio}
                </p>

                <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
                  <ButtonLink href="#projects" className="w-full sm:w-auto">
                    View My Work
                  </ButtonLink>
                  <ButtonLink
                    href="#contact"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    Contact Me
                  </ButtonLink>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {linkedIn && (
                    <SocialLink
                      label="LinkedIn"
                      url={linkedIn.href}
                      icon={<ExternalLink size={16} />}
                    />
                  )}
                  <SocialLink
                    label="Email"
                    url={profile.emailHref}
                    icon={<Mail size={16} />}
                  />
                  {github && <SocialLink label="GitHub" url={github.href} />}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div
                  aria-hidden="true"
                  className="relative mx-auto w-full max-w-xl min-w-0"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl"
                  />
                  <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/30">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                      <span className="size-2.5 rounded-full bg-red-400" />
                      <span className="size-2.5 rounded-full bg-amber-400" />
                      <span className="size-2.5 rounded-full bg-green-400" />
                      <span className="ml-2 text-xs text-muted">portfolio.ts</span>
                    </div>
                    <pre className="overflow-x-auto p-5 text-xs leading-6 sm:p-6 sm:text-sm">
                      <code>
                        <span className="text-accent">const</span>{" "}
                        <span className="text-foreground">engineer</span>{" = {\n"}
                        {"  "}<span className="text-muted">frontend:</span>{" [\"React\", \"TypeScript\"],\n"}
                        {"  "}<span className="text-muted">backend:</span>{" [\"Node.js\", \"AWS\"],\n"}
                        {"  "}<span className="text-muted">focus:</span>{" \"AI-powered systems\",\n"}
                        {"};"}
                      </code>
                    </pre>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        <Achievements />

        <About />

        <Skills />

        <Projects />

        <Research />

        <Experience />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
