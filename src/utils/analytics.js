import { siteConfig } from "../config/siteConfig";

// Analytics event tracker — connect to GA4, Facebook Pixel, or custom API later
export const trackEvent = (eventName, params = {}) => {
  if (siteConfig.googleAnalyticsId && window.gtag) {
    window.gtag("event", eventName, params);
  }
  if (siteConfig.facebookPixelId && window.fbq) {
    window.fbq("track", eventName, params);
  }
  // Uncomment for debugging:
  // console.log("[Analytics]", eventName, params);
};

export const events = {
  VIEW_COURSE: "view_course",
  CLICK_BOOK_DEMO: "click_book_demo",
  CLICK_WHATSAPP: "click_whatsapp",
  SUBMIT_DEMO_FORM: "submit_demo_form",
  CLICK_PHONE: "click_phone",
  CLICK_INSTAGRAM: "click_instagram",
  CLICK_FACEBOOK: "click_facebook",
  CLICK_GOOGLE_REVIEWS: "click_google_reviews",
  CLICK_GOOGLE_MAPS: "click_google_maps",
};
