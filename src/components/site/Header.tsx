import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Africlyde Trading & Logistics home">
      <span className="grid size-9 place-items-center rounded-md bg-accent">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M3 17V9l9-5 9 5v8l-9 5-9-5Z" className="text-navy" stroke="currentColor" />
          <path d="M3 9l9 5 9-5M12 22v-8" className="text-navy" stroke="currentColor" />
        </svg>
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block text-[1.05rem] leading-none font-extrabold tracking-tight",
            light ? "text-navy-foreground" : "text-navy",
          )}
        >
          AFRICLYDE
        </span>
        <span className="block text-[0.62rem] leading-tight font-semibold tracking-[0.18em] text-accent">
          TRADING &amp; LOGISTICS
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="hidden border-b border-border/60 bg-navy text-navy-foreground lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="text-navy-foreground/75">Pan-African freight, customs and supply chain solutions.</p>
          <div className="flex items-center gap-5">
            <a href="tel:+233302000000" className="inline-flex items-center gap-1.5 hover:text-accent">
              <Phone className="size-3.5" /> +233 302 000 000
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Logo />

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-navy after:scale-x-100" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="relative px-3 py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-navy hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="accent" size="lg" className="hidden sm:inline-flex">
            <Link to="/quote">Get a Quote</Link>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-navy xl:hidden"
          >
            {open ? <Menu className="size-5 rotate-90 transition-transform" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-page grid gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-secondary text-navy" }}
                className="rounded-md px-3 py-2.5 text-base font-semibold text-charcoal"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="accent" size="lg" className="mt-3">
              <Link to="/quote" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
      <X className="hidden" />
    </header>
  );
}
