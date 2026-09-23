import { Suspense } from "react";
import { JourneyForm } from "@/components/journey-form";

export const metadata = { title: "Plan Your Journey" };

export default function PlanJourneyPage() {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">Start with a package—or start fresh</p><h1>Tell us how the journey should fit.</h1><p className="lead">Choose Essential, Signature, Prestige, or a custom brief. Then share the people, dates, pace, and priorities that matter.</p></div></section>
    <section className="section"><div className="shell form-wrap"><aside className="form-note"><p className="eyebrow">Public MVP</p><h2>Your answers stay on this screen.</h2><p className="muted">This prototype validates answers and creates a local summary. It does not contact Apartment Hotel 11 or HIWIN, submit data, or reserve any service.</p><div className="privacy-note"><strong>Before real enquiries go live</strong><br />A verified contact channel, privacy policy, consent language, secure storage, and an internal response process will be added and tested.</div></aside><Suspense fallback={<div className="journey-form">Preparing the planning form…</div>}><JourneyForm /></Suspense></div></section>
  </>;
}
