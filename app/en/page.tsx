import Image from "next/image";
import Link from "next/link";
import { CTA, PropertyCard, SectionHeading } from "@/components/ui";
import { properties } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-copy">
          <p className="eyebrow">Your Osaka, thoughtfully arranged</p>
          <h1>Stay with ease.<br />Discover Osaka your way.</h1>
          <p className="lead">A calm apartment base and a human planning conversation for independent journeys across Osaka and Kansai.</p>
          <div className="button-row">
            <Link className="button" href="/en/plan-your-journey">Plan your journey</Link>
            <Link className="button button-secondary" href="/en/stays">Explore the stays</Link>
          </div>
        </div>
        <div className="shell hero-stage">
          <Image src="/images/kuromon-9-room-a.jpg" alt="Bright apartment interior at Apartment Hotel 11" fill priority sizes="(max-width: 1200px) 100vw, 1180px" />
          <div className="route-orbit" />
          <div className="hero-caption"><strong>Osaka is your base.</strong><span>Kyoto, Nara, and Kobe can become considered extensions—not a rushed checklist.</span></div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading eyebrow="Two rhythms, one considered approach" title="How would you like Osaka to feel?" copy="Begin with the kind of journey you want. The right stay and level of support follow from there." />
          <div className="intent-grid">
            <Link className="intent-card" href="/en/osaka-your-way">
              <p className="eyebrow">For independent discovery</p>
              <h3>Osaka,<br />Your Way</h3>
              <p>Local context, a thoughtful route, and room to follow your own curiosity.</p>
              <span className="arrow-link">Discover your way <span>↗</span></span>
            </Link>
            <Link className="intent-card" href="/en/osaka-better-together">
              <p className="eyebrow">For families and friends</p>
              <h3>Osaka,<br />Better Together</h3>
              <p>Apartment space, calmer coordination, and more time for the people you came with.</p>
              <span className="arrow-link">Plan together <span>↗</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Your Osaka base" title="Three ways to make the city feel like home." copy="Each stay pairs a practical apartment layout with a well-connected Osaka neighborhood." />
          <div className="property-grid">{properties.map((property) => <PropertyCard property={property} key={property.slug} />)}</div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell split">
          <div><p className="eyebrow">A lighter way to plan</p><h2>Enough structure.<br />Room to breathe.</h2></div>
          <div className="split-copy">
            <p>Share your dates, people, interests, and the kind of support you want. A human planner can turn that context into a tailored proposal, with every element confirmed before booking.</p>
            <div className="route-strip"><span>Osaka</span><i>→</i><span>Kyoto</span><i>→</i><span>Nara</span><i>→</i><span>Kobe</span></div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell principle-grid">
          <article className="principle"><span className="number">01</span><h3>A practical base</h3><p className="muted">Apartment-style space for the parts of travel that happen between plans.</p></article>
          <article className="principle"><span className="number">02</span><h3>A human conversation</h3><p className="muted">The useful questions come before a proposal—not after a generic package.</p></article>
          <article className="principle"><span className="number">03</span><h3>A clear next step</h3><p className="muted">Availability, terms, and tailored pricing are confirmed with you before booking.</p></article>
        </div>
      </section>
      <CTA />
    </>
  );
}

