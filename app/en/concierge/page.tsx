import Image from "next/image";
import { CTA } from "@/components/ui";
import { services } from "@/lib/data";

export const metadata = { title: "Experiences" };

const diningExamples = ["鉄板焼 煌", "とんかつ みな斗", "心斎橋 蟹善", "天ぷら 朔月", "ROBATA 炭家", "麵屋 青空 通天閣店"];

export default function ExperiencesPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">Five connected parts</p><h1>住・食・行・癒・楽</h1><p className="lead">A good journey is more than a room. We connect the stay, meals, movement, moments to recharge, and the experiences that make Kansai memorable.</p></div><aside className="side-note"><p className="micro-label">Built into every package</p><p>The level of service changes by package. Exact partners, time slots, and inclusions are confirmed in your final proposal.</p></aside></div></section>
    <section className="section"><div className="shell service-pillar-grid">{services.map((service) => <article className="service-pillar" key={service.number}><div className="service-pillar-image"><Image src={service.image} alt={`${service.title} experience in Kansai`} fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized /></div><div className="service-pillar-copy"><span className="service-kanji" aria-hidden="true">{service.japanese}</span><p className="eyebrow">{service.number} · {service.title}</p><h2>{service.title}</h2><p>{service.description}</p></div></article>)}</div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Dining network</p><h2>Osaka flavor,<br />chosen for the trip.</h2></div><div className="split-copy"><p>Examples across the HIWIN ecosystem include teppanyaki, tonkatsu, crab, tempura, robata, and ramen. A proposal may draw from:</p><div className="route-strip">{diningExamples.map((name, index) => <span key={name}>{name}{index < diningExamples.length - 1 && <i aria-hidden="true">&nbsp;·</i>}</span>)}</div><p className="muted" style={{marginTop: 24}}>Restaurant selection, menus, dietary requests, and reservation availability are confirmed for each journey.</p></div></div></section>
    <CTA title="Choose the level. Shape the details." />
  </>;
}
