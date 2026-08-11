export const siteName = "Luniva Baby & Flowers";
export const contactEmail = "lunivababyflowers@gmail.com";
export const mailtoHref = `mailto:${contactEmail}`;
export const instagramUsername = "lunivababyflowers";
export const instagramHref = `https://www.instagram.com/${instagramUsername}/`;
export const whatsappNumber = "905349581166";
export const whatsappMessage = encodeURIComponent(
  "Merhaba Luniva Baby & Flowers, sipariş vermek istiyorum."
);
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
export const instagramNotice =
  `Instagram hesabımız: @${instagramUsername}`;

export const productCategories = [
  {
    slug: "hos-geldin-bebek-hediyeleri",
    title: "Hoş Geldin Bebek Modelleri",
    shortTitle: "Hoş Geldin Bebek",
    description:
      "Yeni doğan ziyaretleri, hastane odası sunumları ve ilk karşılama anları için çiçekli, isimli ve zarif strafor modeller.",
    image: "/luniva/baby-pink-lantern.png",
  },
  {
    slug: "bebek-buketleri",
    title: "Buketler",
    shortTitle: "Buketler",
    description:
      "Çiçek buketi formunda hazırlanacak bebek hediyeleri için ayrılan yeni kategori.",
    image: "/luniva/family-gift.png",
    emptyLabel: "Bu kategoriye buket modelleri yakında eklenecek.",
  },
  {
    slug: "isme-ozel-tasarimlar",
    title: "İsme Özel Tasarımlar",
    shortTitle: "İsme Özel",
    description:
      "Kuğu formunda hazırlanan, isim ve renk detayıyla kişiye özel uyarlanabilen zarif bebek tasarımları.",
    image: "/luniva/blue-swan-lake.png",
  },
  {
    slug: "kiz-bebek-modelleri",
    title: "Kız Bebek Tasarımları",
    shortTitle: "Kız Bebek",
    description:
      "Pembe, lila, krem ve zarif çiçek detaylarının öne çıktığı kız bebek hediyeleri.",
    image: "/luniva/pink-bear-strafor.png",
  },
  {
    slug: "erkek-bebek-modelleri",
    title: "Erkek Bebek Tasarımları",
    shortTitle: "Erkek Bebek",
    description:
      "Mavi, beyaz, sarı ve doğal tonlarla hazırlanan erkek bebek aranjmanları.",
    image: "/luniva/blue-yellow-swan.png",
  },
  {
    slug: "hediyelik-ve-ozel-gun",
    title: "Hediyelik & Özel Gün",
    shortTitle: "Hediyelik & Özel Gün",
    description:
      "Konya hatırası, özel gün objeleri ve elde verilebilecek dekoratif hediye seçenekleri.",
    image: "/luniva/konya-sema-crescent.png",
  },
  {
    slug: "ahsap-modeller",
    title: "Ah\u015fap Modeller",
    shortTitle: "Ah\u015fap Modeller",
    description: "Ah\u015fab\u0131n s\u0131cak dokusuyla haz\u0131rlanacak, do\u011fal ve \u00f6zel bebek hediyesi tasar\u0131mlar\u0131.",
    image: "/luniva/family-gift.png",
    emptyLabel: "Ah\u015fap model koleksiyonumuz yak\u0131nda burada olacak.",
  },
] as const;

export type ProductCategorySlug = (typeof productCategories)[number]["slug"];

export type ProductItem = {
  title: string;
  summary: string;
  image: string;
  categories: ProductCategorySlug[];
  tags: string[];
  dimensions?: string;
  thickness?: string;
};

