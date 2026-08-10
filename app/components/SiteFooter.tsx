import Link from "next/link";
import { footerColumns, siteName, whatsappHref } from "../site-content";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { BackToTop } from "./BackToTop";
import { ThemeToggle } from "./ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.25fr] lg:px-8">
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="footer-heading text-sm font-black uppercase tracking-[0.18em] text-[#7e62a6]">
              {column.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-[#655865] transition hover:text-[#b78296]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="footer-heading text-sm font-black uppercase tracking-[0.18em] text-[#7e62a6]">
            {siteName}
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#655865]">
            Kişiye özel bebek hediyelikleri, strafor modeller, çiçekli
            aranjmanlar ve özel gün tasarımları için siparişler WhatsApp
            üzerinden alınır.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1fbd5b]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </div>

      <div className="footer-bottom border-t border-[#eadfea] bg-[#fffaf8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs font-semibold text-[#7b6c7b] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 {siteName}. Tüm hakları saklıdır.</span>
          <span>
            Online ödeme yoktur; detaylar WhatsApp görüşmesinde netleşir.
          </span>
        </div>
      </div>
    <div className="floating-theme-control"><ThemeToggle /></div><BackToTop />
    </footer>
  );
}
