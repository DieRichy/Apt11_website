import Image from "next/image";
import { HeroRotator } from "@/components/hero-rotator";
import { PackageShowcase } from "@/components/package-showcase";
import { NativeLink as Link } from "@/components/native-link";
import { ArrowLink, CTA, DestinationCard, PropertyCard } from "@/components/ui";
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

      <section className="section section-paper home-packages-section" id="packages">
        <div className="shell">
          <div className="home-editorial-heading home-editorial-heading-packages">
            <span className="home-editorial-number" aria-hidden="true">01</span>
            <div><p className="eyebrow">Three ways into Kansai</p><h2>Choose your starting level.</h2></div>
            <p className="home-editorial-aside">Essential <i /> Signature <i /> Prestige</p>
          </div>
          <PackageShowcase items={journeyPackages} />
          <p className="price-disclaimer">Starting prices are for two guests and 4 days / 3 nights. Airfare is not included. Final price, room category, availability, and confirmed services follow after inquiry.</p>
        </div>
      </section>

      <section className="section home-destinations-section">
        <div className="shell">
          <div className="home-editorial-heading home-editorial-heading-destinations">
            <div><p className="eyebrow">Where the five parts take you</p><h2>A reason to go, not a checklist to finish.</h2></div>
            <div className="home-destination-line" aria-label="Featured destinations"><span>Osaka</span><i /><span>Kyoto</span><i /><span>Wakayama</span></div>
          </div>
          <div className="destination-grid destination-grid-home">{destinations.slice(0, 3).map((destination) => <DestinationCard destination={destination} key={destination.slug} />)}</div>
          <div className="button-row" style={{marginTop: 34}}><Link className="button button-secondary" href="/en/destinations">Explore all destinations</Link></div>
        </div>
      </section>

      <section className="section section-tint home-services-section">
        <div className="shell">
          <div className="home-editorial-heading home-editorial-heading-centered">
            <p className="eyebrow">One connected journey</p>
            <h2>Stay. Dine. Move. Relax. Enjoy.</h2>
            <div className="home-five-part-line" aria-hidden="true"><span>住</span><i /><span>食</span><i /><span>行</span><i /><span>癒</span><i /><span>楽</span></div>
          </div>
          <div className="service-pillar-grid">
            {services.map((service) => <article className="service-pillar" key={service.number}>
              <div className="service-pillar-image"><Image src={service.image} alt="" fill sizes="(max-width: 650px) 100vw, 20vw" /></div>
              <div className="service-pillar-copy"><span className="service-kanji" aria-hidden="true">{service.japanese}</span><p className="eyebrow">{service.number}</p><h3>{service.title}</h3><p>{service.description}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section home-stays-section">
        <div className="shell">
          <div className="home-editorial-heading home-editorial-heading-stays">
            <div><p className="eyebrow">The Essential Osaka base</p><h2>Three Apartment Hotel 11 stays.</h2></div>
            <div className="home-stay-index"><span>Kuromon 9</span><span>Tsutenkaku 3</span><span>Namba Minami 7</span></div>
          </div>
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
