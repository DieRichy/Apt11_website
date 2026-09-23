import { CTA } from "@/components/ui";

export const metadata = { title: "How It Works" };

const steps = [
  ["Choose a starting package", "Compare Essential, Signature, and Prestige—or choose a fully custom brief."],
  ["Share your rhythm", "Tell us your dates, travelers, interests, pace, and the details you want to change."],
  ["Receive a confirmed proposal", "We check accommodation, transport, dining, relaxation, experiences, and the final price."],
  ["Approve with clarity", "Nothing is booked until availability, terms, and the full itinerary are understood and accepted."],
];

export default function HowItWorksPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">A clearer starting point</p><h1>From a package level to a journey that fits.</h1><p className="lead">The three packages make scope and budget easier to understand. The final journey is still shaped around the people traveling.</p></div><aside className="side-note"><p className="micro-label">From price</p><p>Preview prices are for two guests and four days / three nights. Dates, room level, supplier availability, and custom requests determine the final quotation.</p></aside></div></section>
    <section className="section"><div className="shell steps">{steps.map(([title, copy]) => <article className="step" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section section-paper"><div className="shell split"><div><p className="eyebrow">What the MVP does today</p><h2>A public preview with a local-only brief.</h2></div><div className="split-copy"><p>You can compare packages and prepare a request in the browser. The current form validates answers, creates a readable summary, and shows a simulated success state.</p><p className="muted">The MVP does not send, store, or share personal information. A real submission workflow remains disabled until its contact channel, privacy language, consent, and retention process are approved.</p></div></div></section>
    <CTA title="Choose a level, then make it yours." />
  </>;
}
