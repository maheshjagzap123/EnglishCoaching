import { siteConfig } from "../config/siteConfig";
import { trackEvent, events } from "./analytics";

export const getWhatsAppUrl = (message) => {
  const msg = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
};

export const openWhatsApp = (message) => {
  trackEvent(events.CLICK_WHATSAPP, { message });
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
};
