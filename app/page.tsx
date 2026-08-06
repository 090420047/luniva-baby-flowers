import Link from "next/link";
import {
  productCategories,
  productItems,
  trustItems,
  whatsappHref,
} from "./site-content";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { ScrollReveal } from "./components/ScrollReveal";
import { HeroVideo } from "./components/HeroVideo";

const heroStats = [
  "Strafor modeller",
  "İsme özel hazırlık",
  "WhatsApp sipariş",
];

export default function Home() {
  return (
    <main className="home-page min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader /><ScrollReveal /><HeroVideo />

      <section data-reveal className="home-hero relative overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#f8d7e6]/45 via-[#fffaf8] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-24">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b78296]">
              Luniva Baby & Flowers
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] text-[#70528f] sm:text-5xl lg:text-6xl">
              Bebek hediyeleri ve özel gün tasarımları.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#5f535f]">
              Hoş geldin bebek aranjmanları, kız ve erkek bebek modelleri,
              isme özel strafor tasarımlar, buketler ve özel gün hediyelikleri
              için kategorilere göre kolayca seçim yapın.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#kategoriler"
                className="inline-flex items-center justify-center rounded-xl bg-[#7e62a6] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#7e62a6]/20 transition hover:-translate-y-0.5 hover:bg-[#70528f]"
              >
                Kategorileri gör
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#c8b6ff]/70 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#70528f] transition hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-4 w-4" /> Bize yazın
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold text-[#786778]">
              {heroStats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#eadfea] bg-white/80 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-[1.05fr_.95fr] gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-[28px] bg-[#f1e9f2] shadow-xl shadow-[#8e7596]/15">
              <img
                src="/luniva/baby-pink-lantern.png"
                alt="Pembe fener hoş geldin bebek hediyesi"
                className="h-[390px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-[28px] bg-[#f4edf2] shadow-lg shadow-[#8e7596]/10">
                <img
                  src="/luniva/blue-swan-lake.png"
                  alt="Mavi kuğulu hoş geldin bebek aranjmanı"
                  className="h-[185px] w-full object-cover sm:h-[250px]"
                />
              </div>
              <div className="rounded-[28px] bg-[#e9ddf0] p-6 text-[#70528f] sm:p-7">
                <p className="font-serif text-2xl leading-tight">
                  Her model kendi hikayesiyle öne çıksın.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#745f78]">
                  Hoş geldin bebek, kız bebek, erkek bebek ve hediyelik
                  seçenekleri düzenli bir vitrin akışıyla sunulur; müşteri
                  beğendiğini hızlıca WhatsApp&apos;tan sorar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="border-y border-[#eadfea] bg-white py-8">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-3">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#f0e4ef] bg-[#fffaf8] px-5 py-4 text-center shadow-sm shadow-[#e8d9e8]/30"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9d6780]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6d616d]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="kategoriler"
        data-reveal
        className="category-section mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b78296]">
            Kategoriler
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#70528f] sm:text-4xl">
            Ziyaretçi aradığı modeli kolayca seçsin.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#655865]">
            Her kutuya tıklanınca sadece o kategoriye ait modeller gösterilir.
            Henüz ürün eklenmeyen kategoriler de düzenli görünür.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => {
            const count = productItems.filter((item) =>
              item.categories.includes(category.slug)
            ).length;

            return (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-[#eadfea] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#c8b6ff]/15"
              >
                <div className="relative aspect-[4/3.3] overflow-hidden bg-[#f7eef5]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#70528f]">
                    {count > 0 ? `${count} model` : "Yakında"}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-[#514153]">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6d616d]">
                    {category.description}
                  </p>
                  <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.12em] text-[#9d6780]">
                    Kategoriyi aç →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section data-reveal className="featured-section bg-[#f5eef7] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b78296]">
                Öne çıkan modeller
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#70528f] sm:text-4xl">
                Strafor, çiçek ve hatıra tasarımları bir arada.
              </h2>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#25d366]/20 transition hover:-translate-y-0.5 hover:bg-[#1fbd5b]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Sipariş için yazın
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c8b6ff]/15"
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
                  <h3 className="font-serif text-xl font-semibold text-[#514153]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6d616d]">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="rounded-[28px] bg-[#70528f] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f8d7e6]">
            Luniva ile
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Beğendiğiniz modeli gönderin, detayları birlikte netleştirelim.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80">
            Renk, isim, figür, teslim günü ve fiyat bilgisi WhatsApp
            görüşmesinde yazılı olarak paylaşılır.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp&apos;tan sipariş
          </a>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
