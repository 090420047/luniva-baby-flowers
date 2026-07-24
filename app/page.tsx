const whatsappNumber = "905555555555";
const whatsappMessage = encodeURIComponent(
  "Merhaba Luniva Baby & Flowers, sipariş vermek istiyorum."
);
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const instagramHref = "https://www.instagram.com/lunivababyflowers/";

const featuredWorks = [
  {
    title: "Mavi kuğulu bebek aranjmanı",
    text: "Hoşgeldin Bebek yazılı, çiçek detaylı ve ayıcık figürlü tasarım.",
    image: "/luniva/blue-swan-detail.png",
    alt: "Mavi detaylı Hoşgeldin Bebek kuğu aranjmanı",
  },
  {
    title: "Aile hediye çekimi",
    text: "Yeni bebek hediyesini aileyle birlikte gösteren sıcak sunum.",
    image: "/luniva/family-gift.png",
    alt: "Ailenin Luniva bebek aranjmanını tuttuğu görsel",
  },
  {
    title: "Oda dekorlu sunum",
    text: "Bebek odası atmosferinde ürünün gerçek kullanım hissi.",
    image: "/luniva/blue-swan-room.png",
    alt: "Bebek odasında mavi kuğulu Hoşgeldin Bebek aranjmanı",
  },
  {
    title: "Lila çiçekli tasarım",
    text: "Kız bebekler için lila çiçekler ve yumuşak oda tonları.",
    image: "/luniva/purple-swan-room.png",
    alt: "Lila çiçekli kuğu formunda Hoşgeldin Bebek aranjmanı",
  },
];

const orderSteps = [
  {
    value: "01",
    title: "Model seçilir",
    text: "Hazır işler arasından ürün tipi, renk ve yazı stili belirlenir.",
  },
  {
    value: "02",
    title: "Detaylar yazılır",
    text: "İsim, teslim günü, çiçek tonu ve özel not WhatsApp üzerinden alınır.",
  },
  {
    value: "03",
    title: "Sipariş onaylanır",
    text: "Fiyat, teslim ve hazırlık süresi görüşmede netleşir.",
  },
];

