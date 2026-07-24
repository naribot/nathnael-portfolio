import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" className="min-h-[70vh]">
      <Container>
        <SectionHeading
          eyebrow="About"
          number="01"
          title="Building thoughtful, dependable software"
          description="A practical approach shaped by engineering, research, and continuous learning."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,1fr)] lg:gap-12">
          <Reveal className="space-y-5 text-base text-muted sm:text-lg">
            <p>
              I&apos;m a {profile.role.toLowerCase()} and {profile.program} student
              at {profile.university}. I enjoy creating practical software that
              pairs thoughtful frontend experiences with reliable backend
              systems, cloud services, and AI.
            </p>
            <p>
              My work spans full-stack applications, AI-powered tools, and
              research-driven software systems. I&apos;m especially interested in{" "}
              {profile.interests.slice(0, -1).join(", ")}, and{" "}
              {profile.interests.at(-1)?.toLowerCase()}.
            </p>
            <p>{profile.careerGoal}</p>
          </Reveal>

          <Reveal delay={0.06} hover>
            <aside className="rounded-xl border border-border bg-surface p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
              <p className="mt-2 font-medium text-accent">{profile.program}</p>
              <p className="text-sm text-muted">{profile.university}</p>

              <dl className="mt-6 space-y-4 border-t border-border pt-6">
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="text-sm text-muted">GPA</dt>
                  <dd className="font-semibold text-foreground">{profile.gpa}</dd>
                </div>
                {profile.honorsCollege && (
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <dt className="text-sm text-muted">Academic program</dt>
                    <dd className="text-right font-semibold text-foreground">
                      Honors College member
                    </dd>
                  </div>
                )}
                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="text-sm text-muted">Dean&apos;s List</dt>
                  <dd className="text-right font-semibold text-foreground">
                    {profile.deansListYears} consecutive years
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
