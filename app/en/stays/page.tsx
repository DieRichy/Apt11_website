import { CTA, PartnerHotelCard, PropertyCard } from "@/components/ui";
import { partnerHotels, properties } from "@/lib/data";

export const metadata = { title: "Stays" };

export default function StaysPage() {
  return <>
    <section className="page-hero stays-page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">A stay for each level</p><h1>Apartment ease to quiet luxury.</h1><p className="lead">Begin with Apartment Hotel 11 in Osaka, or step into a premium hotel chosen to anchor a more hosted journey.</p></div><aside className="side-note"><p className="micro-label">Package-led</p><p>Your accommodation is paired with dining, transport, relaxation, and experiences at the level of your selected package.</p></aside></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Essential Osaka</p><h2>Three Apartment Hotel 11 bases.</h2><p>Practical apartment-style comfort with a kitchen, private bathing area, and room to settle in.</p></div><div className="property-grid">{properties.map((property) => <PropertyCard property={property} key={property.slug} />)}</div></div></section>
    <section className="section section-tint"><div className="shell"><div className="section-heading"><p className="eyebrow">Premium partner stays</p><h2>Two different expressions of Kansai.</h2><p>These hotels anchor the Signature and Prestige preview packages. Final room category and availability are confirmed with your proposal.</p></div><div className="partner-grid">{partnerHotels.map((hotel) => <PartnerHotelCard hotel={hotel} key={hotel.name} />)}</div></div></section>
    <CTA title="Find the stay that matches the journey." copy="Start with one of three package levels, then adjust the pace, priorities, and details around your dates." />
  </>;
}
