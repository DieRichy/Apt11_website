import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/ui";
import { getProperty, properties } from "@/lib/data";

export function generateStaticParams() {
  return properties.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  return property ? { title: property.shortName, description: property.summary } : {};
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();
  return <>
    <section className="property-hero">
      <div className="property-hero-copy"><p className="eyebrow">{property.eyebrow}</p><h1>{property.shortName}</h1><p className="lead">{property.summary}</p><p className="muted">{property.address}</p><div className="fact-row"><span>{property.note}</span><span>Kitchen</span><span>Washing machine</span></div><div className="button-row" style={{marginTop: 30}}><Link className="button" href={`/en/plan-your-journey?stay=${property.slug}`}>Add to my inquiry</Link></div></div>
      <div className="property-hero-image"><Image src={property.hero} alt={`Interior at ${property.name}`} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
    </section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Rooms</p><h2>Choose the space that fits your group.</h2><p>Room facts come from the current property content source and require a final publication review.</p></div><div className="room-table">{property.roomTypes.map((room) => <div className="room-row" key={room.name}><strong>{room.name}</strong><span>{room.size}</span><span>{room.guests}</span><span>{room.beds ?? "Bed details to be confirmed"}</span></div>)}</div></div></section>
    <section className="section section-paper"><div className="shell split"><div><p className="eyebrow">Inside the stay</p><h2>Practical details for everyday ease.</h2></div><ul className="amenity-list">{property.amenities.map((amenity) => <li key={amenity}>{amenity}</li>)}</ul></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">A look inside</p><h2>Space to arrive and reset.</h2></div><div className="gallery">{property.gallery.map((image, index) => <div className="gallery-image" key={image}><Image src={image} alt={`${property.name} interior ${index + 2}`} fill sizes="(max-width: 650px) 100vw, 50vw" /></div>)}</div><div className="exterior-placeholder">PH-{property.slug === "kuromon-9" ? "002" : property.slug === "tsutenkaku-3" ? "003" : "004"} · {property.exteriorPlaceholder} · exterior module held for approved photography</div></div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Around you</p><h2>A neighborhood made walkable.</h2></div><div className="nearby-list">{property.nearby.map((item) => <div className="nearby-item" key={item.place}><span>{item.place}</span><span>{item.time}</span></div>)}<p className="muted" style={{marginTop: 18, fontSize: ".78rem"}}>Walking times are source estimates and will be checked again before public release.</p></div></div></section>
    <CTA title={`Make ${property.shortName} part of your Osaka.`} />
  </>;
}

