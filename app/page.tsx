import { instagramNotice, trustItems, whatsappHref } from "./site-content";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WhatsAppIcon } from "./components/WhatsAppIcon";

const featuredWorks = [
  {
    title: "Mavi kuğulu bebek aranjmanı",
    text: "Yeni doğan ziyaretine götürülebilecek, isme ve renge göre kişiselleştirilen zarif bir model.",
    image: "/luniva/blue-swan-detail-clean.png",
    alt: "Mavi detaylı Hoşgeldin Bebek kuğu aranjmanı",
    position: "center center",
  },
  {
    title: "Lila çiçekli tasarım",
    text: "Daha sakin ve tatlı bir görünüm isteyenler için lila çiçeklerle hazırlanan yumuşak tonlu seçenek.",
    image: "/luniva/purple-swan-room-clean.png",
    alt: "Lila çiçekli kuğu formunda Hoşgeldin Bebek aranjmanı",
    position: "center center",
  },
  {
    title: "Bebek odası sunumu",
    text: "Bebek odasında şık duran, fotoğraflarda temiz görünen sade ve sıcak hediye alternatifi.",
    image: "/luniva/blue-swan-room-clean.png",
    alt: "Bebek odasında mavi kuğulu Hoşgeldin Bebek aranjmanı",
    position: "center center",
  },
  {
    title: "Aileye hediye sunumu",
    text: "Elde taşındığında dolu ve özenli görünen, hatıra fotoğrafına yakışan gösterişli sunum.",
    image: "/luniva/family-gift.png",
    alt: "Ailenin Luniva bebek aranjmanını tuttuğu görsel",
    position: "center top",
  },
];

const orderSteps = [
  {
    value: "01",
    title: "Modeli seç",
    text: "Beğendiğin kuğu, çiçek ve ayıcık temasını WhatsApp'ta gönder.",
  },
  {
    value: "02",
    title: "Kişiselleştir",
    text: "Bebek adı, renk tonu, teslim günü ve özel not birlikte netleşir.",
  },
  {
    value: "03",
    title: "Onayla",
    text: "Fiyat, hazırlık süresi ve teslim detayı konuşmada hızlıca tamamlanır.",
  },
];

