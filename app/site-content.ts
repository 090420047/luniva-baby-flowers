export const siteName = "Luniva Baby & Flowers";
export const whatsappNumber = "905555555555";
export const whatsappMessage = encodeURIComponent(
  "Merhaba Luniva Baby & Flowers, sipariş vermek istiyorum."
);
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
export const instagramNotice =
  "Instagram hesabı açıldığında kullanıcı adı buraya eklenecek.";

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
      "Bebek adı, renk paleti, figür ve not detaylarıyla kişiselleştirilebilen özel modeller.",
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
] as const;

export type ProductCategorySlug = (typeof productCategories)[number]["slug"];

export type ProductItem = {
  title: string;
  summary: string;
  image: string;
  categories: ProductCategorySlug[];
  tags: string[];
};

export const productItems: ProductItem[] = [
  {
    title: "Pembe fener hoş geldin bebek",
    summary:
      "İnci detaylı, pembe kurdeleli ve minik bebek figürlü strafor hediye modeli.",
    image: "/luniva/baby-pink-lantern.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "kiz-bebek-modelleri",
      "isme-ozel-tasarimlar",
    ],
    tags: ["Strafor model", "Pembe", "İsme özel"],
  },
  {
    title: "Ay yıldızlı mavi bebek modeli",
    summary:
      "Ay formu, mavi yıldızlar, ayıcık ve papatya detaylarıyla erkek bebek için sade bir hoş geldin modeli.",
    image: "/luniva/generated-moon-stars-blue.png",
    categories: [
      "hos-geldin-bebek-hediyeleri",
      "erkek-bebek-modelleri",
      "isme-ozel-tasarimlar",
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
    title: "Sallanan at pembe model",
    summary:
      "Sallanan at formunda, pembe çiçekler ve ayıcık detayıyla hazırlanan özel gün bebek hediyesi.",
    image: "/luniva/generated-rocking-horse-pink.png",
    categories: ["kiz-bebek-modelleri", "hediyelik-ve-ozel-gun"],
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
    tags: ["Kuğu", "Mavi", "İsim yazısı"],
  },
  {
    title: "Lila kuğu oda sunumu",
    summary:
      "Bebek odası atmosferine yakışan, lila çiçekli ve isme özel kuğu aranjmanı.",
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
    ],
    tags: ["Mavi", "Sarı çiçek", "Strafor model"],
  },
  {
    title: "Aileye hediye sunumu",
    summary:
      "Elde taşındığında dolu ve özenli görünen, ziyaret hediyesi olarak düşünülebilecek aranjman.",
    image: "/luniva/family-gift.png",
    categories: ["hediyelik-ve-ozel-gun"],
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
      { label: "Instagram", href: "/instagram" },
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
    "Sık Sorulan Sorular",
    "Sipariş vermeden önce merak edebileceğiniz konular için kısa bilgiler.",
    [
      {
        title: "Sipariş nasıl verilir?",
        body: [
          "Beğendiğiniz modeli WhatsApp üzerinden gönderin; isim, renk ve teslim gününü birlikte netleştirelim.",
        ],
      },
      {
        title: "Ürünler kişiye özel mi hazırlanır?",
        body: [
          "Evet. İsim yazısı, renk paleti, figür ve çiçek seçimi sipariş konuşmasında birlikte belirlenir.",
        ],
      },
    ]
  ),
  instagram: page(
    "instagram",
    "Sosyal medya",
    "Instagram",
    "Instagram hesabı açıldığında ürün vitrini ve güncel paylaşımlar bu sayfadan yönlendirilecektir.",
    [
      {
        title: "Yakında",
        body: [
          "Hazırlık süreci, teslimat sunumları ve kampanya görselleri aynı marka diliyle paylaşılacaktır.",
        ],
      },
    ]
  ),
  iletisim: page(
    "iletisim",
    "İletişim",
    "İletişim",
    "Sipariş ve bilgi almak için en hızlı iletişim kanalımız WhatsApp'tır.",
    [
      {
        title: "WhatsApp sipariş",
        body: [
          "Beğendiğiniz modeli bize göndererek sipariş konuşmasını başlatabilirsiniz.",
        ],
      },
    ]
  ),
  "siparis-ve-teslimat": page(
    "siparis-ve-teslimat",
    "Bilgilendirme",
    "Sipariş ve Teslimat",
    "Sipariş ve teslimat sürecine ilişkin temel bilgiler.",
    [
      {
        title: "Sipariş akışı",
        body: [
          "Model, isim, renk, teslim tarihi ve teslimat şekli yazılı olarak netleştirilir.",
        ],
      },
    ]
  ),
  "iptal-iade-bilgileri": page(
    "iptal-iade-bilgileri",
    "Bilgilendirme",
    "İptal / İade Bilgileri",
    "Kişiye özel ürünlerde iptal ve iade koşulları sipariş öncesinde açıkça paylaşılır.",
    [
      {
        title: "Sipariş iptali",
        body: [
          "Üretime başlanmadan önce değişiklik veya iptal talebinizi WhatsApp üzerinden iletebilirsiniz.",
        ],
      },
    ]
  ),
  "gizlilik-kvkk": page(
    "gizlilik-kvkk",
    "Bilgilendirme",
    "Gizlilik ve KVKK",
    "Sipariş sürecinde alınan bilgiler yalnızca iletişim ve teslimat amacıyla kullanılır.",
    [
      {
        title: "Bilgilerin kullanımı",
        body: [
          "Kişisel bilgileriniz siparişin hazırlanması ve teslimatın yapılması için kullanılır.",
        ],
      },
    ]
  ),
  "mesafeli-satis-bilgilendirmesi": page(
    "mesafeli-satis-bilgilendirmesi",
    "Bilgilendirme",
    "Mesafeli Satış Bilgilendirmesi",
    "Uzaktan alınan siparişlerde müşteriye satış öncesinde açık bilgi verilir.",
    [
      {
        title: "Ön bilgilendirme",
        body: [
          "Ürünün özellikleri, fiyatı ve teslimat bilgisi siparişten önce paylaşılır.",
        ],
      },
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
