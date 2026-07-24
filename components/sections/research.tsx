import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { researchProjects } from "@/data/portfolio";

export function Research() {
  const studies = researchProjects.filter((project) => !project.temporary);
  const futureStudies = researchProjects.filter((project) => project.temporary);

  return (
    <Section id="research">
      <Container>
        <SectionHeading
          eyebrow="Research"
          number="04"
          title="Understanding events in soccer video"
          description="Ongoing research in video understanding, representation learning, and event-level analysis using real broadcast match data."
        />

        {studies.map((study) => (
          <Reveal key={study.title} className="mt-10">
            <article className="border-t border-border pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-4 max-w-4xl text-muted">{study.summary}</p>
                </div>
                {study.status && (
                  <span className="w-fit shrink-0 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {study.status}
                  </span>
                )}
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-foreground">Research pipeline</h4>
                <ol className="mt-4 flex flex-col gap-2 md:flex-row md:items-center">
                  {study.pipeline.map((step, index) => (
                    <li
                      key={step}
                      className="flex min-w-0 flex-col items-center gap-2 md:flex-1 md:flex-row"
                    >
                      <span className="w-full min-w-0 rounded-lg border border-border bg-surface px-2 py-2 text-center text-sm text-foreground">
                        {step}
                      </span>
                      {index < study.pipeline.length - 1 && (
                        <span aria-hidden="true" className="shrink-0 text-accent">
                          <span className="md:hidden">↓</span>
                          <span className="hidden md:inline">→</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      My technical contributions
                    </h4>
                    <ul className="mt-4 space-y-3 text-muted">
                      {study.contributions.map((contribution) => (
                        <li key={contribution} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      Experiment design and evaluation
                    </h4>
                    <ul className="mt-4 space-y-3 text-muted">
                      {study.methods.map((method) => (
                        <li key={method} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                    <h4 className="font-semibold text-foreground">
                      Research challenges
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-muted">
                      {study.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-accent/40 bg-accent/10 p-5 sm:p-6">
                    <h4 className="font-semibold text-foreground">
                      What the experiments show
                    </h4>
                    <ul className="mt-4 space-y-3 text-sm text-muted">
                      {study.findings.map((finding) => (
                        <li key={finding}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-border pt-8">
                <h4 className="font-semibold text-foreground">Current directions</h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {study.nextSteps.map((nextStep) => (
                    <li
                      key={nextStep}
                      className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-muted"
                    >
                      {nextStep}
                    </li>
                  ))}
                </ul>
              </div>

              <ul
                className="mt-8 flex flex-wrap gap-2"
                aria-label={`${study.title} technologies and methods`}
              >
                {study.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="max-w-full break-words rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        {futureStudies.map((study) => (
          <Reveal key={study.title} className="mt-8">
            <aside className="rounded-xl border border-dashed border-border p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Temporary research placeholder
              </p>
              <h3 className="mt-2 font-semibold text-foreground">{study.title}</h3>
              <p className="mt-2 text-sm text-muted">{study.summary}</p>
            </aside>
          </Reveal>
        ))}
      </Container>
    </Section>
  );
}
