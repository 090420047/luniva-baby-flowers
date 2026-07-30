export const siteName = "Luniva Baby & Flowers";

export const whatsappNumber = "905555555555";
export const whatsappMessage = encodeURIComponent(
  "Merhaba Luniva Baby & Flowers, sipariş vermek istiyorum."
);
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export const instagramNotice =
  "Instagram hesabı açıldığında kullanıcı adı buraya eklenecek.";

export const footerColumns = [
  {
    title: "Ürün Kategorileri",
    links: [
      {
        label: "Hoşgeldin Bebek Aranjmanları",
        href: "/hosgeldin-bebek-aranjmanlari",
      },
      {
        label: "İsme Özel Bebek Kapı Süsleri",
        href: "/isme-ozel-bebek-kapi-susleri",
      },
      { label: "Bebek Hediyelikler", href: "/bebek-hediyelikler" },
      {
        label: "Çiçekli Bebek Hediyeleri",
        href: "/cicekli-bebek-hediyeleri",
      },
      { label: "Hastane Odası Süsleri", href: "/hastane-odasi-susleri" },
    ],
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
    title: "Sipariş öncesi net bilgi",
    text: "Model, renk, isim, fiyat, hazırlık süresi ve teslimat detayı WhatsApp üzerinden yazılı olarak netleştirilir.",
  },
  {
    title: "Kişiye özel hazırlık",
    text: "Bebek adı ve renk seçimi gibi kişisel detaylar onaylandıktan sonra üretime başlanır.",
  },
  {
    title: "Gizlilik ve KVKK",
    text: "Ad, telefon, adres ve sipariş notları yalnızca sipariş iletişimi ve teslimat amacıyla kullanılacak şekilde planlanır.",
  },
  {
    title: "Resmi metinler hazır",
    text: "Canlı yayın öncesinde işletme bilgileriyle tamamlanacak iade, teslimat, KVKK ve mesafeli satış sayfaları hazırlandı.",
  },
] as const;

