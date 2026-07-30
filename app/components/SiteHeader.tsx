import { whatsappHref } from "../site-content";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-[#fffaf8]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 overflow-hidden rounded-lg border border-[#eadfea] bg-white shadow-sm">
            <img
              src="/luniva/moon-bear-mark.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block font-serif text-xl font-semibold leading-5 text-[#7e62a6]">
              Luniva
            </span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-[#b78296]">
              Baby & Flowers
            </span>
          </span>
        </a>

        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-7 text-sm font-semibold text-[#665766] lg:flex"
        >
          <a href="/#modeller" className="transition hover:text-[#8f6bb8]">
            Modeller
          </a>
          <a href="/#siparis" className="transition hover:text-[#8f6bb8]">
            Sipariş
          </a>
          <a href="/instagram" className="transition hover:text-[#8f6bb8]">
            Instagram
          </a>
          <a href="/iletisim" className="transition hover:text-[#8f6bb8]">
            İletişim
          </a>
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#25d366] px-4 py-3 text-sm font-black text-white shadow-lg shadow-[#25d366]/20 transition hover:-translate-y-0.5 hover:bg-[#1fbd5b]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
