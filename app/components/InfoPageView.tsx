import type { InfoPageContent } from "../site-content";
import { whatsappHref } from "../site-content";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function InfoPageView({ page }: { page: InfoPageContent }) {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-32 lg:px-8">
        <a
          href="/"
          className="text-sm font-black uppercase tracking-[0.16em] text-[#b78296] transition hover:text-[#7e62a6]"
        >
          Ana sayfaya dön
        </a>
        <p className="mt-8 text-sm font-black uppercase tracking-[0.26em] text-[#b78296]">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-[#7e62a6] lg:text-6xl">
          {page.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#574b57]">
          {page.intro}
        </p>

        {page.notice ? (
          <div className="mt-8 rounded-lg border border-[#e7cda6] bg-[#fff6ee] p-5 text-sm font-semibold leading-7 text-[#6a5740]">
            {page.notice}
          </div>
        ) : null}

        <div className="mt-10 grid gap-5">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-lg border border-[#eadfea] bg-white p-6 shadow-sm"
            >
              <h2 className="font-serif text-3xl font-semibold text-[#514153]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-[#655865]"
                  >
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
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25d366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/20 transition hover:-translate-y-1"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp'tan Yaz
          </a>
          <a
            href="/#modeller"
            className="inline-flex items-center justify-center rounded-lg border border-[#c8b6ff]/70 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#7e62a6] transition hover:-translate-y-1"
          >
            Modelleri İncele
          </a>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
