import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner, PageHero, SectionHeading } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { stats } from "@/lib/site-data";
import shipPort7 from "@/assets/ship_port7.jpeg";
import shipPort6 from "@/assets/ship_port6.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Africlyde Trading & Logistics" },
      {
        name: "description",
        content:
          "Africlyde Trading & Logistics is an African freight forwarding and supply chain company operating owned fleet, bonded warehouses and licensed brokerage across 8 markets.",
      },
      { property: "og:title", content: "About Africlyde Trading & Logistics" },
      {
        property: "og:description",
        content: "6+ years moving African cargo with owned assets, licensed brokerage and a 24/7 control tower.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { title: "Accountability", body: "One named owner for every shipment, every escalation and every invoice." },
  { title: "Precision", body: "Plans built on surveyed routes, real transit data and verified capacity." },
  { title: "Integrity", body: "Transparent pricing, declared costs and no surprise charges at destination." },
  { title: "African ambition", body: "We invest in local teams, local assets and local infrastructure knowledge." },
];

const timeline = [
  { year: "2008", text: "Founded in Accra as a customs brokerage serving Tema port importers." },
  { year: "2013", text: "First owned fleet and warehouse; expansion into Nigeria and Côte d'Ivoire." },
  { year: "2017", text: "East African operations launched with hubs in Nairobi and Mombasa." },
  { year: "2021", text: "Control tower and customer portal go live across all service lines." },
  { year: "2024", text: "Southern Africa network completed; 3 warehouses under management." },
  { year: "2026", text: "18,000 m² bonded hub opens in Lekki, our largest facility to date." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built in Africa, engineered for global trade."
        body="Africlyde Trading & Logistics moves freight for mining houses, manufacturers, health ministries and retailers who cannot afford guesswork. We own the assets, hold the licences and publish the performance."
      >
        <Button asChild variant="accent" size="xl">
          <Link to="/contact">
            Talk to our team <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="From one brokerage desk in Tema to 8 markets"
              body="We started by clearing other people's containers faster than anyone else at Tema port. Six years later we run fleet, warehousing, brokerage and 4PL control-tower services — but the operating principle has not changed: know the route better than anyone, and never hand a client a surprise."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <Reveal key={v.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-bold text-navy">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <img
              src={shipPort7}
              alt="Port of Tema, Ghana — harbour with ships being loaded"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevate)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="surface-navy py-16 lg:py-20">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold lg:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={"decimals" in s ? (s.decimals as number) : 0} />
              </p>
              <p className="mt-2 text-sm text-navy-foreground/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title="How the network was built" />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((t, i) => (
              <Reveal key={t.year} as="li" delay={(i % 3) * 80}>
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <span className="text-sm font-extrabold tracking-widest text-accent">{t.year}</span>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={shipPort6}
              alt="Port of Tema, Ghana — cargo ships at harbour"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevate)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Compliance & safety"
              title="Certified processes, insured cargo, audited performance"
              body="Every facility, vehicle and broker in our network operates to one documented standard, independently audited each year."
            />
            <ul className="mt-8 grid gap-3">
              {[
                "ISO 9001-aligned quality management across all hubs",
                "GDP-aligned cold chain in nine pharmaceutical facilities",
                "Marine all-risk cargo insurance as standard",
                "IATA DGR and ADR trained dangerous-goods teams",
                "Anti-bribery policy and supplier due-diligence programme",
              ].map((c) => (
                <li key={c} className="flex gap-3 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
