"use client";

import Link from "next/link";
import { useState } from "react";
import { productCategories, whatsappHref } from "../site-content";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SearchButton } from "./SearchButton";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/modeller", label: "Modeller" },
  { href: "/siparis", label: "Sipariş" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#eadfea]/80 bg-[#fffaf8]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[90px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" onClick={closeMenu} className="brand-lockup group flex items-center gap-3.5" aria-label="Luniva Baby & Flowers ana sayfa">
          <span className="brand-mark grid h-14 w-14 place-items-center overflow-hidden rounded-full"><img src="/luniva/moon-bear-mark.png" alt="" className="h-full w-full object-contain p-1" /></span>
          <span className="leading-none"><span className="block font-serif text-[27px] font-semibold tracking-[-0.035em] text-[#70528f] transition group-hover:text-[#8a619b]">Luniva</span><span className="mt-1.5 block text-[10px] font-bold tracking-[0.24em] text-[#b78296]">BABY & FLOWERS</span></span>
        </Link>

        <nav aria-label="Ana menü" className="site-navigation hidden items-center gap-7 text-[15px] font-semibold text-[#665766] xl:flex">
          <Link href="/" className="transition hover:text-[#8f6bb8]">Ana Sayfa</Link>
          <div className="group relative"><Link href="/modeller" className="inline-flex py-7 transition hover:text-[#8f6bb8]">Modeller</Link><div className="invisible absolute left-1/2 top-[66px] w-64 -translate-x-1/2 rounded-2xl border border-[#eadfea] bg-white p-2 opacity-0 shadow-xl shadow-[#7e62a6]/10 transition duration-200 group-hover:visible group-hover:opacity-100">{productCategories.map((category) => <Link key={category.slug} href={`/${category.slug}`} className="block rounded-xl px-4 py-2.5 text-sm text-[#5f535f] transition hover:bg-[#f7eef5] hover:text-[#70528f]">{category.shortTitle}</Link>)}</div></div>
          {links.slice(2).map((link) => <Link key={link.href} href={link.href} className="transition hover:text-[#8f6bb8]">{link.label}</Link>)}
        </nav>

        <div className="flex items-center gap-2"><SearchButton /><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-[12px] font-bold text-white shadow-lg shadow-[#25d366]/20 transition hover:-translate-y-0.5 hover:bg-[#1fbd5b]"><WhatsAppIcon className="h-4 w-4" /><span>Sipariş Ver</span></a><button type="button" onClick={() => setMenuOpen((current) => !current)} className="mobile-menu-toggle xl:hidden" aria-label="Menüyü aç veya kapat" aria-expanded={menuOpen}><span /><span /><span /></button></div>
      </div>

      {menuOpen ? <nav className="mobile-menu xl:hidden" aria-label="Mobil menü">{links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>)}<div className="mobile-menu-categories"><p>Modeller</p>{productCategories.map((category) => <Link key={category.slug} href={`/${category.slug}`} onClick={closeMenu}>{category.shortTitle}</Link>)}</div></nav> : null}
    </header>
  );
}
