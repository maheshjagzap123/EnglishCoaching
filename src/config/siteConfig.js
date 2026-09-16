// ============================================================
// CENTRAL SITE CONFIGURATION — Veyora English Academy
// To customize for a real client, update values in this file.
// ============================================================

export const siteConfig = {
  // --- DEMO MODE ---
  // Set to false when deploying for a real client
  demoMode: true,

  // --- BRAND ---
  name: "Veyora English Academy",
  shortName: "Veyora",
  tagline: "Speak Better. Go Further.",
  description:
    "Veyora English Academy helps learners build confident English communication skills through practical, engaging and career-focused learning.",

  // --- LOCATION ---
  city: "Pune",
  area: "Kothrud",
  address: "Sample Address, FC Road, Kothrud, Pune – 411038 (Demo)",
  googleMapsUrl: "https://maps.google.com/?q=Kothrud,Pune",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",

  // --- CONTACT (demo/sample values) ---
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "hello@veyora.example",
  workingHours: "Mon – Sat: 7:00 AM – 8:00 PM",

  // --- SOCIAL / MESSAGING (demo/sample values) ---
  whatsapp: "919876543210",
  whatsappMessage:
    "Hello! I am interested in your English programs at Veyora English Academy. Could you please share details about available batches and the free demo class?",
  instagram: "https://instagram.com/veyoraacademy",
  facebook: "https://facebook.com/veyoraacademy",
  youtube: "https://youtube.com/@veyoraacademy",
  googleBusinessUrl: "https://g.page/veyoraacademy",

  // --- SEO ---
  siteUrl: "https://veyora.example",
  ogImage: "/og-image.jpg",

  // --- STATS (demo/sample numbers) ---
  // `count` is used for the animated count-up; `suffix` is appended after it.
  stats: [
    { value: "500+", count: 500, suffix: "+", label: "Learners", sample: true },
    { value: "20+", count: 20, suffix: "+", label: "Demo Batches", sample: true },
    { value: "4.9/5", label: "Sample Rating", sample: true },
    { value: "15+", count: 15, suffix: "+", label: "Courses Offered", sample: true },
  ],

  // --- HERO TRUST INDICATORS (demo/sample) ---
  heroTrust: [
    { value: "500+", label: "Learners", sample: true },
    { value: "4.9/5", label: "Sample Rating", sample: true },
    { value: "IELTS", label: "Interview Prep" },
    { value: "Online + Offline", label: "Flexible" },
  ],

  // --- ANALYTICS (add IDs when ready) ---
  googleAnalyticsId: "",
  facebookPixelId: "",
};

export default siteConfig;
