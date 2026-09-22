import { CTA, PlaceholderPanel } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata = { title: "Concierge" };

export default function ConciergePage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">Tailored support</p><h1>Support where it makes a difference.</h1><p className="lead">Begin with the stay. Add only the help that makes your journey calmer—from arrival planning to dining ideas and privately arranged days, subject to availability and confirmation.</p></div><aside className="side-note"><p className="micro-label">MVP scope</p><p>These service areas are planning concepts. Specific providers, terms, and availability are not yet offered in this private preview.</p></aside></div></section>
    <section className="section"><div className="shell placeholder-grid">{services.map((service, index) => <PlaceholderPanel key={service.number} id={`PH-00${index + 5}`} title={service.title} label={service.placeholder} />)}</div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">One conversation</p><h2>Start with the whole journey.</h2></div><div className="split-copy"><p>Instead of choosing disconnected extras, tell us what would make the trip feel easier. A future planning conversation can explore the right support, confirm what is actually available, and leave out what you do not need.</p><p>Every proposal is tailored. Pricing is shared only after dates, group, priorities, and availability are understood.</p></div></div></section>
    <CTA />
  </>;
}

