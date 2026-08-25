export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "air-freight",
    title: "Air Freight",
    icon: "Plane",
    short: "Time-critical cargo moved on scheduled and charter capacity across Africa and beyond.",
    description:
      "Consolidated and direct air freight with priority uplift on major African and intercontinental trade lanes. We manage booking, handling, documentation and airside clearance end to end.",
    highlights: ["Next-flight-out options", "Charter and part-charter", "Temperature-sensitive handling", "Airport-to-door delivery"],
  },
  {
    slug: "sea-freight",
    title: "Sea Freight",
    icon: "Ship",
    short: "FCL, LCL and breakbulk ocean solutions through West, East and Southern African ports.",
    description:
      "Contracted allocation with global carriers, port-side expertise at Tema, Lagos, Mombasa, Durban and Abidjan, and full visibility from booking to final delivery.",
    highlights: ["FCL & LCL consolidation", "Breakbulk and RoRo", "Port handling and demurrage control", "Door-to-door ocean programmes"],
  },
  {
    slug: "road-freight",
    title: "Road Freight",
    icon: "Truck",
    short: "A managed fleet and vetted partner network moving FTL and LTL loads corridor to corridor.",
    description:
      "GPS-tracked trucks, trained drivers and corridor expertise across the Abidjan–Lagos, Northern and North–South corridors, with full insurance cover on every load.",
    highlights: ["FTL and LTL", "Live GPS tracking", "Escorted high-value loads", "Reefer and flatbed options"],
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    icon: "FileCheck",
    short: "Licensed brokerage that keeps goods moving through African borders without surprises.",
    description:
      "Licensed brokers, pre-arrival filing and tariff classification that minimise duty exposure and avoid demurrage. We handle permits, exemptions and regulatory inspections.",
    highlights: ["Licensed brokerage", "HS classification & duty optimisation", "Permit and exemption handling", "Pre-arrival clearance"],
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    icon: "Warehouse",
    short: "Bonded and general storage with WMS-driven inventory accuracy.",
    description:
      "Secure, racked and CCTV-monitored facilities with bonded space, ambient and temperature-controlled zones, cycle counting and real-time inventory reporting.",
    highlights: ["Bonded and general storage", "Real-time WMS visibility", "Pick, pack and kitting", "Temperature-controlled zones"],
  },
  {
    slug: "distribution",
    title: "Distribution",
    icon: "Network",
    short: "Multi-drop national distribution built around your service-level commitments.",
    description:
      "Route-optimised secondary distribution from hub to retail, clinic or site, with proof-of-delivery capture and daily performance reporting.",
    highlights: ["Route optimisation", "Electronic proof of delivery", "Retail and DC compliance", "SLA performance reporting"],
  },
  {
    slug: "last-mile-delivery",
    title: "Last-Mile Delivery",
    icon: "MapPin",
    short: "Urban and rural final-mile coverage with live customer notifications.",
    description:
      "Rider, van and 3PL-partner networks covering dense urban districts and hard-to-reach rural locations, with SMS notifications and cash-on-delivery support.",
    highlights: ["Same-day urban delivery", "Rural coverage", "COD collection", "Live recipient notifications"],
  },
  {
    slug: "cross-border-logistics",
    title: "Cross-Border Logistics",
    icon: "Globe2",
    short: "Corridor management, transit bonds and border facilitation across AfCFTA markets.",
    description:
      "We manage transit documentation, bonds, escort requirements and border agency engagement so that cross-border moves clear predictably.",
    highlights: ["Transit bonds and T1", "Border agency liaison", "Corridor risk management", "AfCFTA trade facilitation"],
  },
  {
    slug: "import-services",
    title: "Import Services",
    icon: "Import",
    short: "End-to-end import management from supplier pickup to duty-paid delivery.",
    description:
      "We source freight capacity, handle supplier coordination, pre-file entries and deliver duty-paid to your door — with landed-cost visibility before the cargo ships.",
    highlights: ["Supplier coordination", "Landed-cost estimates", "Duty and permit handling", "Door delivery"],
  },
  {
    slug: "export-services",
    title: "Export Services",
    icon: "Upload",
    short: "Documentation, inspection and carrier capacity for African exporters.",
    description:
      "Export declarations, certificates of origin, inspection coordination and contracted carrier space so your goods reach international buyers on schedule.",
    highlights: ["Export declarations", "Certificates of origin", "Pre-shipment inspection", "Contracted carrier space"],
  },
  {
    slug: "trading",
    title: "Trading",
    icon: "Handshake",
    short: "Sourcing, procurement and commodity trading backed by our own logistics.",
    description:
      "We source, negotiate and supply goods and commodities directly — combining verified supplier networks with in-house freight, clearance and delivery.",
    highlights: ["Verified supplier sourcing", "Procurement and negotiation", "Commodity trading", "Delivered-price contracts"],
  },

  {
    slug: "supply-chain-management",
    title: "Supply Chain Management",
    icon: "Workflow",
    short: "4PL control-tower services that design, run and continuously improve your network.",
    description:
      "Network design, vendor management, inventory strategy and a control tower that gives you a single source of truth across every mode and partner.",
    highlights: ["Control-tower visibility", "Network design", "Vendor and 4PL management", "Continuous cost optimisation"],
  },
];

export const stats = [
  { label: "Years in Operation", value: 6, suffix: "+" },
  { label: "Countries Served", value: 8, suffix: "" },
  { label: "Fleet Vehicles", value: 9, suffix: "+" },
  { label: "Warehouses", value: 3, suffix: "" },
  { label: "Corporate Clients", value: 9, suffix: "+" },
  { label: "On-Time Delivery", value: 9.8, suffix: "/10", decimals: 1 },
];

