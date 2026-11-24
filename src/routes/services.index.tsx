import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Icon } from "@/components/site/Icon";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Our Services | Air, Sea, Road Freight & Customs | AfClyde" },
      {
        name: "description",
        content:
          "Door-to-door shipping to Ghana, online shopping forwarding, air, sea, road freight, customs clearance, last-mile, cross-border, import, export, trading and supply chain management across Africa.",
      },
      { property: "og:title", content: "Logistics Services | AfClyde Logistics and Trading" },
      {
        property: "og:description",
        content: "Twelve specialist trading and logistics service lines delivered by one accountable African partner.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Twelve service lines. One accountable trading and logistics partner."
        body="From a single air waybill to a fully managed pan-African supply chain, every AfClyde service is delivered by specialists with owned assets and licensed authority behind them."
      />

      <section className="section-y">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 70}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-lift group flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <span className="grid size-12 place-items-center rounded-lg bg-navy text-navy-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-navy">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
