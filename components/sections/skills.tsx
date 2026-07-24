import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          number="02"
          title="Technologies and engineering foundations"
          description="Tools and concepts I use across product development, infrastructure, testing, and research."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => (
            <Reveal key={category.name} delay={index * 0.05} hover>
              <article className="h-full min-w-0 rounded-xl border border-border bg-surface p-5 sm:p-6">
                <h3 className="font-semibold text-foreground">{category.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${category.name} skills`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="max-w-full break-words rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
