export const siteName = "Luniva Baby & Flowers";
export const whatsappNumber = "905555555555";
export const whatsappMessage = encodeURIComponent("Merhaba Luniva Baby & Flowers, sipariş vermek istiyorum.");
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
export const instagramNotice = "Instagram hesabı açıldığında kullanıcı adı buraya eklenecek.";

export const footerColumns = [
  { title: "Ürün Kategorileri", links: [
    { label: "Hoş Geldin Bebek Aranjmanları", href: "/hosgeldin-bebek-aranjmanlari" },
    { label: "İsme Özel Bebek Kapı Süsleri", href: "/isme-ozel-bebek-kapi-susleri" },
    { label: "Bebek Hediyelikleri", href: "/bebek-hediyelikler" },
    { label: "Çiçekli Bebek Hediyeleri", href: "/cicekli-bebek-hediyeleri" },
    { label: "Hastane Odası Süsleri", href: "/hastane-odasi-susleri" },
  ] },
  { title: "Kurumsal", links: [
    { label: "Hakkımızda", href: "/hakkimizda" }, { label: "Sık Sorulan Sorular", href: "/sik-sorulan-sorular" }, { label: "Instagram", href: "/instagram" }, { label: "İletişim", href: "/iletisim" },
  ] },
  { title: "Bilgilendirme", links: [
    { label: "Sipariş ve Teslimat", href: "/siparis-ve-teslimat" }, { label: "İptal / İade Bilgileri", href: "/iptal-iade-bilgileri" }, { label: "Gizlilik ve KVKK", href: "/gizlilik-kvkk" }, { label: "Mesafeli Satış Bilgilendirmesi", href: "/mesafeli-satis-bilgilendirmesi" },
  ] },
] as const;

export const trustItems = [
  { title: "Sipariş öncesi net bilgi", text: "Model, renk, isim, fiyat, hazırlık süresi ve teslimat detayı WhatsApp üzerinden yazılı olarak netleştirilir." },
  { title: "Kişiye özel hazırlık", text: "Bebek adı ve renk seçimi gibi kişisel detaylar onaylandıktan sonra üretime başlanır." },
  { title: "Gizlilik ve KVKK", text: "Sipariş bilgileriniz yalnızca sipariş iletişimi ve teslimat amacıyla kullanılır." },
] as const;

export type InfoPageContent = { slug: string; eyebrow: string; title: string; intro: string; notice?: string; sections: { title: string; body: string[] }[]; };
const page = (slug: string, eyebrow: string, title: string, intro: string, sections: { title: string; body: string[] }[]): InfoPageContent => ({ slug, eyebrow, title, intro, sections });

