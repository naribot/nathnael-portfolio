import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/ui/reveal";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <section aria-labelledby="achievements-heading" className="pb-16 sm:pb-20">
      <Container>
        <h2 id="achievements-heading" className="sr-only">
          Achievements
        </h2>
        <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <Reveal
              key={achievement.label}
              delay={index * 0.05}
              hover
              className={`p-5 sm:p-6 ${
                index % 2 !== 0 ? "border-l border-border" : ""
              } ${index >= 2 ? "border-t border-border lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <dt className="mt-1 text-sm leading-snug text-muted">
                {achievement.label}
              </dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
                {achievement.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
