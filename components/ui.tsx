import Image from "next/image";
import { NativeLink as Link } from "@/components/native-link";
import type { JourneyPackage, Property } from "@/lib/data";

export function OpenLinkIcon() {
  return <svg className="open-link-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5" /><path d="m10 14 9-9" /><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>;
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="arrow-link">{children}<OpenLinkIcon /></Link>;
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/en/stays/${property.slug}`} className="property-image">
        <Image src={property.hero} alt={`Interior at ${property.name}`} fill sizes="(max-width: 800px) 100vw, 33vw" unoptimized />
        <span>{property.location}</span>
      </Link>
      <div className="property-card-copy">
        <p className="eyebrow">{property.eyebrow}</p>
        <h3>{property.shortName}</h3>
        <p>{property.summary}</p>
        <ArrowLink href={`/en/stays/${property.slug}`}>Explore the stay</ArrowLink>
      </div>
    </article>
  );
}

export function PackageCard({ item, featured = false }: { item: JourneyPackage; featured?: boolean }) {
  return (
    <article className={`package-card${featured ? " package-card-featured" : ""}`}>
      <Link href={`/en/packages/${item.slug}`} className="package-card-image">
        <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" unoptimized />
        <span className="package-tier">{item.tier}</span>
      </Link>
      <div className="package-card-copy">
        <p className="eyebrow">{item.location} · 4 days / 3 nights</p>
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
        <div className="package-price"><small>From</small><strong>{item.price}</strong></div>
        <p className="package-basis">For two guests · Preview starting price</p>
        <ArrowLink href={`/en/packages/${item.slug}`}>Explore the package</ArrowLink>
      </div>
    </article>
  );
}

export function PartnerHotelCard({ hotel }: { hotel: { name: string; location: string; image: string; imageAlt: string; packageSlug: string; summary: string; source: string } }) {
  return (
    <article className="partner-card">
      <div className="partner-card-image"><Image src={hotel.image} alt={hotel.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" unoptimized /></div>
      <div className="partner-card-copy">
        <p className="eyebrow">Partner stay · {hotel.location}</p>
        <h3>{hotel.name}</h3>
        <p>{hotel.summary}</p>
        <small>{hotel.source}</small>
        <ArrowLink href={`/en/packages/${hotel.packageSlug}`}>See the package</ArrowLink>
      </div>
    </article>
  );
}

export function PlaceholderPanel({ id, title, label }: { id: string; title: string; label: string }) {
  return (
    <div className="placeholder-panel" aria-label={`${title} placeholder`}>
      <span className="placeholder-id">{id} · COMING SOON</span>
      <strong>{title}</strong>
      <code>{label}</code>
      <small>Private preview placeholder — not a representation of the final service.</small>
    </div>
  );
}

export function CTA({ title = "Start with a package. Make it yours.", copy = "Choose a starting level or share a fully custom brief. Dates, availability, and final inclusions are confirmed with you before booking." }: { title?: string; copy?: string }) {
  return (
    <section className="cta-band">
      <div className="shell cta-grid">
        <div><p className="eyebrow light">A journey shaped around you</p><h2>{title}</h2></div>
        <div><p>{copy}</p><Link className="button button-light" href="/en/plan-your-journey">Plan your journey</Link></div>
      </div>
    </section>
  );
}
