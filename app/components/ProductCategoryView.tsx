import Link from "next/link";
import type { ProductCategorySlug } from "../site-content";
import {
  getProductsByCategory,
  productCategories,
  productCategoryMap,
  whatsappHref,
} from "../site-content";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ScrollReveal } from "./ScrollReveal";

export function ProductCategoryView({ slug }: { slug: ProductCategorySlug }) {
  const category = productCategoryMap[slug];
  const products = getProductsByCategory(slug);
  const otherCategories = productCategories.filter((item) => item.slug !== slug);

  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />
      <ScrollReveal />

      <section data-reveal className="mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8">
        <Link
          href="/#kategoriler"
          className="text-xs font-bold uppercase tracking-[0.14em] text-[#b78296] transition hover:text-[#7e62a6]"
        >
          Kategorilere dön
        </Link>

        <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b78296]">
              Kategori
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
              {category.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#574b57]">
              {category.description}
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[#eadfea] bg-white shadow-sm">
            <img
              src={category.image}
              alt={category.title}
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
        </div>

        {products.length > 0 ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-[#eadfea] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c8b6ff]/15"
              >
                <div className="aspect-[4/4.35] overflow-hidden bg-[#f7eef5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#fff6ee] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#9d6780]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-[#514153]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#6d616d]">
                    {item.summary}
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#1fbd5b]"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Bu modeli sor
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-[28px] border border-[#eadfea] bg-white p-8 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b78296]">
              Yakında
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#70528f]">
              {category.emptyLabel ?? "Bu kategoriye modeller yakında eklenecek."}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#655865]">
              Elinizde bu kategoriye ait ürün görselleri olduğunda aynı düzende
              buraya ekleyebiliriz. Şimdilik ziyaretçi WhatsApp üzerinden özel
              tasarım talebini iletebilir.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white"
            >
              <WhatsAppIcon className="h-4 w-4" /> Özel tasarım sor
            </a>
          </div>
        )}
      </section>

      <section data-reveal className="border-t border-[#eadfea] bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-[#70528f]">
            Diğer kategoriler
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherCategories.slice(0, 4).map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-2xl border border-[#eadfea] bg-[#fffaf8] p-4 text-sm font-bold text-[#655865] transition hover:-translate-y-0.5 hover:text-[#70528f]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
