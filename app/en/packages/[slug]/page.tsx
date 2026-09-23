import Image from "next/image";
import { notFound } from "next/navigation";
import { NativeLink as Link } from "@/components/native-link";
import { CTA } from "@/components/ui";
import { getJourneyPackage, journeyPackages } from "@/lib/data";

export function generateStaticParams() {
  return journeyPackages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getJourneyPackage(slug);
  return item ? { title: item.name, description: item.summary } : {};
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getJourneyPackage(slug);
  if (!item) notFound();
  return <>
    <section className="package-detail-hero">
      <div className="package-detail-image"><Image src={item.image} alt={item.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw" unoptimized /></div>
      <div className="package-detail-copy"><p className="eyebrow">{item.tier} · {item.location}</p><h1>{item.name}</h1><p className="lead">{item.summary}</p><p className="muted">{item.idealFor}</p><div className="package-detail-price"><small>From</small><strong>{item.price}</strong><span>for two guests · 4 days / 3 nights</span></div><div className="button-row"><Link className="button" href={`/en/plan-your-journey?package=${item.slug}`}>Customize this package</Link><Link className="button button-secondary" href="/en/packages">Compare all three</Link></div></div>
    </section>

    <section className="section section-paper"><div className="shell"><div className="section-heading"><p className="eyebrow">The package</p><h2>Five parts, connected around one stay.</h2></div><div className="package-pillar-grid">{item.pillars.map((pillar) => <article className="package-pillar" key={pillar.name}><span aria-hidden="true">{pillar.japanese}</span><p className="eyebrow">{pillar.name}</p><p>{pillar.detail}</p></article>)}</div></div></section>

    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">A sample rhythm</p><h2>Four days, shaped without crowding them.</h2><p>The sequence is illustrative. Your final proposal reflects arrival times, reservations, interests, and confirmed availability.</p></div><div className="package-itinerary">{item.itinerary.map((step) => <article key={step.day}><span>{step.day}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div></section>

    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Before confirmation</p><h2>Clear starting price.<br />A proposal built for your dates.</h2></div><div className="split-copy"><p>The displayed price is an MVP starting point for two guests. Airfare is excluded. Final hotel room category, dining, transport, relaxation, activities, taxes, cancellation terms, and availability are confirmed before booking.</p><p className="muted">No payment or reservation takes place on this website.</p></div></div></section>
    <CTA title={`Make ${item.name} fit your journey.`} />
  </>;
}
