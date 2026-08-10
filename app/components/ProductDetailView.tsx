import Link from "next/link";
import type { ProductItem } from "../site-content";
import { productCategoryMap, productItems, whatsappHref } from "../site-content";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ScrollReveal } from "./ScrollReveal";

export function ProductDetailView({ product }: { product: ProductItem }) {
  const primaryCategory = product.categories[0];
  const categories = product.categories.map((slug) => productCategoryMap[slug]);
  const categoryProducts = productItems.filter((item) => item.categories.includes(primaryCategory));
  const categoryIndex = categoryProducts.indexOf(product);
  const previousProduct = categoryProducts[(categoryIndex - 1 + categoryProducts.length) % categoryProducts.length];
  const nextProduct = categoryProducts[(categoryIndex + 1) % categoryProducts.length];
  const previousProductIndex = productItems.indexOf(previousProduct);
  const nextProductIndex = productItems.indexOf(nextProduct);

  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />
      <ScrollReveal />

      <section data-reveal className="mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-8">
        <Link
          href={`/${primaryCategory}`}
          className="section-kicker text-xs font-bold uppercase text-[#b78296] transition hover:text-[#7e62a6]"
        >
          {"Koleksiyona d\u00f6n"}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div className="overflow-hidden rounded-[28px] border border-[#eadfea] bg-white shadow-xl shadow-[#c8b6ff]/10">
            <img
              src={product.image}
              alt={product.title}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="lg:pt-5">
            <p className="section-kicker text-xs font-bold uppercase text-[#b78296]">
              {"Luniva tasar\u0131m\u0131"}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#70528f] sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-[#574b57]">{product.summary}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#e7cda6] bg-[#fff6ee] px-3 py-1.5 text-xs font-bold text-[#8f7044]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="product-detail-notes mt-9">
              <div>
                <span>{"Kategoriler"}</span>
                <p>{categories.map((category) => category.title).join(" \u2022 ")}</p>
              </div>
              {product.dimensions ? (
                <div>
                  <span>{"\u00d6l\u00e7\u00fcler"}</span>
                  <p>{product.dimensions}</p>
                </div>
              ) : null}
              {product.thickness ? (
                <div>
                  <span>{"Kal\u0131nl\u0131k"}</span>
                  <p>{product.thickness}</p>
                </div>
              ) : null}
              <div>
                <span>{"Ki\u015fiye \u00f6zel detay"}</span>
                <p>{"Renk, isim ve fig\u00fcr detaylar\u0131 sipari\u015f s\u0131ras\u0131nda iste\u011finize g\u00f6re uyarlanabilir."}</p>
              </div>
              <div>
                <span>{"Haz\u0131rlanma"}</span>
                <p>{"Bu model ortalama 3 g\u00fcn i\u00e7inde sevgiyle haz\u0131rlan\u0131r."}</p>
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#1fbd5b] hover:shadow-2xl hover:shadow-[#25d366]/30"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {"Bu model hakk\u0131nda bilgi al"}
            </a>
          </div>
        </div>

        {categoryProducts.length > 1 ? (
          <nav aria-label="Ürünler arası geçiş">
            <Link
              href={`/urun/${previousProductIndex}`}
              aria-label={`Önceki ürün: ${previousProduct.title}`}
              className="fixed left-3 top-1/2 z-40 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c8b6ff] bg-[#fffaf8]/95 text-2xl text-[#70528f] shadow-lg shadow-[#c8b6ff]/15 backdrop-blur transition hover:scale-110 hover:bg-[#c8b6ff] hover:text-white sm:left-6 sm:h-12 sm:w-12"
            >
              <span aria-hidden="true">‹</span>
            </Link>
            <Link
              href={`/urun/${nextProductIndex}`}
              aria-label={`Sonraki ürün: ${nextProduct.title}`}
              className="fixed right-3 top-1/2 z-40 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#c8b6ff] bg-[#fffaf8]/95 text-2xl text-[#70528f] shadow-lg shadow-[#c8b6ff]/15 backdrop-blur transition hover:scale-110 hover:bg-[#c8b6ff] hover:text-white sm:right-6 sm:h-12 sm:w-12"
            >
              <span aria-hidden="true">›</span>
            </Link>
          </nav>
        ) : null}
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
