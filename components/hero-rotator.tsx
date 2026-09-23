"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NativeLink as Link } from "@/components/native-link";

const scenes = [
  { image: "/images/687773-3840x2160-desktop-4k-osaka-castle-background.png", word: "WONDER", style: "editorial", color: "#f1c27d", message: "Three starting points. One connected Kansai journey." },
  { image: "/images/Shinsekai-Osaka-Japan-scaled.png", word: "CHARACTER", style: "classic", color: "#f0a060", message: "Stay, dine, move, relax, and enjoy with less friction." },
  { image: "/images/photorealistic-high-end-japanese-massage-spa-in-os.png", word: "CALM", style: "mincho", color: "#c9d7c3", message: "Choose a level of support, then make it personal." },
  { image: "/images/photorealistic-high-end-tonkatsu-teishoku--35mm-le.png", word: "TASTE", style: "soft", color: "#f1b36d", message: "Osaka flavors connected to the place you stay." },
  { image: "/images/universal studio.png", word: "JOY", style: "handwritten", color: "#ffd45a", message: "Practical, premium, or prestige. Your pace stays yours." },
  { image: "/images/photorealistic-premium-japanese-chauffeur-service-.png", word: "EASE", style: "refined", color: "#d8bc9a", message: "Transport and planning shaped around the whole trip." },
  { image: "/images/photorealistic-dotonbori-osaka-at-night--canal-ref.png", word: "ENERGY", style: "expressive", color: "#ff8a5b", message: "A city night, a quiet room, and one clear plan." },
];

export function HeroRotator() {
  const [index, setIndex] = useState(0);
  const scene = scenes[index];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % scenes.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="hero-intro">
    <Image key={scene.image} className="hero-intro-image" src={scene.image} alt="" fill priority={index === 0} sizes="100vw" />
    <div className="hero-intro-overlay" />
    <div className="shell hero-copy">
      <h1>Travel with<br /><span className={`hero-ease hero-ease-${scene.style}`} key={scene.word} style={{ color: scene.color }}>{scene.word}.</span><br />Choose your way into Kansai.</h1>
      <div className="hero-rotator" aria-live="polite" aria-atomic="true"><p key={scene.message}>{scene.message}</p></div>
      <div className="button-row">
        <Link className="button button-secondary hero-stays-button" href="/en/packages">Explore the packages</Link>
        <Link className="button button-secondary hero-stays-button" href="/en/plan-your-journey?package=custom">Build a custom journey</Link>
      </div>
    </div>
  </div>;
}
