import Link from "next/link";
import type { InfoPageContent } from "../site-content";
import { contactEmail, instagramHref, instagramUsername, mailtoHref, whatsappHref } from "../site-content";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon } from "./InstagramIcon";
import { ScrollReveal } from "./ScrollReveal";
import { OrderPhotoFlow } from "./OrderPhotoFlow";

export function InfoPageView({ page }: { page: InfoPageContent }) {
  const isOrderPage = page.slug === "siparis";
  const isContactPage = page.slug === "iletisim";
  const isInstagramPage = page.slug === "instagram";
  const isEditorialPage = !isOrderPage && !isContactPage;
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />
      <ScrollReveal />

      <section data-reveal className={isOrderPage ? "order-page relative mx-auto max-w-7xl px-5 pb-16 pt-32 lg:px-8" : "mx-auto max-w-5xl px-5 pb-16 pt-32 lg:px-8"}>
        <Link
          href="/"
          className="section-kicker text-xs font-bold uppercase text-[#b78296] transition hover:text-[#7e62a6]"
        >
          Ana sayfaya dön
        </Link>
        <p className="section-kicker mt-7 text-xs font-bold uppercase text-[#b78296]">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-[#574b57]">
          {isContactPage ? "Siparişleriniz, öneri ve görüşleriniz için bizimle iletişime geçin; size en kısa sürede geri dönüş sağlayalım." : page.intro}
        </p>

        {page.notice ? (
          <div className="mt-8 rounded-xl border border-[#e7cda6] bg-[#fff6ee] p-5 text-sm font-semibold leading-7 text-[#6a5740]">
            {page.notice}
          </div>
        ) : null}

        {isOrderPage ? <OrderPhotoFlow /> : null}

        <div className={isOrderPage ? "mt-10 grid gap-5 order-page-content" : isContactPage ? "contact-list mt-10" : "editorial-list mt-12"}>
          {page.sections.map((section, index) => (
            <section
              key={section.title}
              className={isContactPage ? "contact-item" : isEditorialPage ? "editorial-section" : isOrderPage && index % 2 === 0 ? "rounded-2xl border border-[#e7cda6] bg-[#fff6ee] p-5 shadow-sm shadow-[#e7cda6]/20" : "rounded-2xl border border-[#eadfea] bg-white p-5 shadow-sm"}
            >
              {isEditorialPage ? <span className="editorial-index">0{index + 1}</span> : null}
              <h2 className="font-serif text-xl font-semibold text-[#514153]">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#655865]">
                    {paragraph}
                  </p>
                ))}
                {(isContactPage || isInstagramPage) && section.title === "Instagram" ? <a href={instagramHref} target="_blank" rel="noopener noreferrer" className="contact-map-link">@{instagramUsername} hesabını aç →</a> : null}
                {isContactPage && section.title === "E-posta" ? <a href={mailtoHref} className="contact-map-link">{contactEmail} adresine mail gönder →</a> : null}
                {isContactPage && section.title === "Adres" ? <a href="https://www.google.com/maps/search/?api=1&query=Melik%C5%9Fah%20Mahallesi%20H%C3%BCy%C3%BCkl%C3%BC%20Sokak%20No%3A%2019%2FB%20Meram%20Konya" target="_blank" rel="noopener noreferrer" className="contact-map-link">Haritada yol tarifi al →</a> : null}
              </div>
            </section>
          ))}
        </div>

        {isContactPage ? <div className="mt-10 flex"><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25d366] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/20 transition hover:-translate-y-1"><WhatsAppIcon className="h-5 w-5" />WhatsApp&apos;tan Yaz</a></div> : null}
        {isInstagramPage ? <div className="mt-10 flex"><a href={instagramHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#70528f] px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#70528f]/20 transition hover:-translate-y-1 hover:bg-[#5f427d]"><InstagramIcon className="h-5 w-5" />Instagram&apos;da Takip Et</a></div> : null}
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
