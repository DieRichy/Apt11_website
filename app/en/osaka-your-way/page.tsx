import Link from "next/link";
import { CTA, PropertyCard } from "@/components/ui";
import { properties } from "@/lib/data";

export const metadata = { title: "Osaka, Your Way" };

export default function YourWayPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">For independent discovery</p><h1>Room to follow your curiosity.</h1><p className="lead">Tell us how you like to travel. We help shape a considered route while leaving space for the discoveries that make a journey yours.</p></div><aside className="side-note"><p className="micro-label">The starting point</p><p>Your pace, your interests, and the kind of support that would make the journey feel easier.</p></aside></div></section>
    <section className="section section-paper"><div className="shell feature-grid">
      <article className="feature"><span className="number">01</span><h3>Choose your base</h3><p>An apartment in the Osaka neighborhood that best matches how you want to move through the city.</p></article>
      <article className="feature"><span className="number">02</span><h3>Set your rhythm</h3><p>Food, craft, city life, or slower mornings—the outline follows your interests rather than a fixed circuit.</p></article>
      <article className="feature"><span className="number">03</span><h3>Add support lightly</h3><p>Explore arrival, dining, or private-day planning only where it genuinely reduces friction.</p></article>
    </div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Stay close to the city</p><h2>Three starting points for your Osaka.</h2></div><div className="property-grid">{properties.map((property) => <PropertyCard property={property} key={property.slug} />)}</div><div className="button-row" style={{marginTop: 34}}><Link className="button button-secondary" href="/en/concierge">Explore concierge planning</Link></div></div></section>
    <CTA title="Give us the outline. Keep the journey yours." />
  </>;
}

