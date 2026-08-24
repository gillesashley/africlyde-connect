import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./Header";
import { services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div className="max-w-sm">
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
            Africlyde Trading & Logistics is a technology-enabled freight forwarding, customs brokerage and supply chain
            partner moving cargo across 8 African markets and the global lanes that feed them.
          </p>
          <div className="mt-6 flex gap-2">
            {[Linkedin, Twitter, Facebook, Instagram].map((SocialIcon, i) => (
              <a
                key={i}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Africlyde on social media"
                className="grid size-9 place-items-center rounded-md border border-white/15 text-navy-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="text-sm font-bold tracking-wide text-navy-foreground">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-navy-foreground/70 transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h3 className="text-sm font-bold tracking-wide text-navy-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/industries", label: "Industries" },
              { to: "/careers", label: "Careers" },
              { to: "/faqs", label: "FAQs" },
              { to: "/privacy", label: "Privacy Policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-navy-foreground/70 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-navy-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Airport City, Liberation Road, Accra, Ghana</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href="tel:+233302000000" className="hover:text-accent">
                +233 302 000 000
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href="mailto:hello@africlyde.com" className="hover:text-accent">
                hello@africlyde.com
              </a>
            </li>
          </ul>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              toast.success("You're subscribed", {
                description: "Logistics insights land in your inbox every month.",
              });
              form.reset();
            }}
          >
            <label htmlFor="newsletter" className="text-xs font-semibold tracking-wide text-navy-foreground">
              Newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <Input
                id="newsletter"
                type="email"
                required
                placeholder="Work email"
                className="border-white/20 bg-white/5 text-navy-foreground placeholder:text-navy-foreground/45"
              />
              <Button type="submit" variant="accent">
                Join
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Africlyde Trading & Logistics. All rights reserved.</p>
          <p>Freight forwarding · Customs brokerage · Warehousing · Supply chain</p>
        </div>
      </div>
    </footer>
  );
}
