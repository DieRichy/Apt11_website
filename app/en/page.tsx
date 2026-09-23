import Image from "next/image";
import { HeroRotator } from "@/components/hero-rotator";
import { CTA, PackageCard, PropertyCard, SectionHeading } from "@/components/ui";
import { journeyPackages, properties, services } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero"><HeroRotator /></section>

      <section className="section section-paper" id="packages">
        <div className="shell">
          <SectionHeading eyebrow="Three ways into Kansai" title="Choose your starting level." copy="Each package connects the stay with dining, movement, relaxation, and the experiences around it. Start here, then adjust the details around your dates and priorities." />
          <div className="package-grid">{journeyPackages.map((item, index) => <PackageCard item={item} featured={index === 1} key={item.slug} />)}</div>
          <p className="price-disclaimer">Starting prices are for two guests and 4 days / 3 nights. Airfare is not included. Final price, room category, availability, and confirmed services follow after inquiry.</p>
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

      <section className="section section-paper">
        <div className="shell split">
          <div><p className="eyebrow">Apartment Hotel 11 · operated by HIWIN</p><h2>A stay connected to the city around it.</h2></div>
          <div className="split-copy"><p>HIWIN develops and operates Apartment Hotel 11 from Osaka, connecting accommodation with restaurants and services across the city. Ver.2 turns that wider network into three simple starting packages.</p><p className="muted">The website remains a planning MVP. Nothing is reserved or charged online, and every final inclusion is confirmed with you.</p></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
