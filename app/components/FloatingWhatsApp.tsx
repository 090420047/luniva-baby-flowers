import { whatsappHref } from "../site-content";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="WhatsApp üzerinden sipariş ver"
      title="WhatsApp üzerinden sipariş ver"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
