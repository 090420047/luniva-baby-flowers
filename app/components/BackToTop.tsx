"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 480);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  if (!visible) return null;
  return <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="back-to-top" aria-label="Sayfan?n ba??na d?n" title="Yukar? ??k">&uarr;</button>;
}
