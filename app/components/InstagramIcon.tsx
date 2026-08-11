export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="luniva-instagram-gradient" x1="15" y1="58" x2="49" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffc75f" />
          <stop offset="0.28" stopColor="#ff4f75" />
          <stop offset="0.58" stopColor="#c135b8" />
          <stop offset="1" stopColor="#405de6" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#luniva-instagram-gradient)" />
      <rect x="18" y="18" width="28" height="28" rx="8" fill="none" stroke="#fff" strokeWidth="5" />
      <circle cx="32" cy="32" r="7.25" fill="none" stroke="#fff" strokeWidth="5" />
      <circle cx="42.75" cy="21.75" r="3.25" fill="#fff" />
    </svg>
  );
}