export const whyChoose = [
  { icon: "Zap", title: "Fast Delivery", body: "Priority lanes and pre-cleared documentation compress transit times on every mode." },
  { icon: "ShieldCheck", title: "Secure Cargo Handling", body: "Sealed loads, vetted drivers, CCTV facilities and all-risk insurance as standard." },
  { icon: "Radar", title: "Real-Time Tracking", body: "Milestone-level visibility from pickup to proof of delivery, on web and mobile." },
  { icon: "FileCheck", title: "Customs Expertise", body: "Licensed brokers in every market we operate, filing ahead of arrival." },
  { icon: "Globe2", title: "Pan-African Network", body: "8 countries, 3 owned hubs and a vetted partner network covering the rest." },
  { icon: "UserRound", title: "Dedicated Account Managers", body: "One named contact who knows your cargo, your deadlines and your customers." },
  { icon: "BadgePercent", title: "Competitive Pricing", body: "Contracted carrier rates and consolidation that lower landed cost per unit." },
  { icon: "Headset", title: "24/7 Support", body: "Round-the-clock control tower staffed across three African time zones." },
];

export const industries = [
  { slug: "agriculture", title: "Agriculture", icon: "Wheat", body: "Inputs in, commodities out — with cold chain and fumigation support." },
  { slug: "healthcare", title: "Healthcare", icon: "HeartPulse", body: "GDP-aligned cold chain for pharmaceuticals, vaccines and devices." },
  { slug: "retail", title: "Retail", icon: "ShoppingBag", body: "Store replenishment, DC compliance and seasonal peak capacity." },
  { slug: "ngos", title: "NGOs", icon: "HandHeart", body: "Humanitarian and donor-funded cargo into hard-to-reach regions." },
  { slug: "ecommerce", title: "E-Commerce", icon: "PackageCheck", body: "Fulfilment, last-mile and reverse logistics with COD handling." },
  { slug: "fmcg", title: "FMCG", icon: "Boxes", body: "High-velocity distribution with tight SLA and shelf-availability targets." },
];

export const clients = [
  "Sahel Energy",
  "Kwame Mining Group",
  "AgriNova",
  "MediSupply Africa",
  "Zanta Retail",
  "Atlas Manufacturing",
  "Delta Health Trust",
  "Harmattan FMCG",
  "Volta Commodities",
  "Nyala Motors",
];

export const testimonials = [
  {
    quote:
      "Africlyde cut our port-to-plant lead time from eleven days to four. Their clearance team files before the vessel berths — that alone changed our production planning.",
    name: "Wisdom Quarcoo",
    role: "Supply Chain Director",
    company: "Atlas Manufacturing",
  },
  {
    quote:
      "The control tower gives our board one dashboard for every shipment. Visibility like that used to be reserved for multinationals.",
    name: "Majorie Naa Adjetey",
    role: "Chief Operating Officer",
    company: "Volta Commodities",
  },
];

export const locations = [
  { city: "Accra", country: "Ghana", type: "Headquarters", x: 47, y: 55 },
  { city: "Lagos", country: "Nigeria", type: "Regional Hub", x: 52, y: 56 },
  { city: "Abidjan", country: "Côte d'Ivoire", type: "Port Office", x: 43, y: 55 },
  { city: "Dakar", country: "Senegal", type: "Port Office", x: 34, y: 45 },
  { city: "Casablanca", country: "Morocco", type: "Gateway", x: 40, y: 24 },
  { city: "Cairo", country: "Egypt", type: "Gateway", x: 65, y: 22 },
  { city: "Nairobi", country: "Kenya", type: "Regional Hub", x: 72, y: 62 },
  { city: "Mombasa", country: "Kenya", type: "Port Office", x: 76, y: 65 },
  { city: "Dar es Salaam", country: "Tanzania", type: "Port Office", x: 74, y: 70 },
  { city: "Kinshasa", country: "DR Congo", type: "Distribution Hub", x: 57, y: 68 },
  { city: "Lusaka", country: "Zambia", type: "Distribution Hub", x: 66, y: 78 },
  { city: "Johannesburg", country: "South Africa", type: "Regional Hub", x: 64, y: 88 },
  { city: "Durban", country: "South Africa", type: "Port Office", x: 68, y: 91 },
  { city: "Dubai", country: "UAE", type: "Gateway", x: 88, y: 33 },
];

export const faqs = [
  {
    q: "How do I get a freight quote?",
    a: "Submit the request-a-quote form with your origin, destination, commodity and dimensions. A named account manager responds with an indicative rate within four business hours, and a firm quotation within 24 hours.",
  },
  {
    q: "Which countries do you operate in?",
    a: "We serve 8 African markets through owned offices and a vetted partner network elsewhere, with gateway operations in Dubai, Casablanca and Rotterdam.",
  },
  {
    q: "Do you handle customs clearance directly?",
    a: "We are a licensed customs broker in our core markets and file entries in our own name. Where local law requires a resident broker, we manage an accredited partner under our control.",
  },
  {
    q: "Is my cargo insured?",
    a: "All cargo moves under a marine all-risk policy by default. Declared-value cover and specialist policies for project or high-value cargo are available on request.",
  },
  {
    q: "What are your standard transit times?",
    a: "Air freight typically runs 1–3 days intra-Africa, sea freight 14–35 days depending on lane, and road corridor moves 2–9 days. Your quotation states committed transit times per lane.",
  },
];