import { CTA, PropertyCard } from "@/components/ui";
import { properties } from "@/lib/data";

export const metadata = { title: "Stays" };

export default function StaysPage() {
  return <>
    <section className="page-hero stays-page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">Apartment Hotel 11 stays</p><h1>Three ways to make Osaka home.</h1><p className="lead">Each Apartment Hotel 11 base offers an apartment-style stay with a kitchen, private bathing area, and room to settle in.</p></div><aside className="side-note"><p className="micro-label">Simple comparison</p><p>Start with neighborhood and group size. A tailored proposal can confirm room availability for your dates.</p></aside></div></section>
    <section className="section"><div className="shell"><div className="property-grid">{properties.map((property) => <PropertyCard property={property} key={property.slug} />)}</div></div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Shared essentials</p><h2>Apartment comfort,<br />without excess.</h2></div><div className="split-copy"><p>Across the three MVP properties, the core experience includes Wi-Fi, air conditioning, a smart TV, kitchen facilities, a separated bathing area, a refrigerator, a microwave, a washing machine, a hair dryer, towels, and bath amenities.</p><p className="muted">Exact room configuration and availability are confirmed as part of your proposal.</p></div></div></section>
    <CTA title="Not sure which stay fits?" copy="Share the shape of your journey and group. The planning brief can help identify the most suitable Osaka base before any booking decision." />
  </>;
}
