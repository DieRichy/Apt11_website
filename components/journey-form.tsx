"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { properties } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  dates: string;
  guests: string;
  stay: string;
  rhythm: string;
  interests: string[];
  notes: string;
};

const emptyState: FormState = { name: "", email: "", dates: "", guests: "", stay: "not-sure", rhythm: "balanced", interests: [], notes: "" };
const choices = ["Food & markets", "Culture & craft", "Neighborhood life", "Family time", "Kyoto / Nara / Kobe", "Arrival support"];

export function JourneyForm() {
  const query = useSearchParams();
  const selected = query.get("stay");
  const [form, setForm] = useState<FormState>({ ...emptyState, stay: selected && properties.some((p) => p.slug === selected) ? selected : "not-sure" });
  const [reviewing, setReviewing] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  const stayName = useMemo(() => properties.find((p) => p.slug === form.stay)?.shortName ?? "Help me choose", [form.stay]);
  const update = (key: keyof FormState, value: string | string[]) => setForm((current) => ({ ...current, [key]: value }));
  const toggleInterest = (item: string) => update("interests", form.interests.includes(item) ? form.interests.filter((value) => value !== item) : [...form.interests, item]);

  function review(event: React.FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || !form.dates.trim() || !form.guests.trim()) {
      setError("Please add your name, a valid email, travel dates, and group size before reviewing the brief.");
      return;
    }
    setError("");
    setReviewing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (complete) return <div className="summary-card"><div className="success-mark">✓</div><p className="eyebrow">Simulation complete</p><h2>Your brief is ready.</h2><p className="lead">In the live service, this is where a secure confirmation and the next human step will appear.</p><p className="privacy-note"><strong>No information was sent or stored.</strong> The MVP intentionally makes no network request.</p><button className="button button-secondary" type="button" onClick={() => { setComplete(false); setReviewing(false); }}>Return to the prototype</button></div>;

  if (reviewing) return <div className="summary-card"><p className="eyebrow">Review your request</p><h2>A quiet first draft.</h2><dl><dt>Name</dt><dd>{form.name}</dd><dt>Email</dt><dd>{form.email}</dd><dt>Dates</dt><dd>{form.dates}</dd><dt>Travelers</dt><dd>{form.guests}</dd><dt>Preferred stay</dt><dd>{stayName}</dd><dt>Pace</dt><dd>{form.rhythm}</dd><dt>Interests</dt><dd>{form.interests.length ? form.interests.join(", ") : "Open to ideas"}</dd><dt>Notes</dt><dd>{form.notes || "No additional notes"}</dd></dl><p className="form-help" style={{marginTop: 28}}>Submitting this private prototype only changes the screen. It does not transmit or retain the information above.</p><div className="button-row"><button className="button" type="button" onClick={() => setComplete(true)}>Simulate submission</button><button className="button button-secondary" type="button" onClick={() => setReviewing(false)}>Edit brief</button></div></div>;

  return <form className="journey-form" onSubmit={review} noValidate>
    <div className="field-grid"><div className="field"><label htmlFor="name">Your name *</label><input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></div><div className="field"><label htmlFor="email">Email for this prototype *</label><input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" /></div></div>
    <div className="field-grid"><div className="field"><label htmlFor="dates">Travel dates *</label><input id="dates" value={form.dates} onChange={(e) => update("dates", e.target.value)} placeholder="e.g. 12–18 April 2027" /></div><div className="field"><label htmlFor="guests">Who is traveling? *</label><input id="guests" value={form.guests} onChange={(e) => update("guests", e.target.value)} placeholder="e.g. 2 adults, 1 child" /></div></div>
    <div className="field-grid"><div className="field"><label htmlFor="stay">Preferred Osaka base</label><select id="stay" value={form.stay} onChange={(e) => update("stay", e.target.value)}><option value="not-sure">Help me choose</option>{properties.map((property) => <option value={property.slug} key={property.slug}>{property.shortName}</option>)}</select></div><div className="field"><label htmlFor="rhythm">Preferred pace</label><select id="rhythm" value={form.rhythm} onChange={(e) => update("rhythm", e.target.value)}><option value="slow and spacious">Slow and spacious</option><option value="balanced">Balanced</option><option value="full and energetic">Full and energetic</option></select></div></div>
    <fieldset className="field" style={{border: 0, padding: 0}}><legend className="legend">What matters to you?</legend><div className="choice-grid">{choices.map((item) => <label className="choice" key={item}><input type="checkbox" checked={form.interests.includes(item)} onChange={() => toggleInterest(item)} />{item}</label>)}</div></fieldset>
    <div className="field"><label htmlFor="notes">Anything else we should understand?</label><textarea id="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Accessibility needs, celebrations, food preferences, must-do experiences, or simply the feeling you want from the journey." /></div>
    {error && <p className="error" role="alert">{error}</p>}
    <button className="button" type="submit">Review my request</button>
    <p className="form-help" style={{marginTop: 14}}>Prototype only. Nothing is sent, stored, or shared.</p>
  </form>;
}

