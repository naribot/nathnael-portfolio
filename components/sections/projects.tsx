import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const placeholderProjects = projects.filter((project) => project.placeholder);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          number="03"
          title="Featured work"
          description="Selected full-stack and AI-powered applications built to solve practical problems."
        />

        <div className="mt-10 grid gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              hover
            >
              <article
                className={cn(
                  "h-full min-w-0 overflow-hidden rounded-xl border border-border bg-surface",
                  project.liveUrl && "border-accent/60",
                )}
              >
              <div
                className={cn(
                  "flex min-h-36 items-center justify-center border-b border-border bg-background p-6",
                  project.liveUrl &&
                    "bg-gradient-to-br from-accent/15 via-background to-background",
                )}
                aria-hidden="true"
              >
                <span className="font-mono text-3xl font-semibold text-accent/70">
                  {"</>"}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                {project.liveUrl && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    Live project
                  </p>
                )}
                <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-muted">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className="mt-6 max-w-4xl">
                    <h4 className="text-sm font-semibold text-foreground">
                      Key functionality
                    </h4>
                    <ul className="mt-4 grid gap-3 text-sm text-muted md:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 rounded-2xl border border-border bg-background/70 p-4 shadow-sm transition-[transform,border-color,background-color] duration-200 ease-out motion-safe:hover:scale-[1.02] motion-safe:hover:border-accent/50 motion-safe:hover:bg-accent/5 motion-reduce:transform-none"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.technologies.length > 0 && (
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="max-w-full break-words rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}

                {(project.liveUrl || project.repositoryUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <ButtonLink href={project.liveUrl}>Live Demo</ButtonLink>
                    )}
                    {project.repositoryUrl && (
                      <ButtonLink href={project.repositoryUrl} variant="secondary">
                        Repository
                      </ButtonLink>
                    )}
                  </div>
                )}
              </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {placeholderProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <article
                className="h-full min-w-0 rounded-xl border border-dashed border-border bg-surface/50 p-5"
              >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Project details coming soon
              </p>
              <h3 className="mt-2 font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