export const productItems: ProductItem[] = [
  {
    title: "Pembe biberon",
    summary:
      "İnci detaylı, pembe kurdeleli ve minik bebek figürlü strafor hediye modeli.",
    image: "/luniva/welcome-pink-basket.jpeg",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Biberon", "Pembe", "İnci detay"],
    dimensions: "16,5 × 33 cm",
    thickness: "9 cm",
  },
  {
    title: "Ay yıldızlı mavi bebek modeli",
    summary:
      "Ay formu, mavi yıldızlar, ayıcık ve papatya detaylarıyla erkek bebek için sade bir hoş geldin modeli.",
    image: "/luniva/generated-moon-stars-blue.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
    ],
    tags: ["Ay formu", "Mavi", "Strafor model"],
  },
  {
    title: "Pembe balon sepet aranjmanı",
    summary:
      "Sıcak hava balonu formunda, pembe kurdeleli ve ayıcıklı gösterişli bebek hediyesi.",
    image: "/luniva/generated-hot-air-balloon-pink.png",
    categories: ["hos-geldin-bebek-hediyeleri", "kiz-bebek-modelleri"],
    tags: ["Balon sepet", "Pembe", "Çiçekli"],
  },
  {
    title: "Pembe bebek arabası modeli",
    summary:
      "Bebek arabası formu, inci süslemeler ve pembe ayıcıkla hazırlanan zarif kız bebek tasarımı.",
    image: "/luniva/generated-pram-pink.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Bebek arabası", "Pembe", "İnci detay"],
  },
  {
    title: "Mavi gemi hoş geldin bebek",
    summary:
      "Gemi formu, denizci ayıcık, deniz feneri ve mavi papatya detaylarıyla hazırlanan erkek bebek modeli.",
    image: "/luniva/welcome-blue-boat.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
    ],
    tags: ["Gemi formu", "Mavi", "Denizci konsept"],
  },
  {
    title: "Pembe bulut ayıcıklı model",
    summary:
      "Bulut formu, pembe yıldız, ayıcık ve pastel çiçeklerle hazırlanan yumuşak kız bebek tasarımı.",
    image: "/luniva/welcome-pink-cloud.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Bulut formu", "Pembe", "Ayıcıklı"],
  },
  {
    title: "Pembe kulübe hoş geldin bebek",
    summary:
      "Çitli minik ev formu, pembe çatı, ayıcık ve çiçeklerle hazırlanan dekoratif bebek hediyesi.",
    image: "/luniva/welcome-pink-cottage.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Kulübe formu", "Pembe", "Çiçekli"],
  },
  {
    title: "Pembe biberon sepet modeli",
    summary:
      "Biberon formunda, minik peluşlar ve pembe çiçeklerle dolu sevimli hoş geldin bebek aranjmanı.",
    image: "/luniva/welcome-baby-bottle-pink.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Biberon formu", "Pembe", "Peluş detay"],
  },
  {
    title: "Mavi biberon fener",
    summary:
      "Mavi saplı sepet formu, ayıcık, biberon ve papatya detaylarıyla erkek bebek için sade bir model.",
    image: "/luniva/welcome-blue-basket.jpeg",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
    ],
    tags: ["Biberon fener", "Mavi", "Ayıcıklı"],
    dimensions: "16,5 × 33 cm",
    thickness: "9 cm",
  },
  {
    title: "Krem beşik sepet tasarımı",
    summary:
      "Krem tonlu beşik sepet formu, inci, dantel ve ayıcık detaylarıyla hazırlanan zarif bebek hediyesi.",
    image: "/luniva/welcome-cream-cradle.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
      "erkek-bebek-modelleri",
    ],
    tags: ["Beşik sepet", "Krem", "İnci detay"],
  },
  {
    title: "Sallanan at pembe model",
    summary:
      "Sallanan at formunda, pembe çiçekler ve ayıcık detayıyla hazırlanan özel gün bebek hediyesi.",
    image: "/luniva/generated-rocking-horse-pink.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Sallanan at", "Pembe", "Özel gün"],
  },
  {
    title: "Pembe ayıcık masal konsepti",
    summary:
      "Ayıcık formu, çiçek detayları ve yumuşak pembe tonlarıyla gösterişli karşılama modeli.",
    image: "/luniva/pink-bear-strafor.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
    ],
    tags: ["Strafor model", "Ayıcık", "Pembe konsept"],
    dimensions: "33 × 34 cm",
    thickness: "9 cm",
  },
  {
    title: "Mavi kuğulu göl konsepti",
    summary:
      "Kuğu formu, mavi ayıcık ve beyaz çiçeklerle hazırlanan erkek bebek sunumu.",
    image: "/luniva/blue-swan-lake.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
      "isme-ozel-tasarimlar",
    ],
    tags: ["Kuğu", "Mavi", "Strafor model"],
  },
  {
    title: "Lila kuğu oda sunumu",
    summary:
      "Bebek odası atmosferine yakışan, lila çiçekli ve zarif kuğu aranjmanı.",
    image: "/luniva/purple-swan-nursery.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
      "isme-ozel-tasarimlar",
    ],
    tags: ["Lila", "Hastane odası", "Kuğu"],
  },
  {
    title: "Sarı çiçekli mavi kuğu",
    summary:
      "Mavi fiyonklu ayıcık ve sarı orkide tonlarıyla daha canlı erkek bebek modeli.",
    image: "/luniva/blue-yellow-swan.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
      "isme-ozel-tasarimlar",
    ],
    tags: ["Mavi", "Sarı çiçek", "Strafor model"],
  },
  {
    title: "Aileye hediye sunumu",
    summary:
      "Elde taşındığında dolu ve özenli görünen, ziyaret hediyesi olarak düşünülebilecek aranjman.",
    image: "/luniva/family-gift.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
    ],
    tags: ["Hediyelik", "Ziyaret hediyesi", "Fotoğraf sunumu"],
  },
  {
    title: "Konya Hatırası Mevlana çerçeve",
    summary:
      "Ay formu ve Mevlana temalı çerçevesiyle özel gün ve hatıra hediyesi.",
    image: "/luniva/konya-mevlana-frame.png",
    categories: ["hediyelik-ve-ozel-gun"],
    tags: ["Konya hatırası", "Mevlana", "Dekoratif"],
  },
  {
    title: "Konya sema ay modeli",
    summary:
      "Sema ve Konya silüetiyle hazırlanan, vitrin ya da özel gün hediyesi olarak kullanılabilecek model.",
    image: "/luniva/konya-sema-crescent.png",
    categories: ["hediyelik-ve-ozel-gun"],
    tags: ["Konya", "Sema", "Hatıra"],
  },
  {
    title: "Mevlana öğütlü hatıra",
    summary:
      "Öğüt panosu ve ay formunu birleştiren daha sade, anlamlı hediyelik tasarım.",
    image: "/luniva/konya-advice-frame.png",
    categories: ["hediyelik-ve-ozel-gun"],
    tags: ["Özel gün", "Hatıra", "Dekoratif"],
  },
  {
    title: "Pembe panda \u00e7i\u00e7ek aranjman\u0131",
    summary: "Pembe detayl\u0131 panda formu ve renkli \u00e7i\u00e7eklerle haz\u0131rlanan g\u00f6steri\u015fli bebek hediyesi.",
    image: "/luniva/welcome-pink-panda.jpeg",
    categories: ["hos-geldin-bebek-hediyeleri", "kiz-bebek-modelleri"],
    tags: ["Panda", "Pembe", "\u00c7i\u00e7ekli"],
    dimensions: "33 \u00d7 34 cm",
    thickness: "9 cm",
  },
  {
    title: "Mavi ay\u0131c\u0131k \u00e7i\u00e7ek aranjman\u0131",
    summary: "Mavi ay\u0131c\u0131k formu, lila \u00e7i\u00e7ekler ve inci detaylarla haz\u0131rlanan erkek bebek hediyesi.",
    image: "/luniva/welcome-blue-bear.jpeg",
    categories: ["hos-geldin-bebek-hediyeleri", "erkek-bebek-modelleri"],
    tags: ["Ay\u0131c\u0131k", "Mavi", "\u00c7i\u00e7ekli"],
    dimensions: "33 \u00d7 34 cm",
    thickness: "9 cm",
  },
];