export type InfoPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  notice?: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export const infoPages = {
  "hosgeldin-bebek-aranjmanlari": {
    slug: "hosgeldin-bebek-aranjmanlari",
    eyebrow: "Ürün kategorisi",
    title: "Hoşgeldin Bebek Aranjmanları",
    intro:
      "Yeni doğan ziyaretleri ve bebek karşılama hazırlıkları için kuğu formu, çiçek detayları ve bebek temalı süslerle hazırlanan hediye modelleridir.",
    sections: [
      {
        title: "Nasıl kişiselleştirilir?",
        body: [
          "Bebek adı, renk tonu, çiçek seçimi ve varsa özel not WhatsApp görüşmesinde netleştirilir.",
          "Hazırlık başlamadan önce model, yazı ve teslimat bilgileri müşteriyle teyit edilir.",
        ],
      },
      {
        title: "Sipariş notu",
        body: [
          "Her ürün el emeğiyle hazırlandığı için küçük renk ve malzeme farklılıkları olabilir.",
          "Güncel fiyat ve teslim süresi sipariş öncesinde ayrıca paylaşılır.",
        ],
      },
    ],
  },
  "isme-ozel-bebek-kapi-susleri": {
    slug: "isme-ozel-bebek-kapi-susleri",
    eyebrow: "Ürün kategorisi",
    title: "İsme Özel Bebek Kapı Süsleri",
    intro:
      "Bebek adı, renk paleti ve tema seçimine göre hazırlanacak kapı süsü tasarımlarıdır.",
    sections: [
      {
        title: "Kullanım alanı",
        body: [
          "Hastane odası, bebek odası kapısı veya karşılama alanı için tercih edilebilir.",
          "İsim yazısı ve renk detayları sipariş sırasında birlikte seçilir.",
        ],
      },
      {
        title: "Hazırlık bilgisi",
        body: [
          "Kişiye özel üretim olduğu için onaylanan bilgiler üretim öncesinde dikkatle kontrol edilir.",
          "Teslim tarihi yoğunluk ve malzeme durumuna göre WhatsApp üzerinden bildirilir.",
        ],
      },
    ],
  },
  "bebek-hediyelikler": {
    slug: "bebek-hediyelikler",
    eyebrow: "Ürün kategorisi",
    title: "Bebek Hediyelikler",
    intro:
      "Yeni doğan ziyareti, aileye kutlama hediyesi veya hastane odası sunumu için hazırlanabilecek bebek hediyelikleri.",
    sections: [
      {
        title: "Hediye seçimi",
        body: [
          "Mavi, lila, pembe ve krem tonlarda hazırlanabilecek seçenekler değerlendirilebilir.",
          "Ürün boyutu, yazı detayı ve çiçek yoğunluğu siparişe göre planlanır.",
        ],
      },
      {
        title: "Sipariş akışı",
        body: [
          "Beğenilen model WhatsApp üzerinden gönderilir.",
          "Fiyat, teslim şekli ve hazırlık süresi onaylandıktan sonra sipariş ilerler.",
        ],
      },
    ],
  },
  "cicekli-bebek-hediyeleri": {
    slug: "cicekli-bebek-hediyeleri",
    eyebrow: "Ürün kategorisi",
    title: "Çiçekli Bebek Hediyeleri",
    intro:
      "Yumuşak renkli çiçekler, bebek figürleri ve isim yazısı ile daha zarif bir sunum isteyenler için hazırlanır.",
    sections: [
      {
        title: "Tasarım dili",
        body: [
          "Lila, pembe, mavi, krem ve altın detaylar birlikte kullanılabilir.",
          "Ürün fotoğrafa yakışacak şekilde dengeli ve temiz bir kompozisyonla hazırlanır.",
        ],
      },
      {
        title: "Bilgilendirme",
        body: [
          "Çiçek ve aksesuar seçenekleri stok durumuna göre değişebilir.",
          "Benzer görünüm korunarak en yakın malzeme seçimi müşteriyle paylaşılır.",
        ],
      },
    ],
  },
  "hastane-odasi-susleri": {
    slug: "hastane-odasi-susleri",
    eyebrow: "Ürün kategorisi",
    title: "Hastane Odası Süsleri",
    intro:
      "Doğum odası, ziyaret masası veya karşılama alanında kullanılabilecek bebek temalı dekoratif süsler.",
    sections: [
      {
        title: "Sunum önerisi",
        body: [
          "Oda konseptine uygun renk seçimi yapılabilir.",
          "Fotoğraf çekiminde temiz ve düzenli görünmesi için sade tonlar önerilir.",
        ],
      },
      {
        title: "Teslimat",
        body: [
          "Hastane teslimatı planlanıyorsa gün, saat ve adres bilgisi önceden netleşmelidir.",
          "Şehir ve teslimat yöntemi canlı yayın öncesinde kesin bilgilerle güncellenecektir.",
        ],
      },
    ],
  },
  hakkimizda: {
    slug: "hakkimizda",
    eyebrow: "Kurumsal",
    title: "Hakkımızda",
    intro:
      "Luniva Baby & Flowers, bebek karşılama hediyelerini yumuşak renkler, çiçek detayları ve kişiye özel dokunuşlarla hazırlamak için planlanan bir markadır.",
    sections: [
      {
        title: "Marka yaklaşımı",
        body: [
          "Amaç, yeni doğan hediyelerini hem zarif hem de fotoğrafa yakışan bir sunumla hazırlamaktır.",
          "Her siparişte isim, renk ve teslimat detayları müşteriyle birlikte netleştirilir.",
        ],
      },
      {
        title: "Canlı yayın öncesi",
        body: [
          "Resmi işletme adı, adres, vergi bilgisi, domain ve Instagram hesabı netleştiğinde bu sayfa güncellenecektir.",
        ],
      },
    ],
  },
  "sik-sorulan-sorular": {
    slug: "sik-sorulan-sorular",
    eyebrow: "Kurumsal",
    title: "Sık Sorulan Sorular",
    intro:
      "Sipariş vermeden önce müşterinin aklına gelebilecek temel sorular için kısa bilgilendirme alanı.",
    sections: [
      {
        title: "Sipariş nasıl verilir?",
        body: [
          "Beğenilen model WhatsApp üzerinden gönderilir.",
          "İsim, renk, teslim günü ve özel not bilgileri konuşmada netleşir.",
        ],
      },
      {
        title: "Hazırlık süresi nedir?",
        body: [
          "Hazırlık süresi ürün yoğunluğu ve kişiselleştirme detayına göre değişebilir.",
          "Canlı yayın öncesinde ortalama hazırlık süresi net olarak bu sayfaya eklenecektir.",
        ],
      },
      {
        title: "Fiyat nasıl öğrenilir?",
        body: [
          "Fiyat; model, boyut, çiçek yoğunluğu ve teslimat bilgisine göre WhatsApp görüşmesinde paylaşılır.",
        ],
      },
    ],
  },
  instagram: {
    slug: "instagram",
    eyebrow: "Sosyal medya",
    title: "Instagram",
    intro:
      "Instagram hesabı açıldığında ürün vitrini, Reels kapakları ve sponsorlu tanıtım içerikleri bu sayfadan yönlendirilecektir.",
    sections: [
      {
        title: "Planlanan içerikler",
        body: [
          "Ürün vitrini, hazırlık süreci, teslimat sunumları ve kampanya görselleri aynı marka diliyle paylaşılabilir.",
          "Hesap kullanıcı adı netleştiğinde bu sayfaya doğrudan Instagram bağlantısı eklenir.",
        ],
      },
    ],
  },
  iletisim: {
    slug: "iletisim",
    eyebrow: "İletişim",
    title: "İletişim",
    intro:
      "Sipariş ve bilgi almak için en hızlı iletişim kanalı WhatsApp olacaktır.",
    sections: [
      {
        title: "WhatsApp sipariş",
        body: [
          "Müşteri beğendiği modeli WhatsApp üzerinden göndererek sipariş konuşmasını başlatabilir.",
          "Gerçek telefon numarası canlı yayın öncesinde bu sayfaya eklenecektir.",
        ],
      },
      {
        title: "İşletme bilgileri",
        body: [
          "Resmi işletme adı, adres, e-posta ve varsa ETBİS bilgileri tamamlandığında burada yer alacaktır.",
        ],
      },
    ],
  },
  "siparis-ve-teslimat": {
    slug: "siparis-ve-teslimat",
    eyebrow: "Bilgilendirme",
    title: "Sipariş ve Teslimat",
    intro:
      "Bu sayfa, canlı yayına çıkmadan önce müşteriye sipariş ve teslimat sürecini açık anlatmak için hazırlanmıştır.",
    notice:
      "Bu metin taslaktır. Gerçek şehir, kargo, kurye, teslimat süresi ve işletme bilgileri kesinleşmeden canlı sitede son haliyle kullanılmamalıdır.",
    sections: [
      {
        title: "Sipariş akışı",
        body: [
          "Müşteri beğendiği ürünü WhatsApp üzerinden iletir.",
          "Model, isim yazısı, renk, özel not, teslim tarihi ve teslimat şekli yazılı olarak netleştirilir.",
          "Fiyat ve varsa teslimat ücreti sipariş onayından önce müşteriye bildirilir.",
        ],
      },
      {
        title: "Teslimat bilgisi",
        body: [
          "Teslimat bölgesi, kargo veya kurye seçeneği işletme bilgileri netleştiğinde güncellenecektir.",
          "Gecikme ihtimali bulunan durumlarda müşteri WhatsApp üzerinden bilgilendirilmelidir.",
        ],
      },
      {
        title: "Sipariş onayı",
        body: [
          "Kişiye özel üretimlerde müşteri onayı alınmadan üretime başlanmamalıdır.",
          "Ödeme alınacaksa ödeme bilgisi ve toplam bedel açık şekilde paylaşılmalıdır.",
        ],
      },
    ],
  },
  "iptal-iade-bilgileri": {
    slug: "iptal-iade-bilgileri",
    eyebrow: "Bilgilendirme",
    title: "İptal / İade Bilgileri",
    intro:
      "Kişiye özel bebek hediyeliklerinde iptal, değişiklik ve iade koşullarının sipariş öncesinde açık olması gerekir.",
    notice:
      "Bu metin genel bilgilendirme taslağıdır. Canlı yayın öncesinde işletmenin satış modeli ve hukuk/mali müşavir yönlendirmesine göre son haline getirilmelidir.",
    sections: [
      {
        title: "Sipariş iptali",
        body: [
          "Üretime başlanmadan önce iptal veya değişiklik talebi WhatsApp üzerinden iletilebilir.",
          "Bebek adı, renk ve özel ölçü gibi kişiselleştirilmiş detaylarla üretime başlandıysa iptal koşulları sipariş onayı öncesinde müşteriye ayrıca bildirilmelidir.",
        ],
      },
      {
        title: "İade koşulları",
        body: [
          "Kişiye özel hazırlanan ürünlerde iade koşulları ürün niteliğine göre değişebilir.",
          "Hasarlı, eksik veya yanlış hazırlanan ürünlerde müşteriyle çözüm süreci hızlıca başlatılmalıdır.",
        ],
      },
      {
        title: "Cayma hakkı notu",
        body: [
          "Mesafeli satışlarda cayma hakkı ve istisnaları mevzuata göre değerlendirilmelidir.",
          "Kişiye özel ürünlerde uygulanacak koşullar sipariş onayından önce açık ve yazılı şekilde paylaşılmalıdır.",
        ],
      },
    ],
  },
  "gizlilik-kvkk": {
    slug: "gizlilik-kvkk",
    eyebrow: "Bilgilendirme",
    title: "Gizlilik ve KVKK",
    intro:
      "Sipariş sürecinde alınan ad, telefon, adres ve özel not gibi bilgiler yalnızca sipariş iletişimi için kullanılacak şekilde planlanmalıdır.",
    notice:
      "Bu sayfa KVKK aydınlatma metni için taslaktır. Veri sorumlusu kimliği, işletme adresi ve iletişim bilgileri kesinleşince güncellenmelidir.",
    sections: [
      {
        title: "Alınabilecek bilgiler",
        body: [
          "Ad soyad, telefon numarası, teslimat adresi, bebek adı, özel not ve sipariş tercihlerine ilişkin bilgiler alınabilir.",
          "Gerekmeyen kişisel bilgiler müşteriden talep edilmemelidir.",
        ],
      },
      {
        title: "Kullanım amacı",
        body: [
          "Bilgiler siparişin hazırlanması, müşteriyle iletişim kurulması ve teslimatın yapılması amacıyla kullanılır.",
          "Pazarlama mesajları için ayrıca açık onay alınması gerekir.",
        ],
      },
      {
        title: "Saklama ve paylaşım",
        body: [
          "Sipariş için gerekli bilgiler makul süreyle saklanmalı ve yetkisiz kişilerle paylaşılmamalıdır.",
          "Kargo veya kurye kullanılıyorsa teslimat için gerekli bilgiler ilgili hizmet sağlayıcıyla paylaşılabilir.",
        ],
      },
    ],
  },
  "mesafeli-satis-bilgilendirmesi": {
    slug: "mesafeli-satis-bilgilendirmesi",
    eyebrow: "Bilgilendirme",
    title: "Mesafeli Satış Bilgilendirmesi",
    intro:
      "WhatsApp, internet sitesi veya sosyal medya üzerinden alınan siparişlerde müşteriye satış öncesi açık bilgi verilmesi gerekir.",
    notice:
      "Bu metin ön bilgilendirme taslağıdır. Online ödeme açıldığında satıcı bilgileri, fiyat, teslimat, cayma hakkı ve uyuşmazlık bilgileriyle tamamlanmalıdır.",
    sections: [
      {
        title: "Ön bilgilendirme kapsamı",
        body: [
          "Ürünün temel özellikleri, satıcı bilgileri, toplam fiyat, teslimat masrafı ve teslimat süresi siparişten önce paylaşılmalıdır.",
          "Kişiye özel üretim koşulları ve cayma hakkı istisnaları açık şekilde anlatılmalıdır.",
        ],
      },
      {
        title: "Ödeme ve onay",
        body: [
          "Müşteri ödeme yapmadan önce siparişin ödeme yükümlülüğü doğurduğunu anlayacağı şekilde bilgilendirilmelidir.",
          "Ödeme yöntemi ve toplam tutar yazılı olarak teyit edilmelidir.",
        ],
      },
      {
        title: "Canlı yayın öncesi tamamlanacaklar",
        body: [
          "Satıcı unvanı, açık adres, telefon, e-posta, vergi bilgisi, teslimat yöntemi, fiyat politikası ve varsa ETBİS bilgisi bu sayfaya eklenmelidir.",
        ],
      },
    ],
  },
} satisfies Record<string, InfoPageContent>;

export type InfoPageSlug = keyof typeof infoPages;
