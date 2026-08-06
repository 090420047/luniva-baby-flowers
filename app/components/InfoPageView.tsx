import Link from "next/link";
import type { InfoPageContent } from "../site-content";
import { whatsappHref } from "../site-content";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ScrollReveal } from "./ScrollReveal";

export function InfoPageView({ page }: { page: InfoPageContent }) {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />
      <ScrollReveal />

      <section data-reveal className="mx-auto max-w-5xl px-5 pb-16 pt-32 lg:px-8">
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-[0.14em] text-[#b78296] transition hover:text-[#7e62a6]"
        >
          Ana sayfaya dön
        </Link>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#b78296]">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#574b57]">
          {page.intro}
        </p>

        {page.notice ? (
          <div className="mt-8 rounded-xl border border-[#e7cda6] bg-[#fff6ee] p-5 text-sm font-semibold leading-7 text-[#6a5740]">
            {page.notice}
          </div>
        ) : null}

        <div className="mt-10 grid gap-5">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-[#eadfea] bg-white p-5 shadow-sm"
            >
              <h2 className="font-serif text-xl font-semibold text-[#514153]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#655865]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25d366] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/20 transition hover:-translate-y-1"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp&apos;tan Yaz
          </a>
          <Link
            href="/#kategoriler"
            className="inline-flex items-center justify-center rounded-xl border border-[#c8b6ff]/70 bg-white px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#7e62a6] transition hover:-translate-y-1"
          >
            Kategorileri İncele
          </Link>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
