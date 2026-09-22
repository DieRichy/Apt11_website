import { Suspense } from "react";
import { JourneyForm } from "@/components/journey-form";

export const metadata = { title: "Plan Your Journey" };

export default function PlanJourneyPage() {
  return <>
    <section className="page-hero"><div className="shell"><p className="eyebrow">A private planning prototype</p><h1>Tell us what would make Osaka feel right.</h1><p className="lead">Your dates, people, pace, and priorities are a better starting point than a fixed package.</p></div></section>
    <section className="section"><div className="shell form-wrap"><aside className="form-note"><p className="eyebrow">Before you begin</p><h2>This form stays on this screen.</h2><p className="muted">It validates your answers and creates a local summary. It does not contact Apartment Hotel 11, submit data, or reserve a stay.</p><div className="privacy-note"><strong>Launch blockers</strong><br />[BUSINESS EMAIL]<br />[WHATSAPP NUMBER]<br />[PRIVACY POLICY URL]</div></aside><Suspense fallback={<div className="journey-form">Preparing the planning form…</div>}><JourneyForm /></Suspense></div></section>
  </>;
}

