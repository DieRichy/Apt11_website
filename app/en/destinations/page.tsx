import { CTA, DestinationCard, SectionHeading } from "@/components/ui";
import { destinations } from "@/lib/data";

export const metadata = { title: "Destinations", description: "Explore Osaka and Kansai through Stay, Dine, Move, Relax, and Enjoy." };

export default function DestinationsPage() {
  return <>
    <section className="page-hero destination-page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">Where the journey can lead</p><h1>Choose a reason to go.</h1><p className="lead">A destination is more than a list of sights. We consider where you stay, what you taste, how you move, when you pause, and the encounters that give the place meaning.</p></div><aside className="side-note"><p className="micro-label">Planning directions</p><p>Osaka, Kyoto, and Wakayama are the first detailed examples. Other regions show the intended direction and require further supplier and route confirmation.</p></aside></div></section>
    <section className="section"><div className="shell"><SectionHeading eyebrow="Osaka to the wider region" title="Six directions through Kansai and beyond." copy="Package level describes how you travel. Destination describes where you go. The two can be combined after dates, pace, and confirmed access are understood." /><div className="destination-grid">{destinations.map((destination) => <DestinationCard destination={destination} key={destination.slug} />)}</div></div></section>
    <section className="section section-tint"><div className="shell destination-model"><article><span>01</span><p className="eyebrow">Why go</p><h3>Begin with meaning.</h3><p>Food and energy, craft and faith, forest and renewal, or art and slower time.</p></article><article><span>02</span><p className="eyebrow">Five-part lens</p><h3>Connect the whole stay.</h3><p>Every developed route is shaped through Stay, Dine, Move, Relax, and Enjoy.</p></article><article><span>03</span><p className="eyebrow">Package match</p><h3>Choose the support level.</h3><p>Essential, Signature, or Prestige changes the accommodation, movement, access, and orchestration.</p></article></div></section>
    <section className="section section-paper"><div className="shell split"><div><p className="eyebrow">Beyond Kansai</p><h2>Toyama and Kanazawa can come later.</h2></div><div className="split-copy"><p>Mountain landscapes, craft traditions, seafood, and onsen make Hokuriku compelling. For now, those regions remain future extensions so Ver.2 stays focused on an Osaka and Kansai operating base.</p><p className="muted">Every destination shown here is inspiration for a proposal, not confirmed inventory or guaranteed special access.</p></div></div></section>
    <CTA title="Choose the place. Then choose how to travel through it." />
  </>;
}
