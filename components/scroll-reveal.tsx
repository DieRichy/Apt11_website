"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  "main .page-hero .eyebrow",
  "main .page-hero h1",
  "main .page-hero .lead",
  "main .page-hero .side-note",
  "main .section-heading",
  "main .split > *",
  "main .intent-card",
  "main .property-card",
  "main .feature",
  "main .principle",
  "main .step",
  "main .placeholder-panel",
  "main .room-table",
  "main .gallery",
  "main .nearby-list",
  "main .form-note",
  "main .journey-form",
  "main .property-hero-copy",
  "main .property-hero-image",
  "main .cta-grid > *",
].join(",");

export function ScrollReveal({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(revealSelector));
    targets.forEach((target, index) => {
      target.dataset.scrollReveal = "";
      target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });
    setReady(true);

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return <div ref={rootRef} className="scroll-reveal-root" data-scroll-reveal-ready={ready ? "" : undefined}>{children}</div>;
}
