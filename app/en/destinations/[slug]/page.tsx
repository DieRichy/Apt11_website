import Image from "next/image";
import { notFound } from "next/navigation";
import { NativeLink as Link } from "@/components/native-link";
import { CTA } from "@/components/ui";
import { destinations, getDestination } from "@/lib/data";

export function generateStaticParams() {
  return destinations.filter((destination) => destination.detailReady).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestination(slug);
  return destination?.detailReady ? { title: destination.name, description: destination.summary } : {};
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination?.detailReady) notFound();
  return <>
    <section className={`destination-detail-hero${destination.image ? " has-image" : ""}`}>
      <div className="destination-detail-visual">
        {destination.image ? <Image src={destination.image} alt={destination.imageAlt ?? ""} fill priority sizes="(max-width: 900px) 100vw, 50vw" unoptimized /> : <span aria-hidden="true">{destination.kanji}</span>}
      </div>
      <div className="destination-detail-copy"><p className="eyebrow">{destination.region} · {destination.theme}</p><h1>{destination.name}</h1><p className="lead">{destination.reason}</p><p className="muted">{destination.summary}</p><div className="destination-facts"><span><small>Best matched with</small>{destination.bestMatch}</span><span><small>Recommended time</small>{destination.recommendedTime}</span></div><div className="button-row"><Link className="button" href="/en/plan-your-journey">Shape this direction</Link><Link className="button button-secondary" href="/en/destinations">All destinations</Link></div></div>
    </section>
    <section className="section section-paper"><div className="shell"><div className="section-heading"><p className="eyebrow">The five-part lens</p><h2>How {destination.name} can become a journey.</h2><p>These are planning directions. Exact hotels, restaurants, vehicles, guides, access, and reservations are confirmed only in a final proposal.</p></div><div className="destination-pillar-grid">{destination.pillars.map((pillar) => <article className="destination-pillar" key={pillar.name}><span aria-hidden="true">{pillar.japanese}</span><div><p className="eyebrow">{pillar.name}</p><h3>{pillar.preview}</h3><p>{pillar.detail}</p></div></article>)}</div></div></section>
    <section className="section"><div className="shell split"><div><p className="eyebrow">Possible highlights</p><h2>Ideas worth exploring,<br />never promises made early.</h2></div><div className="destination-highlight-list">{destination.highlights.map((highlight, index) => <div key={highlight}><span>0{index + 1}</span><p>{highlight}</p></div>)}</div></div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Access and availability</p><h2>Named experiences begin as requests.</h2></div><div className="split-copy"><p>Temple or shrine access, golf tee times, private guides, vehicle models, room categories, boats, workshops, and seasonal experiences depend on the venue, supplier, weather, operating calendar, and final confirmation.</p><p className="muted">No booking, payment, or reservation takes place on this website.</p></div></div></section>
    <CTA title={`Make ${destination.name} part of your journey.`} />
  </>;
}
