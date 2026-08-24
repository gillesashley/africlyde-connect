import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Africlyde Trading & Logistics" },
      {
        name: "description",
        content:
          "Specialist logistics for agriculture, healthcare, retail, NGOs, e-commerce and FMCG across Africa.",
      },
      { property: "og:title", content: "Industries We Serve | Africlyde Trading & Logistics" },
      { property: "og:description", content: "Sector-specific logistics expertise across key African industries." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector expertise that removes the guesswork"
        body="Compliance, handling and service levels differ by industry. Our teams are organised around sectors, not just modes, so your requirements are understood on the first call."
      />

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 70}>
              <article className="card-lift h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <span className="grid size-12 place-items-center rounded-lg bg-secondary text-navy">
                  <Icon name={ind.icon} className="size-5" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-navy">{ind.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