export const productCategoryMap = Object.fromEntries(
  productCategories.map((category) => [category.slug, category])
) as Record<ProductCategorySlug, (typeof productCategories)[number]>;

export function getProductsByCategory(slug: ProductCategorySlug) {
  return productItems.filter((item) => item.categories.includes(slug));
}

export const footerColumns = [
  {
    title: "Kategoriler",
    links: productCategories.map((category) => ({
      label: category.shortTitle,
      href: `/${category.slug}`,
    })),
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Sık Sorulan Sorular", href: "/sik-sorulan-sorular" },
      { label: "Instagram", href: instagramHref },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "Bilgilendirme",
    links: [
      { label: "Sipariş ve Teslimat", href: "/siparis-ve-teslimat" },
      { label: "İptal / İade Bilgileri", href: "/iptal-iade-bilgileri" },
      { label: "Gizlilik ve KVKK", href: "/gizlilik-kvkk" },
      {
        label: "Mesafeli Satış Bilgilendirmesi",
        href: "/mesafeli-satis-bilgilendirmesi",
      },
    ],
  },
] as const;

export const trustItems = [
  {
    title: "El emeği tasarım şıklığı",
    text: "Her model renk, figür ve çiçek detaylarıyla özel bir hediye hissi verecek şekilde hazırlanır.",
  },
  {
    title: "Fotoğrafta dikkat çeken sunum",
    text: "Hastane odası, doğum ziyareti ve özel gün anılarında zarif duran gösterişli aranjmanlar öne çıkar.",
  },
  {
    title: "Beğendiğini hemen sor",
    text: "Müşteri modeli seçer, WhatsApp'tan renk, isim ve teslimat detaylarını hızlıca konuşur.",
  },
] as const;

