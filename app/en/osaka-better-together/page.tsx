import Link from "next/link";
import { CTA, PropertyCard } from "@/components/ui";
import { properties } from "@/lib/data";

export const metadata = { title: "Osaka, Better Together" };

export default function BetterTogetherPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">For families and friends</p><h1>More ease for the people you bring together.</h1><p className="lead">Choose an apartment base with space to regroup, then let us help organize the moving parts around your shared time.</p></div><aside className="side-note"><p className="micro-label">The starting point</p><p>Who is traveling, how your group likes to spend a day, and where a little coordination would help most.</p></aside></div></section>
    <section className="section section-paper"><div className="shell feature-grid">
      <article className="feature"><span className="number">01</span><h3>Space to regroup</h3><p>Apartment-style layouts give your group a practical place to begin, pause, and end each day.</p></article>
      <article className="feature"><span className="number">02</span><h3>Plans that connect</h3><p>Arrival, neighborhood, dining, and day ideas can be considered as one journey rather than separate tasks.</p></article>
      <article className="feature"><span className="number">03</span><h3>Clarity for everyone</h3><p>A single tailored outline helps the group understand the pace, priorities, and decisions still to make.</p></article>
    </div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">A shared Osaka base</p><h2>Find the right amount of room.</h2></div><div className="property-grid">{properties.map((property) => <PropertyCard property={property} key={property.slug} />)}</div><div className="button-row" style={{marginTop: 34}}><Link className="button button-secondary" href="/en/how-it-works">See how planning works</Link></div></div></section>
    <CTA title="Start with your people, not a package." />
  </>;
}

