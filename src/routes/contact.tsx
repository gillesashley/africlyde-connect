import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { locations } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Africlyde Trading & Logistics" },
      {
        name: "description",
        content:
          "Contact Africlyde Trading & Logistics in Accra, Lagos, Nairobi, Johannesburg and 30 more markets. Phone, email and enquiry form with a four-hour response commitment.",
      },
      { property: "og:title", content: "Contact Africlyde Trading & Logistics" },
      { property: "og:description", content: "Reach our logistics teams across Africa — we reply within four hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to a logistics specialist"
        body="Tell us what you move and where it needs to be. A named specialist responds within four business hours."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] lg:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  form.reset();
                  toast.success("Message sent", {
                    description: "A specialist will reply within four business hours.",
                  });
                }, 700);
              }}
            >
              <h2 className="text-xl font-extrabold text-navy">Send us a message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Ama Boateng" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Company Ltd" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+233 …" />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your shipment…" />
                </div>
              </div>
              <Button type="submit" variant="accent" size="xl" className="mt-6 w-full sm:w-auto" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Reveal>

          <div className="grid content-start gap-5">
            <Reveal className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="text-xl font-extrabold text-navy">Head office</h2>
              <ul className="mt-5 grid gap-4 text-sm text-charcoal">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  Airport City, Liberation Road, Accra, Ghana
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
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                  Control tower operates 24/7, 365 days
                </li>
              </ul>
            </Reveal>

            <Reveal delay={100} className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-xl font-extrabold text-navy">Regional offices</h2>
              <ul className="mt-5 grid gap-2.5 text-sm sm:grid-cols-2">
                {locations.slice(1).map((l) => (
                  <li key={l.city} className="flex items-baseline justify-between gap-3 border-b border-border pb-2">
                    <span className="font-semibold text-navy">{l.city}</span>
                    <span className="text-xs text-muted-foreground">{l.type}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
