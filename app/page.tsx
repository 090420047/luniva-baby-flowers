import Link from "next/link";
import { trustItems, whatsappHref } from "./site-content";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { ScrollReveal } from "./components/ScrollReveal";
import { HeroVideo } from "./components/HeroVideo";

const heroStats = [
  "Strafor modeller",
  "\u0130sme \u00f6zel haz\u0131rl\u0131k",
  "WhatsApp sipari\u015f",
];

export default function Home() {
  return (
    <main className="home-page min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />
      <ScrollReveal />
      <HeroVideo />

      <section data-reveal className="home-hero relative overflow-hidden pt-28 sm:pt-32">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#f8d7e6]/45 via-[#fffaf8] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-24">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b78296]">Luniva Baby &amp; Flowers</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] text-[#70528f] sm:text-5xl lg:text-6xl">{"Bebek hediyeleri ve \u00f6zel g\u00fcn tasar\u0131mlar\u0131."}</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#5f535f]">{"Sizin ve bebe\u011finiz i\u00e7in sevgiyle haz\u0131rlanan aranjmanlar, isme \u00f6zel tasar\u0131mlar ve unutulmaz hediyeler."}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/kategoriler" className="inline-flex items-center justify-center rounded-xl bg-[#7e62a6] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#7e62a6]/20 transition hover:-translate-y-0.5 hover:bg-[#70528f]">{"Kategorileri g\u00f6r"}</Link>
              <Link href="/siparis" className="inline-flex items-center justify-center rounded-xl border border-[#c8b6ff]/70 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#70528f] transition hover:-translate-y-0.5">{"Sipari\u015f ver"}</Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-3 text-sm font-semibold text-[#786778]">
              {heroStats.map((item) => <span key={item} className="rounded-full border border-[#eadfea] bg-white/80 px-4 py-2">{item}</span>)}
            </div>
          </div>

          <div className="grid grid-cols-[1.05fr_.95fr] gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-[28px] bg-[#f1e9f2] shadow-xl shadow-[#8e7596]/15"><img src="/luniva/baby-pink-lantern.png" alt="Pembe fener hoş geldin bebek hediyesi" className="h-[390px] w-full object-cover sm:h-[520px]" /></div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-[28px] bg-[#f4edf2] shadow-lg shadow-[#8e7596]/10"><img src="/luniva/blue-swan-lake.png" alt="Mavi kuğulu hoş geldin bebek aranjmanı" className="h-[185px] w-full object-cover sm:h-[250px]" /></div>
              <div className="rounded-[28px] bg-[#e9ddf0] p-6 text-[#70528f] sm:p-7"><p className="font-serif text-2xl leading-tight">{"Zarif bir hediye, en \u00f6zel ana e\u015flik etsin."}</p><p className="mt-3 text-sm leading-6 text-[#745f78]">{"Her par\u00e7a, g\u00fczel bir an\u0131ya d\u00f6n\u00fc\u015fmesi i\u00e7in \u00f6zenle haz\u0131rlan\u0131r."}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section data-reveal className="border-y border-[#eadfea] bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 lg:px-8 sm:grid-cols-3">{trustItems.map((item) => <div key={item.title} className="rounded-xl border border-[#f0e4ef] bg-[#fffaf8] px-5 py-4 text-center shadow-sm shadow-[#e8d9e8]/30"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9d6780]">{item.title}</p><p className="mt-2 text-sm leading-6 text-[#6d616d]">{item.text}</p></div>)}</div>
      </section>

      <section data-reveal className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="rounded-[30px] bg-[#70528f] px-7 py-10 text-white sm:px-10 sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f8d7e6]">{"Luniva\u2019y\u0131 ke\u015ffedin"}</p>
          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div><h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl">{"Her sayfada sizi ayr\u0131 bir koleksiyon ve deneyim kar\u015f\u0131las\u0131n."}</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/80">{"Koleksiyonlar\u0131 inceleyin ya da sipari\u015finizi bizimle birlikte planlay\u0131n."}</p></div><div className="flex flex-col gap-3 sm:flex-row"><Link href="/kategoriler" className="rounded-xl bg-white px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#70528f]">{"Kategorilere git"}</Link><a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white"><WhatsAppIcon className="h-4 w-4" />{"Bize yaz\u0131n"}</a></div></div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
