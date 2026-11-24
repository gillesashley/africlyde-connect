import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBanner, PageHero } from "@/components/site/Blocks";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | AfClyde Logistics and Trading" },
      {
        name: "description",
        content:
          "Answers on quotes, transit times, customs clearance, cargo insurance, bonded warehousing, tracking and dangerous goods handling at AfClyde Logistics and Trading.",
      },
      { property: "og:title", content: "Frequently Asked Questions | AfClyde Logistics and Trading" },
      { property: "og:description", content: "Quotes, transit times, customs, insurance and tracking — answered." },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions we answer every day"
        body="If your question isn't here, our team replies to enquiries within four business hours."
      />

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-5 last:border-b"
              >
                <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
