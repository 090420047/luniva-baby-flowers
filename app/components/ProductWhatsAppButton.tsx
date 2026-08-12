"use client";

import { whatsappNumber } from "../site-content";
import { WhatsAppIcon } from "./WhatsAppIcon";

type ProductWhatsAppButtonProps = {
  productName: string;
  productImage: string;
  productIndex: number;
  compact?: boolean;
};

export function ProductWhatsAppButton({ productName, productImage, productIndex, compact = false }: ProductWhatsAppButtonProps) {
  const handleClick = () => {
    const siteUrl = window.location.origin;
    const productUrl = `${siteUrl}/urun/${productIndex}`;
    const imageUrl = `${siteUrl}${productImage}`;
    const message = `Merhaba Luniva Baby & Flowers, ${productName} hakkında bilgi almak istiyorum.\n\nÜrün bağlantısı: ${productUrl}\nÜrün görseli: ${imageUrl}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={compact ? "group/whatsapp inline-flex items-center justify-center gap-2 border-b-2 border-[#25d366] px-2 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#168f45] transition duration-300 hover:border-[#168f45] hover:text-[#0f7235]" : "mt-9 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-[#25d366]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#1fbd5b] hover:shadow-2xl hover:shadow-[#25d366]/30"}
    >
      <WhatsAppIcon className={compact ? "h-4 w-4 transition duration-300 group-hover/whatsapp:scale-110" : "h-5 w-5"} />
      {compact ? "Sor" : "Bu ürün hakkında bilgi al"}
    </button>
  );
}
