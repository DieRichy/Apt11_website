import Image from "next/image";
import { NativeLink as Link } from "@/components/native-link";
import { CTA, OpenLinkIcon } from "@/components/ui";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">Apartment Hotel 11 × HIWIN</p><h1>One Osaka team, connecting the whole journey.</h1><p className="lead">Apartment Hotel 11 is part of the HIWIN hospitality ecosystem—an Osaka-based group bringing stays, restaurants, movement, relaxation, and local experiences together.</p></div><aside className="side-note"><p className="micro-label">City-wide hospitality</p><p>Instead of limiting service to one building, Ver.2 connects trusted places and operators across Osaka and Kansai.</p></aside></div></section>
    <section className="section section-paper"><div className="shell hiwin-about"><div className="hiwin-about-image"><Image src="/images/hiwin-apt11.jpg" alt="Apartment Hotel 11, part of the HIWIN hospitality ecosystem" fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized /></div><div className="hiwin-about-copy"><Image className="hiwin-logo" src="/images/hiwin-logo.svg" alt="HIWIN" width={220} height={72} unoptimized /><p className="eyebrow">The parent company</p><h2>From a place to stay to a network for the city.</h2><p>HIWIN works across hospitality development, design, construction, operations, and technology. Its Osaka network includes Apartment Hotel 11 and a growing range of dining and guest services.</p><p className="muted">That operating base makes this package model possible: one point of planning across 住・食・行・癒・楽, with final suppliers and availability confirmed for each trip.</p><Link className="arrow-link" href="https://hiwin-japan.co.jp/">Visit HIWIN Japan <OpenLinkIcon /></Link></div></div></section>
    <section className="section"><div className="shell principle-grid about-principles">
      <article className="principle about-principle"><span className="number">01</span><span className="about-kanji" aria-hidden="true">誠</span><div className="about-principle-copy"><h3>Honest</h3><p className="muted">Starting prices, preview inclusions, and items awaiting confirmation are kept distinct.</p></div></article>
      <article className="principle about-principle"><span className="number">02</span><span className="about-kanji" aria-hidden="true">繋</span><div className="about-principle-copy"><h3>Connected</h3><p className="muted">Stays, meals, transport, care, and discovery are considered as one journey.</p></div></article>
      <article className="principle about-principle"><span className="number">03</span><span className="about-kanji" aria-hidden="true">人</span><div className="about-principle-copy"><h3>Human</h3><p className="muted">A package creates clarity; a conversation makes it fit the people traveling.</p></div></article>
    </div></section>
    <section className="section section-tint"><div className="shell split"><div><p className="eyebrow">Two useful channels</p><h2>Packages and planning here.<br />Standard stays there.</h2></div><div className="split-copy"><p>Use this website to explore HIWIN-led FIT packages and begin a custom journey brief. For ordinary Apartment Hotel 11 accommodation browsing and standard transactions, apt11.jp remains the main channel.</p><Link className="arrow-link" href="https://apt11.jp">Visit apt11.jp <OpenLinkIcon /></Link></div></div></section>
    <CTA />
  </>;
}
