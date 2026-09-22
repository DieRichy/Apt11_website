import { CTA } from "@/components/ui";

export const metadata = { title: "How It Works" };

const steps = [
  ["Share your rhythm", "Tell us your dates, who is traveling, what interests you, and where support would help."],
  ["Talk with a planner", "A human reviews the context and asks the useful questions before shaping a proposal."],
  ["Receive a tailored proposal", "Accommodation and any confirmed planning elements are brought together for your review."],
  ["Confirm with clarity", "Final availability, terms, and tailored pricing are confirmed before anything is booked."],
];

export default function HowItWorksPage() {
  return <>
    <section className="page-hero"><div className="shell page-hero-grid"><div><p className="eyebrow">A clear path forward</p><h1>From a thoughtful brief to a journey that fits.</h1><p className="lead">The process begins with context, not a catalogue. You stay in control of what is included and what is not.</p></div><aside className="side-note"><p className="micro-label">No fixed package</p><p>Dates, pace, group, priorities, availability, and requested support shape the final proposal and price.</p></aside></div></section>
    <section className="section"><div className="shell steps">{steps.map(([title, copy]) => <article className="step" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section section-paper"><div className="shell split"><div><p className="eyebrow">What the MVP does today</p><h2>A private planning prototype.</h2></div><div className="split-copy"><p>The current form validates your answers in the browser, creates a readable summary, and shows a simulated success state. It does not send, store, or share personal information.</p><p className="muted">Real submissions remain disabled until the contact channel, privacy policy, consent language, and retention process are approved.</p></div></div></section>
    <CTA title="Ready to shape the brief?" />
  </>;
}

