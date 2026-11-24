import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/site/Blocks";
import { Icon } from "@/components/site/Icon";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";
import shipPort5 from "@/assets/ship_port5.jpeg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable | AfClyde" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} | AfClyde Logistics and Trading` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} | AfClyde Logistics and Trading` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="surface-navy relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-20 size-96 rounded-full bg-accent/15 blur-3xl"
        />
        <div className="container-page relative grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <Link to="/services" className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
              ← All services
            </Link>
            <span className="mt-6 grid size-14 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Icon name={service.icon} className="size-6" />
            </span>
            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">{service.title}</h1>
            <p className="mt-5 max-w-xl leading-relaxed text-navy-foreground/80">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/quote">
                  Get a Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact">Speak to a specialist</Link>
              </Button>
            </div>
          </div>
          <img
            src={shipPort5}
            alt={`${service.title} operations`}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-elevate)]"
          />
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">What's included</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((h: string) => (
                <li key={h} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-extrabold text-navy sm:text-3xl">How we run it</h2>
            <ol className="mt-6 grid gap-4">
              {[
                { t: "Scope & survey", d: "We map your lane, commodity, compliance profile and service-level targets." },
                { t: "Plan & price", d: "A written plan with committed transit times, landed cost and named contacts." },
                { t: "Execute", d: "Bookings, documentation and handling managed by one operations team." },
                { t: "Report & improve", d: "Milestone data, SLA reporting and a quarterly cost-optimisation review." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-navy text-sm font-bold text-navy-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-navy">{step.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="font-bold text-navy">Related services</h2>
              <ul className="mt-4 grid gap-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: o.slug }}
                      className="flex items-center justify-between gap-3 rounded-lg bg-card px-4 py-3 text-sm font-semibold text-navy transition-colors hover:text-accent"
                    >
                      {o.title}
                      <ArrowRight className="size-4 text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Reveal className="mt-5 rounded-xl border border-border bg-card p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Need this service combined with warehousing or brokerage? Most clients start with a single lane and
                expand into a managed programme within two quarters.
              </p>
              <Button asChild variant="navy" size="lg" className="mt-5 w-full">
                <Link to="/quote">Request a proposal</Link>
              </Button>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
