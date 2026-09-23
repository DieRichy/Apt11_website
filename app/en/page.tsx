import Image from "next/image";
import { HeroRotator } from "@/components/hero-rotator";
import { PackageShowcase } from "@/components/package-showcase";
import { NativeLink as Link } from "@/components/native-link";
import { ArrowLink, CTA, DestinationCard, PropertyCard, SectionHeading } from "@/components/ui";
import { destinations, journeyPackages, properties, services } from "@/lib/data";

const hiwinReasons = [
  ["01", "One team, five parts", "Stay, dine, move, relax, and enjoy through one clearer planning conversation."],
  ["02", "Osaka-based, Kansai-connected", "An operating base in Osaka with journeys extending into Kyoto, Nara, Wakayama, Setouchi, and beyond."],
  ["03", "Clear starting levels", "Three packages make the first decision easier while leaving room to personalize the details."],
  ["04", "Personal by design", "Dates, pace, interests, confirmed access, and final availability shape the proposal."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero"><HeroRotator /></section>

      <section className="section section-paper" id="packages">
        <div className="shell">
          <SectionHeading eyebrow="Three ways into Kansai" title="Choose your starting level." copy="Each package connects the stay with dining, movement, relaxation, and the experiences around it. Start here, then adjust the details around your dates and priorities." />
          <PackageShowcase items={journeyPackages} />
          <p className="price-disclaimer">Starting prices are for two guests and 4 days / 3 nights. Airfare is not included. Final price, room category, availability, and confirmed services follow after inquiry.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="shell">
          <SectionHeading eyebrow="Where the five parts take you" title="A reason to go, not a checklist to finish." copy="Every destination is considered through the same five-part lens. Explore the first three routes now; the wider Kansai directions remain planning previews until their service details are confirmed." />
          <div className="destination-grid destination-grid-home">{destinations.slice(0, 3).map((destination) => <DestinationCard destination={destination} key={destination.slug} />)}</div>
          <div className="button-row" style={{marginTop: 34}}><Link className="button button-secondary" href="/en/destinations">Explore all destinations</Link></div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell">
          <SectionHeading eyebrow="One connected journey" title="Stay. Dine. Move. Relax. Enjoy." copy="Apartment Hotel 11 and HIWIN bring the practical parts of a Kansai stay into one clearer conversation." />
          <div className="service-pillar-grid">
            {services.map((service) => <article className="service-pillar" key={service.number}>
              <div className="service-pillar-image"><Image src={service.image} alt="" fill sizes="(max-width: 650px) 100vw, 20vw" /></div>
              <div className="service-pillar-copy"><span className="service-kanji" aria-hidden="true">{service.japanese}</span><p className="eyebrow">{service.number}</p><h3>{service.title}</h3><p>{service.description}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="The Essential Osaka base" title="Three Apartment Hotel 11 stays." copy="Choose the neighborhood and apartment layout that best fits your group, then connect the rest of the Essential package around it." />
          <div className="property-grid">{properties.map((property) => <PropertyCard property={property} key={property.slug} />)}</div>
        </div>
      </section>

      <section className="section section-paper hiwin-reasons-section">
        <div className="shell">
          <div className="split hiwin-reasons-intro">
            <div className="hiwin-reasons-brand">
              <Image className="hiwin-reasons-logo" src="/images/hiwin_logo.png" alt="HIWIN" width={1400} height={422} unoptimized />
              <div className="hiwin-reasons-heading">
                <p className="eyebrow">Why HIWIN</p>
                <h2>A stay connected to the city around it.</h2>
                <ArrowLink href="/en/about">Discover HIWIN and Apartment Hotel 11</ArrowLink>
              </div>
            </div>
            <div className="split-copy"><p>HIWIN develops and operates Apartment Hotel 11 from Osaka, connecting accommodation with restaurants and services across the city. Ver.2 turns that wider network into three clearer starting levels.</p><p className="muted">This remains a non-transactional planning MVP. Nothing is reserved or charged online, and every final inclusion is confirmed with you.</p></div>
          </div>
          <div className="hiwin-reason-grid">{hiwinReasons.map(([number, title, copy]) => <article className="hiwin-reason" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>
      <CTA />
    </>
  );
}
