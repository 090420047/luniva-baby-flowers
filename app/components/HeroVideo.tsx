"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const update = () => setProgress(Math.min(window.scrollY / 700, 1));
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 0.72;
    video.play().catch(() => {
      setIsMuted(true);
      video.muted = true;
      void video.play();
    });
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) void video.play();
  };

  const scale = 1 - progress * 0.06;
  const radius = progress * 22;

  return (
    <section className="hero-video-section" aria-label="Luniva Baby & Flowers tanıtım videosu">
      <div className="hero-video-frame" style={{ transform: `scale(${scale})`, borderRadius: `${radius}px` }}>
        <video ref={videoRef} className="hero-video" src="/luniva/luniva-hero.mp4" autoPlay muted={isMuted} loop playsInline preload="metadata" />
        <div className="hero-video-shade" />
        <button type="button" onClick={toggleSound} className="hero-video-sound" aria-label={isMuted ? "Videonun sesini aç" : "Videonun sesini kapat"} aria-pressed={!isMuted}>
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 9v6h4l5 4V5L8 9H4Z" />
            {isMuted ? <path d="m17 9 4 4m0-4-4 4" /> : <><path d="M17 9.5a4 4 0 0 1 0 5" /><path d="M20 7a7.5 7.5 0 0 1 0 10" /></>}
          </svg>
        </button>
      </div>
    </section>
  );
}
