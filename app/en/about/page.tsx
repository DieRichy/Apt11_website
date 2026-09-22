import { NativeLink as Link } from "@/components/native-link";
import { CTA } from "@/components/ui";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">About Apartment Hotel 11</p><h1>A calmer base for a more personal Osaka.</h1><p className="lead">Apartment Hotel 11 pairs practical apartment-style stays with warm, clear communication.</p></div><aside className="side-note"><p className="micro-label">Eleven</p><p>The number 11 in our name is read as “Eleven.”</p></aside></div></section>
    <section className="section section-paper"><div className="shell split"><div><p className="eyebrow">Our approach</p><h2>Honest. Calm. Warm.</h2></div><div className="split-copy"><p>Good hospitality lowers the pressure around a journey. It makes essential information easy to understand, gives people room to choose, and treats practical comfort as part of the experience.</p><p>This FIT website is a doorway for tailored journey planning. It begins with a guest&apos;s needs and connects the right Osaka base with the right level of human support.</p></div></div></section>
    <section className="section"><div className="shell principle-grid">
      <article className="principle"><span className="number">01</span><h3>Honest</h3><p className="muted">We distinguish confirmed facts from possibilities and keep terms clear.</p></article>
      <article className="principle"><span className="number">02</span><h3>Calm</h3><p className="muted">We reduce noise, pressure, and needless decisions.</p></article>
      <article className="principle"><span className="number">03</span><h3>Human-centered</h3><p className="muted">The journey begins with how you actually want to travel.</p></article>
    </div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Two useful channels</p><h2>Tailored planning here.<br />Standard stays there.</h2></div><div className="split-copy"><p>Use this website when you want to begin a conversation about a tailored FIT journey. For ordinary accommodation browsing and standard transactions, apt11.jp remains the main channel.</p><Link className="arrow-link" href="https://apt11.jp">Visit apt11.jp <span>↗</span></Link></div></div></section>
    <CTA />
  </>;
}
