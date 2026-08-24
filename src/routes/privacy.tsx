import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Africlyde Trading & Logistics" },
      {
        name: "description",
        content:
          "How Africlyde Trading & Logistics collects, uses, stores and protects personal data submitted through quotes, tracking and enquiry forms.",
      },
      { property: "og:title", content: "Privacy Policy | Africlyde Trading & Logistics" },
      { property: "og:description", content: "Our approach to personal data, retention and your rights." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Who we are",
    body: "This page is maintained by Africlyde Trading & Logistics to explain how we handle personal information submitted through this website. It describes our current practices and is not an independent certification or audit result.",
  },
  {
    title: "Information we collect",
    body: "We collect the details you submit through our quote, contact, careers and newsletter forms — typically your name, company, work email, phone number and the shipment information you choose to share. We also collect standard technical data such as pages visited and approximate location derived from your IP address.",
  },
  {
    title: "How we use it",
    body: "We use your information to prepare quotations, respond to enquiries, provide shipment updates, process job applications and, where you have opted in, send periodic logistics insights. We do not sell personal data.",
  },
  {
    title: "Sharing with third parties",
    body: "Shipment information may be shared with carriers, customs authorities, port operators and partner agents strictly where necessary to move and clear your cargo. Service providers who process data on our behalf act under contract and on our instructions.",
  },
  {
    title: "Retention",
    body: "Enquiry and quotation records are retained for as long as needed to serve the commercial relationship and to satisfy customs, tax and trade record-keeping obligations. Marketing contacts are removed promptly on unsubscribe.",
  },
  {
    title: "Security",
    body: "Access to customer data is restricted to staff who need it for their role, protected by individual accounts and encrypted transport. We review access permissions regularly.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal data, and you may withdraw marketing consent at any time. Contact privacy@africlyde.com and we will respond within 30 days.",
  },
  {
    title: "Cookies",
    body: "We use essential cookies to operate the site and, where permitted, analytics cookies to understand which pages are useful. You can block cookies in your browser settings without losing access to core site functions.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent to privacy@africlyde.com or to Africlyde Trading & Logistics, Airport City, Liberation Road, Accra, Ghana.",
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        body="Last updated 4 August 2026. This policy explains how we handle personal information across our website and customer platform."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <div className="grid gap-8">
            {sections.map((s) => (
              <article key={s.title}>
                <h2 className="text-xl font-extrabold text-navy">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