const serviceCards = [
  "Hoşgeldin Bebek aranjmanları",
  "Hastane odası hediyelikleri",
  "Kuğu ve ayıcık temalı ürünler",
  "Çiçekli masa ve oda süsleri",
  "Kişiye özel isim ve renk seçimi",
  "Instagram için ürün çekimi",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#2d2430]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/55 bg-[#fffaf8]/86 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#anasayfa" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#c8b6ff] font-serif text-2xl font-bold text-white shadow-sm">
              L
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold leading-5 text-[#7e62a6]">
                Luniva
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-[#b78296]">
                Baby & Flowers
              </span>
            </span>
          </a>

          <nav
            aria-label="Ana menü"
            className="hidden items-center gap-7 text-sm font-semibold text-[#665766] lg:flex"
          >
            <a href="#islerimiz" className="transition hover:text-[#8f6bb8]">
              İşlerimiz
            </a>
            <a href="#siparis" className="transition hover:text-[#8f6bb8]">
              Sipariş
            </a>
            <a href="#instagram" className="transition hover:text-[#8f6bb8]">
              Instagram
            </a>
            <a href="#iletisim" className="transition hover:text-[#8f6bb8]">
              İletişim
            </a>
          </nav>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25d366] px-4 py-3 text-sm font-black text-white shadow-lg shadow-[#25d366]/20 transition hover:-translate-y-0.5 hover:bg-[#1fbd5b]"
          >
            <span className="wa-icon wa-icon-small" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </header>

      <section id="anasayfa" className="hero-section relative isolate overflow-hidden">
        <img
          src="/luniva/family-gift.png"
          alt="Luniva Baby & Flowers Hoşgeldin Bebek aranjmanı"
          className="hero-image"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,248,0.96)_0%,rgba(255,250,248,0.76)_42%,rgba(255,250,248,0.2)_100%)]" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#b78296]">
              Bebek hediyelikleri ve çiçek tasarımları
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.96] text-[#7e62a6] sm:text-6xl lg:text-7xl">
              Luniva Baby & Flowers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#574b57]">
              Hoşgeldin Bebek aranjmanları, çiçekli kuğu tasarımları ve kişiye
              özel hediye sunumları WhatsApp üzerinden hazırlanır.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25d366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/25 transition hover:-translate-y-1"
              >
                <span className="wa-icon" aria-hidden="true" />
                Sipariş Ver
              </a>
              <a
                href="#islerimiz"
                className="inline-flex items-center justify-center rounded-lg border border-[#c8b6ff]/70 bg-white/78 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#7e62a6] transition hover:-translate-y-1 hover:bg-white"
              >
                İşleri Gör
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfea] bg-white py-5">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 text-center text-xs font-black uppercase tracking-[0.18em] text-[#8a778a] sm:grid-cols-3 lg:px-8">
          <span>Özel isim ve renk</span>
          <span>WhatsApp sipariş</span>
          <span>Instagram vitrini</span>
        </div>
      </section>

      <section id="islerimiz" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-9 grid gap-5 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b78296]">
              İşlerimiz
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
              Bebek odasına yakışan yumuşak, çiçekli sunumlar.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#645864]">
            Site, müşterinin önce gerçek ürünleri görmesini sağlar. Her görsel
            sipariş görüşmesine bağlanacak şekilde sade bir vitrin olarak
            tasarlandı.
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
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-semibold text-[#514153]">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6d616d]">
                  {work.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7eef5] py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="relative aspect-[1.05/1] overflow-hidden rounded-lg bg-white shadow-xl shadow-[#c8b6ff]/20">
            <img
              src="/luniva/logo-board.png"
              alt="Luniva Baby marka renkleri ve logo çalışması"
              className="image-fill object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b78296]">
              Marka dili
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
              Lavanta, pembe, mavi ve krem tonlarıyla nazik bir bebek markası.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#5f535f]">
              Luniva’nın mevcut logo hissi korunarak daha temiz, mobilde hızlı
              taranan ve doğrudan siparişe götüren bir web düzeni kuruldu.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {serviceCards.map((service) => (
                <div
                  key={service}
                  className="rounded-lg border border-white bg-white/72 px-4 py-3 text-sm font-bold text-[#5b4f5c]"
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
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b78296]">
            Sipariş akışı
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#7e62a6] lg:text-5xl">
            Müşteri ürünü görür, WhatsApp’tan hızlıca konuşmaya geçer.
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
              Hazır mesajla sipariş konuşması başlatılır.
            </h3>
            <p className="mt-3 text-base leading-7 text-[#5f535f]">
              WhatsApp bağlantısına ürün adı, renk, isim ve teslim tarihi
              bilgileri eklenebilir. Numara kesinleşince tüm butonlar aynı
              hatta yönlenir.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#25d366] px-7 py-5 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-[#25d366]/20 transition hover:-translate-y-1 lg:w-auto"
          >
            <span className="wa-icon" aria-hidden="true" />
            WhatsApp’tan Yaz
          </a>
        </div>
      </section>

      <section id="instagram" className="bg-[#e9f7ff] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.78fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#7aa7c8]">
              Instagram ve sponsorlu tanıtım
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#486f8a] lg:text-5xl">
              Ürün fotoğrafları sosyal akışa taşınır, reklam bütçesi sonradan
              bağlanır.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4f6573]">
              Instagram hesabı açıldığında ürün gönderileri, Reels kapakları ve
              sponsorlu tanıtımlar aynı görsel dilde ilerler. Reklam kartı
              tanımlandığında bütçe bu kanaldan yönetilir.
            </p>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#ffffff] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-[#486f8a] shadow-lg shadow-[#7aa7c8]/15 transition hover:-translate-y-1"
            >
              <span className="instagram-mark" aria-hidden="true" />
              Instagram’a Git
            </a>
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
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#f8d7e6]">
              Luniva Baby & Flowers
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">
              Yeni siparişler WhatsApp’tan alınır.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25d366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              <span className="wa-icon" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
            >
              <span className="instagram-mark" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp üzerinden sipariş ver"
        title="WhatsApp üzerinden sipariş ver"
      >
        <span className="wa-icon" aria-hidden="true" />
      </a>
    </main>
  );
}
