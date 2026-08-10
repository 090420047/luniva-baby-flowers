"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { productCategories, productItems } from "../site-content";

type Result = { label: string; href: string; type: string };

export function SearchButton() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const results = useMemo<Result[]>(() => {
    const value = query.trim().toLocaleLowerCase("tr-TR");
    if (!value) return [];
    const products = productItems
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => (item.title + item.summary + item.tags.join(" ")).toLocaleLowerCase("tr-TR").includes(value))
      .slice(0, 5)
      .map(({ item, index }) => ({ label: item.title, href: "/urun/" + index, type: "Ürün" }));
    const categories = productCategories
      .filter((item) => (item.title + item.description).toLocaleLowerCase("tr-TR").includes(value))
      .map((item) => ({ label: item.title, href: "/" + item.slug, type: "Kategori" }));
    return [...products, ...categories].slice(0, 7);
  }, [query]);

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)} className="search-trigger" aria-label="Sitede ara" title="Ara">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
        <span className="hidden lg:inline">Ara</span>
      </button>
      {open && (
        <div className="search-modal" role="dialog" aria-modal="true" aria-label="Site arama">
          <button type="button" aria-label="Aramayi kapat" className="search-backdrop" onClick={() => setOpen(false)} />
          <div className="search-panel">
            <div className="flex items-center justify-between gap-4"><label htmlFor="site-search" className="font-serif text-2xl font-semibold text-[#70528f]">{"Ne ar\u0131yorsunuz?"}</label><button type="button" onClick={() => setOpen(false)} className="text-sm font-bold text-[#8b6399]">Kapat</button></div>
            <input id="site-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder={"\u00d6rne\u011fin: pembe, buket, ku\u011fu..."} className="mt-5 w-full rounded-xl border border-[#ded0e5] bg-[#fffaf8] px-4 py-3.5 text-sm text-[#4f414f] outline-none placeholder:text-[#9b8d9a] focus:border-[#9a76b0]" />
            {query ? <div className="mt-4 overflow-hidden rounded-xl border border-[#eadfea]">{results.length ? results.map((result) => <Link key={result.type + result.label} href={result.href} onClick={() => setOpen(false)} className="flex items-center justify-between gap-4 border-b border-[#f0e7f1] px-4 py-3 text-sm last:border-0 hover:bg-[#fffaf8]"><span className="font-semibold text-[#5f535f]">{result.label}</span><span className="text-xs font-bold text-[#b78296]">{result.type}</span></Link>) : <p className="px-4 py-5 text-sm text-[#786778]">{"Sonu\u00e7 bulunamad\u0131."}</p>}</div> : <p className="mt-4 text-sm leading-6 text-[#786778]">{"Kategori, renk veya model ad\u0131yla arama yapabilirsiniz."}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
