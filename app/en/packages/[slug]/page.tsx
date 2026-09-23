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

  return <div className="package-detail-page">
    <section className="package-detail-hero">
      <div className="package-detail-image">
        <Image src={item.image} alt={item.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 58vw" unoptimized />
      </div>
      <div className="package-detail-copy">
        <p className="eyebrow">{item.tier} · {item.location}</p>
        <h1>{item.name}</h1>
        <p className="package-detail-promise">{item.reason}</p>
        <p className="lead">{item.summary}</p>
        <div className="package-detail-price"><small>From</small><strong>{item.price}</strong><span>for two guests · 4 days / 3 nights</span></div>
        <div className="button-row">
          <Link className="button" href={`/en/plan-your-journey?package=${item.slug}`}>Customize this package</Link>
          <Link className="button button-secondary" href="/en/packages">Compare all three</Link>
        </div>
      </div>
    </section>

    <section className="package-at-glance">
      <div className="package-wide-shell">
        <div className="package-section-intro">
          <div><p className="eyebrow">At a glance</p><h2>Five parts. One clear starting point.</h2></div>
          <p className="generated-disclaimer">* Generated planning placeholder. Starred services, timings, capacities, and images are concepts for discussion—not confirmed inventory or promises.</p>
        </div>
        <p className="mobile-swipe-cue">Swipe the five parts →</p>
        <div className="package-glance-rotator">
          {item.atAGlance.map((fact, index) => <article key={fact.label}>
            <span>0{index + 1}</span><p>{fact.label}</p><strong>{fact.value}</strong>
          </article>)}
        </div>
      </div>
    </section>

    <section className="package-chapter-section">
      <div className="package-wide-shell package-chapter-heading">
        <p className="eyebrow">Inside {item.name}</p>
        <h2>Less fine print.<br />More of what the journey feels like.</h2>
        <p className="mobile-swipe-cue">Swipe through Stay, Dine, Move, Relax, and Enjoy →</p>
      </div>
      <div className="package-chapter-rotator">
        {item.chapters.map((chapter, index) => <article className="package-chapter" key={chapter.name}>
          <div className="package-chapter-image">
            <Image src={chapter.image} alt={chapter.imageAlt} fill sizes="(max-width: 650px) 88vw, 58vw" unoptimized />
            <span className="package-chapter-image-caption">{chapter.imageGenerated ? "* AI-generated placeholder image" : chapter.name === "Stay" ? "Existing source image" : "* Editorial placeholder image"}</span>
          </div>
          <div className="package-chapter-copy">
            <div className="package-chapter-number"><span>0{index + 1}</span><b aria-hidden="true">{chapter.japanese}</b></div>
            <p className="eyebrow">{chapter.name}</p>
            <h2>{chapter.headline}</h2>
            <p className="package-chapter-lead">{chapter.copy}<sup>*</sup></p>
            <div className="package-chapter-facts">
              {chapter.facts.map((fact) => <div key={fact.label}><small>{fact.label}</small><strong>{fact.value}</strong></div>)}
            </div>
            <p className="package-generated-note">* Generated placeholder content · final supplier, scope, capacity, timing, and price require confirmation.</p>
          </div>
        </article>)}
      </div>
    </section>

    <section className="package-rhythm-section">
      <div className="package-wide-shell">
        <div className="package-section-intro">
          <div><p className="eyebrow">A sample rhythm</p><h2>Four days, shaped without crowding them.</h2></div>
          <p>The sequence is illustrative. Your final proposal reflects arrival times, reservations, interests, and confirmed availability.</p>
        </div>
        <p className="mobile-swipe-cue">Swipe the sample days →</p>
        <div className="package-itinerary">
          {item.itinerary.map((step) => <article key={step.day}><span>{step.day}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="package-confirmation-section">
      <div className="package-wide-shell package-confirmation-grid">
        <div><p className="eyebrow">Before confirmation</p><h2>Clear starting price.<br />A proposal built for your dates.</h2></div>
        <div><p>The displayed price is an MVP starting point for two guests. Airfare is excluded. Final room category, dining, transport, relaxation, activities, taxes, cancellation terms, and availability are confirmed before booking.</p><p className="muted">No payment or reservation takes place on this website.</p></div>
      </div>
    </section>

    <CTA title={`Make ${item.name} fit your journey.`} />
  </div>;
}
