import { NativeLink as Link } from "@/components/native-link";
import { CTA, PackageCard, SectionHeading } from "@/components/ui";
import { journeyPackages } from "@/lib/data";

export const metadata = { title: "Packages" };

export default function PackagesPage() {
  return <>
    <section className="page-hero package-page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">Three starting points</p><h1>Choose how much of the journey you want connected.</h1><p className="lead">Every package covers the stay, dining, movement, relaxation, and the experience around them. The difference is the accommodation level and how much is arranged privately.</p></div><aside className="side-note"><p className="micro-label">Pricing basis</p><p>Starting prices shown for two guests and 4 days / 3 nights. Final confirmation follows your dates and choices.</p></aside></div></section>
    <section className="section"><div className="shell"><div className="package-grid">{journeyPackages.map((item, index) => <PackageCard item={item} featured={index === 1} key={item.slug} />)}</div><p className="price-disclaimer">Airfare is not included. Hotel room category, restaurant reservations, vehicle class, service availability, taxes, and final terms are confirmed in your proposal.</p></div></section>
    <section className="section section-tint"><div className="shell"><SectionHeading eyebrow="Included in every level" title="Five parts, considered together." /><div className="comparison-row"><span>住 <b>Stay</b></span><span>食 <b>Dine</b></span><span>行 <b>Move</b></span><span>癒 <b>Relax</b></span><span>楽 <b>Enjoy</b></span></div><div className="button-row" style={{marginTop: 34}}><Link className="button button-secondary" href="/en/plan-your-journey?package=custom">I prefer a fully custom journey</Link></div></div></section>
    <CTA title="A package is the beginning, not the limit." copy="Choose the closest starting point. Your dates, group, preferences, and final availability shape the proposal that follows." />
  </>;
}
