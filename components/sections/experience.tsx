import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          number="05"
          title="Building and shipping with teams"
          description="Hands-on experience across frontend development, cloud infrastructure, APIs, testing, and deployment."
        />

        <div className="relative mt-10 ml-1 border-l border-border sm:ml-4">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.role}-${experience.startDate}`}
              delay={index * 0.06}
              className="relative pb-10 pl-5 last:pb-0 sm:pb-12 sm:pl-10"
            >
              <article className="min-w-0">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 size-3 rounded-full border-2 border-accent bg-background"
              />

              <div className="min-w-0 rounded-xl border border-border bg-surface p-4 sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {experience.role}
                    </h3>
                    {experience.company && (
                      <p className="mt-1 font-medium text-accent">
                        {experience.company}
                      </p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm text-muted">
                    <time>{experience.startDate}</time> –{" "}
                    <time>{experience.endDate}</time>
                  </p>
                </div>

                <p className="mt-5 text-muted">{experience.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground">
                    Key accomplishments
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {experience.accomplishments.map((accomplishment) => (
                      <li key={accomplishment} className="flex gap-3">
                        <span aria-hidden="true" className="text-accent">
                          •
                        </span>
                        <span>{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul
                  className="mt-6 flex flex-wrap gap-2"
                  aria-label={`${experience.role} technologies`}
                >
                  {experience.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="max-w-full break-words rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
