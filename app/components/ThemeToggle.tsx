"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("luniva-theme");
    const enabled = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(enabled);
    document.documentElement.dataset.theme = enabled ? "dark" : "light";

    const updateVisibility = () => setVisible(window.scrollY > 260);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("luniva-theme", next ? "dark" : "light");
  };

  return <button type="button" onClick={toggleTheme} className={`theme-toggle ${visible ? "theme-toggle-visible" : ""}`} aria-label={dark ? "Açık temaya geç" : "Koyu temaya geç"} title={dark ? "Açık tema" : "Koyu tema"}><span aria-hidden="true">{dark ? "☀" : "☾"}</span></button>;
}