export type InfoPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  notice?: string;
  sections: { title: string; body: string[] }[];
};

const page = (
  slug: string,
  eyebrow: string,
  title: string,
  intro: string,
  sections: { title: string; body: string[] }[],
  notice?: string
): InfoPageContent => ({ slug, eyebrow, title, intro, sections, notice });

export const infoPages = {
  hakkimizda: page(
    "hakkimizda", "Kurumsal", "Luniva Baby & Flowers Hakk\u0131nda",
    "Luniva Baby & Flowers, yeni bir hayata merhaba denilen en \u00f6zel g\u00fcnlerde ailelerin heyecan\u0131na e\u015flik etmek i\u00e7in do\u011fdu. Bebek do\u011fumu, hastane kar\u015f\u0131lamas\u0131 ve ilk ziyaretler i\u00e7in \u00e7i\u00e7ek aranjmanlar\u0131ndan isme \u00f6zel hediyelere, kap\u0131 s\u00fcslerinden zarif buketlere kadar pek \u00e7ok tasar\u0131m haz\u0131rl\u0131yoruz.",
    [
      { title: "\u0130ki - \u00fc\u00e7 y\u0131ll\u0131k eme\u011fin do\u011fu\u015fu", body: ["Luniva'n\u0131n hik\u00e2yesi, yakla\u015f\u0131k iki - \u00fc\u00e7 y\u0131ld\u0131r sevgiyle geli\u015ftirilen el eme\u011fi tasar\u0131m tutkusundan do\u011fdu. Her sipari\u015fte daha iyi bir detay, daha zarif bir renk uyumu ve daha mutlu bir hat\u0131ra olu\u015fturmak i\u00e7in kendimizi geli\u015ftiriyoruz.", "Bu s\u00fcre\u00e7te bebek hediyesinin yaln\u0131zca g\u00fczel bir nesne de\u011fil; aileye kalan s\u0131cac\u0131k bir an\u0131 oldu\u011funa inand\u0131k."] },
      { title: "Neden el yap\u0131m\u0131?", body: ["El yap\u0131m\u0131 tasar\u0131mlar isme, renge, mevsime ve sizin hayalinize g\u00f6re \u015fekillenir. Seri \u00fcretimde kaybolan o \u00f6zel his; her \u00e7i\u00e7e\u011fin yerle\u015ftirili\u015finde, her kurdelenin se\u00e7iminde ve her isim detay\u0131nda yeniden ortaya \u00e7\u0131kar.", "Her aranjman\u0131 size ait bir hik\u00e2ye gibi ele al\u0131yor, foto\u011fraflara ve hat\u0131ralara yak\u0131\u015fan bir b\u00fct\u00fcn olu\u015fturuyoruz."] },
      { title: "Kim haz\u0131rl\u0131yor?", body: ["Sipari\u015fleriniz, her ayr\u0131nt\u0131ya son derece emek veren de\u011ferli eller taraf\u0131ndan tek tek haz\u0131rlan\u0131r. Tasar\u0131m\u0131n\u0131z; se\u00e7ti\u011finiz renklerden bebe\u011fin ismine kadar dikkatle kontrol edilir.", "Amac\u0131m\u0131z, hediyeniz ula\u015ft\u0131\u011f\u0131nda hem sizin hem de sevdiklerinizin y\u00fcz\u00fcnde samimi bir tebess\u00fcm olu\u015fturmakt\u0131r."] },
      { title: "Neler haz\u0131rl\u0131yoruz?", body: ["Ho\u015f Geldin Bebek aranjmanlar\u0131, isme \u00f6zel kap\u0131 s\u00fcsleri, \u00e7i\u00e7ekli hediye kutular\u0131, hastane odas\u0131 s\u00fcsleri, yeni do\u011fan buketleri ve minik kutlamalara yak\u0131\u015fan ki\u015fiselle\u015ftirilmi\u015f hediyeler haz\u0131rl\u0131yoruz."] },
    ]
  ),
  "sik-sorulan-sorular": page(
    "sik-sorulan-sorular",
    "Kurumsal",
    "S\u0131k Sorulan Sorular",
    "Sipari\u015f vermeden \u00f6nce merak edebilece\u011finiz konular i\u00e7in k\u0131sa bilgiler.",
    [
      { title: "Sipari\u015f nas\u0131l verilir?", body: ["Be\u011fendi\u011finiz modeli WhatsApp \u00fczerinden g\u00f6nderin; isim, renk ve teslim g\u00fcn\u00fcn\u00fc birlikte netle\u015ftirelim."] },
      { title: "\u00dcr\u00fcnler ki\u015fiye \u00f6zel mi haz\u0131rlan\u0131r?", body: ["Evet. \u0130sim yaz\u0131s\u0131, renk paleti, fig\u00fcr ve \u00e7i\u00e7ek se\u00e7imi sipari\u015f konu\u015fmas\u0131nda birlikte belirlenir."] },
      { title: "Haz\u0131rlanma s\u00fcresi ne kadar?", body: ["Sipari\u015fleriniz ortalama 3 g\u00fcn i\u00e7inde sevgiyle haz\u0131rlan\u0131r."] },
      { title: "Hangi kargo firmalar\u0131 ile \u00e7al\u0131\u015f\u0131yorsunuz?", body: ["Yurti\u00e7i Kargo ve Hepsijet ile \u00e7al\u0131\u015f\u0131yoruz."] },
    ]
  ),
  instagram: page(
    "instagram", "Sosyal medya", "Instagram",
    "Yeni modeller, at\u00f6lye detaylar\u0131 ve teslimata haz\u0131r tasar\u0131mlar\u0131 @lunivababyflowers hesab\u0131m\u0131zdan payla\u015faca\u011f\u0131z.",
    [
      { title: "Instagram hesab\u0131m\u0131z", body: ["@lunivababyflowers"] },
      { title: "Yeni modeller", body: ["Yeni do\u011fan hediyeleri, mevsime uygun renk paletleri ve isme \u00f6zel tasar\u0131mlar\u0131 takip edebilirsiniz."] },
      { title: "At\u00f6lyeden kareler", body: ["\u00c7i\u00e7ek se\u00e7imi, kurdele detaylar\u0131 ve haz\u0131rl\u0131k s\u00fcrecinden k\u0131sa payla\u015f\u0131mlar yer alacakt\u0131r."] },
      { title: "G\u00fcncel duyurular", body: ["Yo\u011funluk d\u00f6nemleri, teslimat plan\u0131 ve \u00f6zel g\u00fcn koleksiyonlar\u0131 bu kanaldan duyurulacakt\u0131r."] },
    ]
  ),
  iletisim: page(
    "iletisim",
    "\u0130leti\u015fim",
    "\u0130leti\u015fim",
    "Sipari\u015f ve bilgi almak i\u00e7in en h\u0131zl\u0131 ileti\u015fim kanal\u0131m\u0131z WhatsApp't\u0131r.",
    [
      { title: "Telefon", body: ["0534 958 11 66"] },
      { title: "E-posta", body: ["lunivababyflowers@gmail.com"] },
      { title: "Instagram", body: ["@lunivababyflowers"] },
      { title: "Adres", body: ["Melik\u015fah Mahallesi H\u00fcy\u00fckl\u00fc Sokak No: 19/B, Meram / Konya"] },
      { title: "WhatsApp sipari\u015f", body: ["Be\u011fendi\u011finiz modeli bize g\u00f6ndererek sipari\u015f konu\u015fmas\u0131n\u0131 ba\u015flatabilirsiniz."] },
    ]
  ),
  "siparis-ve-teslimat": page(
    "siparis-ve-teslimat", "Bilgilendirme", "Sipari\u015f ve Teslimat",
    "Sipari\u015finiz, se\u00e7ti\u011finiz modelin detaylar\u0131 netle\u015ftirildikten sonra \u00f6zenle planlan\u0131r.",
    [
      { title: "Sipari\u015f ak\u0131\u015f\u0131", body: ["Model, isim, renk, teslim tarihi ve teslimat \u015fekli WhatsApp \u00fczerinden yaz\u0131l\u0131 olarak netle\u015ftirilir.", "Onay\u0131n\u0131z al\u0131nd\u0131ktan sonra tasar\u0131m s\u0131ras\u0131 planlamaya dahil edilir."] },
      { title: "Haz\u0131rlanma s\u00fcresi", body: ["Tasar\u0131mlar\u0131m\u0131z ortalama 3 g\u00fcn i\u00e7inde haz\u0131rlan\u0131r. Yo\u011funluk, malzeme durumu ve ki\u015fiye \u00f6zel detaylara g\u00f6re s\u00fcre de\u011fi\u015febilir."] },
      { title: "Kargo ve teslimat", body: ["Yurti\u00e7i Kargo ve Hepsijet ile \u00e7al\u0131\u015f\u0131yoruz. Teslimat bilgileri sipari\u015f onay\u0131nda sizinle payla\u015f\u0131l\u0131r."] },
      { title: "Teslimat g\u00fcn\u00fc", body: ["\u00d6zel bir tarih i\u00e7in sipari\u015f vermek isterseniz, planlamay\u0131 erken yapabilmemiz i\u00e7in bizimle \u00f6nceden ileti\u015fime ge\u00e7menizi \u00f6neririz."] },
    ]
  ),
  "iptal-iade-bilgileri": page(
    "iptal-iade-bilgileri", "Bilgilendirme", "\u0130ptal / \u0130ade Bilgileri",
    "Ki\u015fiye \u00f6zel tasar\u0131mlar\u0131n her biri sipari\u015finize \u00f6zel haz\u0131rland\u0131\u011f\u0131 i\u00e7in, s\u00fcre\u00e7le ilgili bilgileri sipari\u015f \u00f6ncesinde a\u00e7\u0131k\u00e7a payla\u015f\u0131yoruz.",
    [
      { title: "Sipari\u015f iptali", body: ["\u00dcretime ba\u015flanmadan \u00f6nce de\u011fi\u015fiklik veya iptal talebinizi WhatsApp \u00fczerinden iletebilirsiniz."] },
      { title: "Ki\u015fiye \u00f6zel \u00fcr\u00fcnler", body: ["\u0130sim, renk, fig\u00fcr veya \u00f6zel notla ki\u015fiselle\u015ftirilen \u00fcr\u00fcnler, size \u00f6zel haz\u0131rland\u0131\u011f\u0131 i\u00e7in iade kapsam\u0131nda farkl\u0131l\u0131k g\u00f6sterebilir."] },
      { title: "Hasar bildirimi", body: ["Teslimatta fark etti\u011finiz bir sorun olursa, paketin ve \u00fcr\u00fcn\u00fcn foto\u011fraflar\u0131yla birlikte en k\u0131sa s\u00fcrede bize ula\u015fman\u0131z\u0131 rica ederiz."] },
      { title: "Birlikte \u00e7\u00f6z\u00fcm", body: ["Her talebi dikkatle de\u011ferlendiriyor; m\u00fcmk\u00fcn olan en iyi \u00e7\u00f6z\u00fcm i\u00e7in sizinle ileti\u015fimde kal\u0131yoruz."] },
    ]
  ),
  "gizlilik-kvkk": page(
    "gizlilik-kvkk", "Bilgilendirme", "Gizlilik ve KVKK",
    "Sipari\u015f s\u00fcrecinde payla\u015ft\u0131\u011f\u0131n\u0131z bilgiler, yaln\u0131zca sizinle ileti\u015fim kurmak ve sipari\u015finizi haz\u0131rlamak i\u00e7in kullan\u0131l\u0131r.",
    [
      { title: "Hangi bilgiler kullan\u0131l\u0131r?", body: ["Ad, ileti\u015fim bilgisi, teslimat adresi ve tasar\u0131m tercihleri; sipari\u015fin haz\u0131rlanmas\u0131 ve teslimat\u0131 i\u00e7in gerekli oldu\u011fu \u00f6l\u00e7\u00fcde kullan\u0131l\u0131r."] },
      { title: "Bilgilerinizin korunmas\u0131", body: ["Sipari\u015f detaylar\u0131n\u0131z gizli tutulur ve hizmetin gerektirdi\u011fi durumlar d\u0131\u015f\u0131nda \u00fc\u00e7\u00fcnc\u00fc ki\u015filerle payla\u015f\u0131lmaz."] },
      { title: "\u0130leti\u015fim ve talepler", body: ["Bilgilerinizle ilgili soru, d\u00fczeltme veya silme talebiniz i\u00e7in WhatsApp ya da e-posta \u00fczerinden bizimle ileti\u015fime ge\u00e7ebilirsiniz."] },
    ]
  ),
  "mesafeli-satis-bilgilendirmesi": page(
    "mesafeli-satis-bilgilendirmesi", "Bilgilendirme", "Mesafeli Sat\u0131\u015f Bilgilendirmesi",
    "Uzaktan verilen sipari\u015flerde tasar\u0131m\u0131n \u00f6zellikleri, fiyat\u0131 ve teslimata dair bilgiler sipari\u015f \u00f6ncesinde a\u00e7\u0131k\u00e7a payla\u015f\u0131l\u0131r.",
    [
      { title: "\u00d6n bilgilendirme", body: ["\u00dcr\u00fcn\u00fcn modeli, ki\u015fiselle\u015ftirme detaylar\u0131, fiyat\u0131 ve tahmini haz\u0131rlanma s\u00fcresi onay \u00f6ncesinde sizinle payla\u015f\u0131l\u0131r."] },
      { title: "Sipari\u015f onay\u0131", body: ["Tasla\u011f\u0131n\u0131z ve tercih etti\u011finiz detaylar netle\u015ftirildikten sonra sipari\u015f kayda al\u0131n\u0131r."] },
      { title: "Fiyat ve teslimat", body: ["Fiyat bilgisi; model, ki\u015fiye \u00f6zel uygulamalar ve teslimat tercihlerine g\u00f6re belirlenir. Kargo ve teslimat bilgileri sipari\u015f s\u00fcrecinde ayr\u0131ca bildirilir."] },
      { title: "Destek", body: ["Sipari\u015f \u00f6ncesinde veya sonras\u0131nda merak etti\u011finiz her konuda WhatsApp \u00fczerinden bize ula\u015fabilirsiniz."] },
    ]
  ),
  modeller: page(
    "modeller",
    "Koleksiyonlar",
    "Luniva Modelleri",
    "Bebek doğumu ve en özel ilk günler için hazırlanan kişiye özel hediye alternatifleri.",
    [
      {
        title: "Kategori seçerek ilerleyin",
        body: [
          "Ana sayfadaki kategori kutularından seçim yaparak yalnızca ilgili modelleri görebilirsiniz.",
        ],
      },
    ]
  ),
  siparis: page(
    "siparis",
    "Sipariş rehberi",
    "Siparişinizi birlikte şekillendirelim",
    "Hayalinizdeki hediyeyi kısa bilgilerle paylaşın; tasarımı, fiyatı ve teslimat detayını WhatsApp üzerinden netleştirelim.",
    [
      {
        title: "Modelinizi seçin",
        body: ["Beğendiğiniz modeli veya ilham görselini bize gönderin."],
      },
      {
        title: "Detayları paylaşın",
        body: [
          "Bebek adı, renk tercihi, özel not ve teslim tarihini birlikte belirleyelim.",
        ],
      },
    ]
  ),
} satisfies Record<string, InfoPageContent>;

export type InfoPageSlug = keyof typeof infoPages;
