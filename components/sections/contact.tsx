import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SocialLink } from "@/components/ui/social-link";
import { profile, socialLinks } from "@/data/portfolio";

export function Contact() {
  const linkedIn = socialLinks.find((link) => link.platform === "LinkedIn");
  const github = socialLinks.find((link) => link.platform === "GitHub");

  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Contact"
              number="06"
              title="Let’s build something meaningful"
              description="I’m interested in software engineering, full-stack, AI, and research opportunities. Recruiters and collaborators are welcome to reach out."
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
              <ButtonLink href={profile.emailHref}>Email Me</ButtonLink>
              {linkedIn && (
                <SocialLink label="LinkedIn" url={linkedIn.href} />
              )}
              {github && <SocialLink label="GitHub" url={github.href} />}
            </div>
          </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