export const infoPages = {
  "hosgeldin-bebek-aranjmanlari": page("hosgeldin-bebek-aranjmanlari", "Ürün kategorisi", "Hoş Geldin Bebek Aranjmanları", "Yeni doğan ziyaretleri ve bebek karşılama hazırlıkları için zarif çiçeklerle hazırlanan kişiye özel hediye modelleri.", [{ title: "Kişiselleştirme", body: ["Bebek adı, renk tonu, çiçek seçimi ve özel notunuz birlikte belirlenir."] }]),
  "isme-ozel-bebek-kapi-susleri": page("isme-ozel-bebek-kapi-susleri", "Ürün kategorisi", "İsme Özel Bebek Kapı Süsleri", "Bebek adı, renk paleti ve tema seçimine göre hazırlanan kapı süsü tasarımları.", [{ title: "Tasarım süreci", body: ["İsim yazısı ve renk detayları sipariş sırasında birlikte seçilir."] }]),
  "bebek-hediyelikler": page("bebek-hediyelikler", "Ürün kategorisi", "Bebek Hediyelikleri", "Yeni doğan ziyareti ve aileye kutlama hediyesi için hazırlanan zarif bebek hediyelikleri.", [{ title: "Hediye seçimi", body: ["Mavi, lila, pembe ve krem tonlardaki seçenekleri birlikte değerlendirebiliriz."] }]),
  "cicekli-bebek-hediyeleri": page("cicekli-bebek-hediyeleri", "Ürün kategorisi", "Çiçekli Bebek Hediyeleri", "Yumuşak renkli çiçekler ve bebek figürleriyle hazırlanan zarif sunumlar.", [{ title: "Tasarım dili", body: ["Lila, pembe, mavi, krem ve altın detaylar bir arada kullanılabilir."] }]),
  "hastane-odasi-susleri": page("hastane-odasi-susleri", "Ürün kategorisi", "Hastane Odası Süsleri", "Doğum odası ve karşılama alanı için bebek temalı dekoratif süsler.", [{ title: "Teslimat", body: ["Teslim günü, saati ve adres bilgisini sipariş sırasında netleştiriyoruz."] }]),
  hakkimizda: page("hakkimizda", "Kurumsal", "Hakkımızda", "Luniva Baby & Flowers; bebek karşılama hediyelerini, çiçeklerin zarafeti ve kişiye özel dokunuşlarla hazırlayan bir markadır.", [{ title: "Marka yaklaşımı", body: ["Her tasarımı fotoğraflara yakışan, sevgi dolu bir hatıraya dönüştürmeyi hedefliyoruz."] }]),
  "sik-sorulan-sorular": page("sik-sorulan-sorular", "Kurumsal", "Sık Sorulan Sorular", "Sipariş vermeden önce merak edebileceğiniz konular için kısa bilgiler.", [{ title: "Sipariş nasıl verilir?", body: ["Beğendiğiniz modeli WhatsApp üzerinden gönderin; isim, renk ve teslim gününü birlikte netleştirelim."] }]),
  instagram: page("instagram", "Sosyal medya", "Instagram", "Instagram hesabı açıldığında ürün vitrini ve güncel paylaşımlar bu sayfadan yönlendirilecektir.", [{ title: "Yakında", body: ["Hazırlık süreci, teslimat sunumları ve kampanya görselleri aynı marka diliyle paylaşılacaktır."] }]),
  iletisim: page("iletisim", "İletişim", "İletişim", "Sipariş ve bilgi almak için en hızlı iletişim kanalımız WhatsApp'tır.", [{ title: "WhatsApp sipariş", body: ["Beğendiğiniz modeli bize göndererek sipariş konuşmasını başlatabilirsiniz."] }]),
  "siparis-ve-teslimat": page("siparis-ve-teslimat", "Bilgilendirme", "Sipariş ve Teslimat", "Sipariş ve teslimat sürecine ilişkin temel bilgiler.", [{ title: "Sipariş akışı", body: ["Model, isim, renk, teslim tarihi ve teslimat şekli yazılı olarak netleştirilir."] }]),
  "iptal-iade-bilgileri": page("iptal-iade-bilgileri", "Bilgilendirme", "İptal / İade Bilgileri", "Kişiye özel ürünlerde iptal ve iade koşulları sipariş öncesinde açıkça paylaşılır.", [{ title: "Sipariş iptali", body: ["Üretime başlanmadan önce değişiklik veya iptal talebinizi WhatsApp üzerinden iletebilirsiniz."] }]),
  "gizlilik-kvkk": page("gizlilik-kvkk", "Bilgilendirme", "Gizlilik ve KVKK", "Sipariş sürecinde alınan bilgiler yalnızca iletişim ve teslimat amacıyla kullanılır.", [{ title: "Bilgilerin kullanımı", body: ["Kişisel bilgileriniz siparişin hazırlanması ve teslimatın yapılması için kullanılır."] }]),
  "mesafeli-satis-bilgilendirmesi": page("mesafeli-satis-bilgilendirmesi", "Bilgilendirme", "Mesafeli Satış Bilgilendirmesi", "Uzaktan alınan siparişlerde müşteriye satış öncesinde açık bilgi verilir.", [{ title: "Ön bilgilendirme", body: ["Ürünün özellikleri, fiyatı ve teslimat bilgisi siparişten önce paylaşılır."] }]),
  modeller: page("modeller", "Koleksiyonlar", "Luniva Modelleri", "Bebek doğumu ve en özel ilk günler için hazırlanan kişiye özel hediye alternatifleri.", [{ title: "Hoş Geldin Bebek aranjmanları", body: ["Kuğu, ayıcık ve çiçek detaylarıyla tasarlanan modeller isim ve renk tercihinize göre kişiselleştirilebilir."] }]),
  siparis: page("siparis", "Sipariş rehberi", "Siparişinizi birlikte şekillendirelim", "Hayalinizdeki hediyeyi kısa bilgilerle paylaşın; tasarımı, fiyatı ve teslimat detayını WhatsApp üzerinden netleştirelim.", [{ title: "Modelinizi seçin", body: ["Beğendiğiniz modeli veya ilham görselini bize gönderin."] }, { title: "Detayları paylaşın", body: ["Bebek adı, renk tercihi, özel not ve teslim tarihini birlikte belirleyelim."] }]),
} satisfies Record<string, InfoPageContent>;
export type InfoPageSlug = keyof typeof infoPages;
