import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { roles } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Africlyde Trading & Logistics" },
      {
        name: "description",
        content:
          "Join Africlyde Trading & Logistics. Open roles in operations, customs brokerage, fleet, warehousing, commercial and technology across Africa.",
      },
      { property: "og:title", content: "Careers at Africlyde Trading & Logistics" },
      { property: "og:description", content: "Build the logistics network Africa's businesses depend on." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const benefits = [
  { title: "Growth that's mapped", body: "Documented progression frameworks and funded professional certification." },
  { title: "Real ownership", body: "Small teams, direct client contact and decisions made close to the work." },
  { title: "Pan-African mobility", body: "Secondments and permanent moves across our 12 country offices." },
  { title: "Health & family cover", body: "Comprehensive medical cover for you and your dependants." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the network Africa's businesses depend on"
        body="We hire operators who take responsibility for outcomes — at the border, on the dock, in the warehouse and in the control tower."
      >
        <Button asChild variant="accent" size="xl">
          <Link to="/contact">
            Send a speculative application <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Life at Africlyde" title="Why people join, and why they stay" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 4) * 70}>
                <div className="card-lift h-full rounded-xl border border-border bg-card p-6">
                  <h3 className="font-bold text-navy">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Open roles" title="Current vacancies" />
          <ul className="mt-10 grid gap-3">
            {roles.map((r, i) => (
              <Reveal key={r.title} as="li" delay={(i % 4) * 50}>
                <div className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-navy">{r.title}</h3>
                    <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-accent" />
                        {r.location}
                      </span>
                      <span>{r.type}</span>
                      <span>{r.team}</span>
                    </p>
                  </div>
                  <Button asChild variant="navy">
                    <Link to="/contact">Apply</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
