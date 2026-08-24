import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">{title}</h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p> : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-accent/15 blur-3xl"
      />
      <div className="container-page relative py-16 lg:py-24">
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl lg:leading-[1.05]">{title}</h1>
        {body ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/75 lg:text-lg">{body}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <Reveal className="surface-navy relative overflow-hidden rounded-2xl px-6 py-14 text-center lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow justify-center">Let's talk logistics</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Request a logistics consultation
            </h2>
            <p className="mt-4 text-navy-foreground/75">
              Tell us what you move, where it goes and what keeps failing. A senior logistics strategist will map a
              route, a cost and a timeline within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="accent" size="xl">
                <Link to="/quote">
                  Request a Quote <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="onNavy" size="xl">
                <Link to="/contact">Speak to an expert</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
