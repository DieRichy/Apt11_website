"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { NativeLink as Link } from "@/components/native-link";
import type { JourneyPackage } from "@/lib/data";

export function PackageShowcase({ items }: { items: JourneyPackage[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  return (
    <div
      className={`package-showcase${activeSlug ? " package-showcase-active" : ""}`}
    >
      {items.map((item, index) => {
        const isActive = activeSlug === item.slug;
        const isQuiet = Boolean(activeSlug && !isActive);
        return (
          <article
            className={`package-showcase-card${isActive ? " is-active" : ""}${isQuiet ? " is-quiet" : ""}`}
            key={item.slug}
            style={{ "--package-order": index } as CSSProperties}
          >
            <div className="package-trace" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="package-showcase-image">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 900px) 100vw, 60vw" unoptimized />
              <div className="package-showcase-image-shade" />
              <span className="package-tier">{item.tier}</span>
            </div>
            <div className="package-showcase-copy">
              <div className="package-showcase-heading">
                <div><p className="eyebrow">{item.location} · 4 days / 3 nights</p><h3>{item.name}</h3></div>
                <div className="package-showcase-price"><small>From</small><strong>{item.price}</strong></div>
              </div>
              <p className="package-showcase-summary">{item.summary}</p>
              <p className="package-showcase-reason"><span>Why this level</span>{item.reason}</p>
              <div className="package-showcase-details">
                {item.pillars.map((pillar, pillarIndex) => (
                  <div className="package-showcase-pillar" key={pillar.name} style={{ "--pillar-order": pillarIndex } as CSSProperties}>
                    <span aria-hidden="true">{pillar.japanese}</span><b>{pillar.name}</b><p>{pillar.preview}</p>
                  </div>
                ))}
                <p className="package-showcase-confirmation">Vehicle class, named venues, tee times, cultural access, and all final inclusions require confirmation.</p>
              </div>
              <div className="package-showcase-actions">
                <button className="package-showcase-toggle" type="button" aria-expanded={isActive} onClick={() => setActiveSlug(isActive ? null : item.slug)}>
                  {isActive ? "Close preview" : "Preview inclusions"}
                </button>
                <Link className="arrow-link" href={`/en/packages/${item.slug}`}>View full package <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