const serviceCards = [
  "Hoşgeldin Bebek hediyesi",
  "Kız ve erkek bebek renkleri",
  "Kişiye özel isim yazısı",
  "Çiçek ve figür seçimi",
  "Hastane odası sunumu",
  "Instagram açılış görselleri",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <SiteHeader />

      <section id="anasayfa" className="relative overflow-hidden pt-28">
        <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 px-5 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative z-10 max-w-xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.26em] text-[#b78296]">
              Kişiye özel bebek hediyelikleri
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-[#7e62a6] sm:text-6xl lg:text-7xl">
              Luniva Baby & Flowers
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#574b57]">
              Bebeğe özel isim, renk ve çiçek detaylarıyla hazırlanan
              Hoşgeldin Bebek aranjmanları için WhatsApp'tan hızlıca yaz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25d366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/25 transition hover:-translate-y-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Siparişe Başla
              </a>
              <a
                href="#modeller"
                className="inline-flex items-center justify-center rounded-lg border border-[#c8b6ff]/70 bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#7e62a6] transition hover:-translate-y-1"
              >
                Modelleri İncele
              </a>
            </div>
          </div>

          <div className="hero-brand-panel">
            <img
              src="/luniva/moon-bear-logo.png"
              alt="Luniva Baby ay ve ayıcık logosu"
              className="hero-brand-image"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfea] bg-white py-5">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 text-center text-xs font-black uppercase tracking-[0.16em] text-[#8a778a] sm:grid-cols-3 lg:px-8">
          <span>Modeli seç</span>
          <span>İsim ve rengi yaz</span>
          <span>WhatsApp'tan onayla</span>
        </div>
      </section>

      <section id="modeller" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-9 grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b78296]">
              Popüler modeller
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
              Beğendiğin tasarımı seç, detayları birlikte netleştirelim.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#645864]">
            Her model, hediye seçimini kolaylaştıracak şekilde ürünün formunu,
            rengini ve odadaki duruşunu gösterir.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredWorks.map((work) => (
            <article
              key={work.title}
              className="group overflow-hidden rounded-lg border border-[#eadfea] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#c8b6ff]/18"
            >
              <div className="relative aspect-[4/5] bg-[#f7eef5]">
                <img
                  src={work.image}
                  alt={work.alt}
                  className="image-fill object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: work.position }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#514153]">
                  {work.title}
                </h3>
                <p className="mt-2 min-h-18 text-sm leading-6 text-[#6d616d]">
                  {work.text}
                </p>
                <a
                  href={`${whatsappHref}%20${encodeURIComponent(work.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f8d7e6] px-4 py-3 text-sm font-black text-[#7e4f69] transition hover:bg-[#f1bfd6]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Bu modeli sor
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7eef5] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-8">
          <div className="brand-detail-frame">
            <img
              src="/luniva/moon-bear-logo.png"
              alt="Luniva Baby ay ve ayıcık logosu"
              className="brand-detail-image"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b78296]">
              Sana özel hazırlanır
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
              Hediye seçimi kolay, sipariş konuşması net.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f535f]">
              Ürünü seçen kişi önce ne alacağını görür; isim, renk, teslim ve
              not bilgilerini tek WhatsApp konuşmasında tamamlar.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-white bg-white/75 px-4 py-3 text-sm font-bold text-[#5b4f5c]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="siparis" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b78296]">
            Sipariş akışı
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
            Üç adımda ne istediğini anlat, kalanını Luniva hazırlasın.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {orderSteps.map((step) => (
            <article
              key={step.value}
              className="rounded-lg border border-[#eadfea] bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-black text-[#c8b6ff]">
                {step.value}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-semibold text-[#514153]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#675b67]">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-9 grid gap-6 border-t border-[#eadfea] pt-9 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <h3 className="font-serif text-3xl font-semibold text-[#7e62a6]">
              Hazır mesajla konuşmayı başlat.
            </h3>
            <p className="mt-3 text-base leading-7 text-[#5f535f]">
              WhatsApp butonu müşteriyi direkt sipariş konuşmasına götürür.
              Gerçek telefon numarası eklendiğinde tüm butonlar aynı hatta çalışır.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25d366] px-7 py-5 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-[#25d366]/20 transition hover:-translate-y-1 lg:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp'tan Yaz
          </a>
        </div>
      </section>

      <section id="guvenli-siparis" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#b78296]">
                Güvenli sipariş
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
                Canlı yayına hazır, açık ve güven veren bilgi yapısı.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#645864]">
              Sipariş, teslimat, KVKK ve mesafeli satış bilgilendirmeleri ayrı
              sayfalarda hazırlandı. Gerçek işletme bilgileri netleştiğinde bu
              metinler son hale getirilir.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#eadfea] bg-[#fffaf8] p-5 shadow-sm"
              >
                <h3 className="font-serif text-2xl font-semibold text-[#514153]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#655865]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/siparis-ve-teslimat"
              className="inline-flex items-center justify-center rounded-lg bg-[#7e62a6] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-1"
            >
              Sipariş ve Teslimat
            </a>
            <a
              href="/gizlilik-kvkk"
              className="inline-flex items-center justify-center rounded-lg border border-[#c8b6ff]/70 bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#7e62a6] transition hover:-translate-y-1"
            >
              Gizlilik ve KVKK
            </a>
          </div>
        </div>
      </section>

      <section id="instagram" className="bg-[#e9f7ff] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.78fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#7aa7c8]">
              Instagram ve sponsorlu tanıtım
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#486f8a] lg:text-5xl">
              İlk bakışta marka, sonra ürün, en sonda sipariş.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4f6573]">
              {instagramNotice} Açılışta aynı görsel dilde ürün gönderileri,
              Reels kapakları ve sponsorlu tanıtım içerikleri hazırlanır.
            </p>
            <span
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#486f8a] shadow-lg shadow-[#7aa7c8]/15"
              aria-disabled="true"
              title={instagramNotice}
            >
              <span className="instagram-mark" aria-hidden="true" />
              Instagram Yakında
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Vitrin gönderileri", "Reels kapakları", "Sponsorlu tanıtım"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white bg-white/70 p-5 text-center shadow-sm"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[#bee8ff] font-black text-[#486f8a]">
                    {item.slice(0, 1)}
                  </span>
                  <h3 className="mt-4 text-sm font-black uppercase tracking-[0.12em] text-[#486f8a]">
                    {item}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-[#2d2430] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#f8d7e6]">
              Luniva Baby & Flowers
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">
              Beğendiğin modeli WhatsApp'tan gönder.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25d366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <span
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
              aria-disabled="true"
              title={instagramNotice}
            >
              <span className="instagram-mark" aria-hidden="true" />
              Instagram Yakında
            </span>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
