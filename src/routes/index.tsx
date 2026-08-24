import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Icon } from "@/components/site/Icon";
import { CtaBanner, SectionHeading } from "@/components/site/Blocks";
import { CoverageMap } from "@/components/site/CoverageMap";
import { Testimonials } from "@/components/site/Testimonials";
import { services, stats, whyChoose, industries, clients } from "@/lib/site-data";
import heroPort from "@/assets/hero-port.jpg";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Africlyde Trading & Logistics | Moving Africa Forward, One Shipment at a Time" },
      {
        name: "description",
        content:
          "Reliable freight forwarding, customs brokerage, warehousing and supply chain solutions across 8 African markets. Request a quote today.",
      },
      { property: "og:title", content: "Africlyde Trading & Logistics | Moving Africa Forward" },
      {
        property: "og:description",
        content: "Air, sea and road freight, customs clearance and warehousing across Africa.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={heroPort}
          alt="Container terminal at dusk with gantry cranes loading a cargo vessel"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.2_0.05_255/0.95)_0%,oklch(0.2_0.05_255/0.7)_45%,oklch(0.2_0.05_255/0.25)_100%)]"
        />
        <div className="container-page relative py-24 text-navy-foreground lg:py-36">
          <span className="eyebrow">
            <span className="h-px w-6 bg-accent" />
            Pan-African logistics
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
            Moving Africa Forward, One Shipment at a Time.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/80 lg:text-lg">
            Reliable logistics, freight forwarding, customs brokerage, warehousing and supply chain solutions across
            Africa and beyond.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="xl">
              <Link to="/quote">
                Get a Quote <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-navy-foreground/75">
            {["8 countries served", "Licensed customs brokerage", "9.8/10 on-time delivery", "24/7 control tower"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" /> {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-background py-14 lg:py-16">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <p className="text-3xl font-extrabold text-navy lg:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={"decimals" in s ? (s.decimals as number) : 0} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <img
              src={aboutTeam}
              alt="Africlyde warehouse team reviewing inventory data on tablets"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevate)]"
            />
            <div className="absolute -right-2 -bottom-6 rounded-xl bg-accent px-6 py-5 text-accent-foreground shadow-[var(--shadow-elevate)] lg:-right-8">
              <p className="text-3xl font-extrabold">18</p>
              <p className="text-xs font-semibold tracking-wide">Years moving African cargo</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Africlyde"
              title="An African logistics company built on precision, not promises."
              body="Founded in Accra and now operating across 8 markets, Africlyde combines owned assets — fleet, warehouses, licensed brokerage — with a control tower that gives shippers the visibility multinationals expect. We plan routes around real African infrastructure, and we publish our performance."
            />
            <Reveal delay={120} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Owned fleet and bonded warehouse network",
                "Licensed brokers filing in our own name",
                "Milestone tracking on every mode",
                "Named account manager per client",
              ].map((p) => (
                <div key={p} className="flex gap-3 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  {p}
                </div>
              ))}
            </Reveal>
            <Reveal delay={200} className="mt-8">
              <Button asChild variant="navy" size="lg">
                <Link to="/about">
                  Learn More <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-end logistics, delivered by specialists"
            body="Twelve service lines, one accountable partner. Every mode is planned, executed and reported by teams who own the outcome."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 5) * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="card-lift group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-navy text-navy-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Africlyde"
            title="The reasons shippers stay with us"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 70}>
                <div className="card-lift h-full rounded-xl border border-border bg-card p-6">
                  <Icon name={f.icon} className="size-6 text-accent" />
                  <h3 className="mt-4 font-bold text-navy">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Coverage"
            title="A network built around African trade routes"
            body="Hover any node to see our offices, warehouses and distribution hubs, and the corridors that connect them."
          />
          <div className="mt-12">
            <CoverageMap />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Sector expertise that shortens the learning curve"
            body="Each industry brings its own compliance, handling and service-level realities. We staff accordingly."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 5) * 60}>
                <div className="card-lift h-full rounded-xl border border-border bg-card p-5">
                  <Icon name={ind.icon} className="size-5 text-accent" />
                  <h3 className="mt-4 font-bold text-navy">{ind.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{ind.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients marquee */}
      <section className="border-y border-border bg-surface py-12">
        <div className="container-page">
          <p className="text-center text-xs font-bold tracking-[0.22em] text-muted-foreground uppercase">
            Trusted by leading African enterprises
          </p>
        </div>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track gap-12 pr-12">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="text-xl font-extrabold whitespace-nowrap text-navy/35">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our clients say"
            body="Supply chain leaders across mining, healthcare, retail and commodities on what changed after switching to Africlyde."
          />
          <Reveal delay={100}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
