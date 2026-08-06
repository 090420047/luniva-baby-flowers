"use client";

import { useEffect, useState } from "react";

export function HeroVideo() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => setProgress(Math.min(window.scrollY / 700, 1));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const scale = 1 - progress * 0.12;
  const radius = 28 + progress * 16;
  return <section className="hero-video-section" aria-label="Luniva Baby & Flowers tan?t?m videosu"><div className="hero-video-frame" style={{ transform: `scale(${scale})`, borderRadius: `${radius}px` }}><video className="hero-video" src="/luniva/luniva-hero.mp4" autoPlay muted loop playsInline preload="metadata" /><div className="hero-video-shade" /></div></section>;
}
