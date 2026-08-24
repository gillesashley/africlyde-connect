import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Africlyde Trading & Logistics" },
      {
        name: "description",
        content:
          "Request a freight quote from Africlyde Trading & Logistics. Share your origin, destination, cargo and timeline — indicative pricing within four business hours.",
      },
      { property: "og:title", content: "Request a Freight Quote | Africlyde Trading & Logistics" },
      { property: "og:description", content: "Indicative pricing in four hours, firm quotation within 24 hours." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  const [sending, setSending] = useState(false);
  const [service, setService] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Request Quote"
        title="Get a freight quote"
        body="Six fields is all we need to start. Complex or multi-modal programmes get a call from a senior strategist instead of a template."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
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
                  setService("");
                  toast.success("Quote request received", {
                    description: "An account manager will send indicative pricing within four business hours.",
                  });
                }, 800);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="q-name">Full name</Label>
                  <Input id="q-name" required placeholder="Ama Boateng" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="q-company">Company</Label>
                  <Input id="q-company" required placeholder="Company Ltd" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="q-email">Work email</Label>
                  <Input id="q-email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="q-phone">Phone</Label>
                  <Input id="q-phone" type="tel" placeholder="+233 …" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="q-service">Service required</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="q-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="q-ready">Cargo ready date</Label>
                  <Input id="q-ready" type="date" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="q-origin">Origin</Label>
                  <Input id="q-origin" required placeholder="Shenzhen, China" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="q-dest">Destination</Label>
                  <Input id="q-dest" required placeholder="Tema, Ghana" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="q-weight">Gross weight (kg)</Label>
                  <Input id="q-weight" type="number" min="0" placeholder="1200" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="q-vol">Volume (cbm)</Label>
                  <Input id="q-vol" type="number" min="0" step="0.01" placeholder="8.5" />
                </div>

                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="q-details">Cargo details & special requirements</Label>
                  <Textarea
                    id="q-details"
                    rows={5}
                    placeholder="Commodity, packaging, temperature or hazardous requirements, deadlines…"
                  />
                </div>
              </div>

              <Button type="submit" variant="accent" size="xl" className="mt-7 w-full sm:w-auto" disabled={sending}>
                {sending ? "Submitting…" : "Request quote"}
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                We use your details only to prepare your quotation. See our privacy policy.
              </p>
            </form>
          </Reveal>

          <aside className="grid content-start gap-5">
            <Reveal className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="font-extrabold text-navy">What happens next</h2>
              <ol className="mt-5 grid gap-4 text-sm">
                {[
                  "An account manager is assigned within 30 minutes of submission.",
                  "Indicative pricing and routing within four business hours.",
                  "Firm quotation with committed transit times inside 24 hours.",
                  "Booking confirmed and tracking reference issued on acceptance.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-navy-foreground">
                      {i + 1}
                    </span>
                    <span className="text-charcoal">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={100} className="surface-navy rounded-2xl p-7">
              <h2 className="font-extrabold">Included as standard</h2>
              <ul className="mt-5 grid gap-3 text-sm text-navy-foreground/80">
                {["Marine all-risk insurance", "Milestone tracking", "Customs documentation", "Named account manager"].map(
                  (s) => (
                    <li key={s} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      {s}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
