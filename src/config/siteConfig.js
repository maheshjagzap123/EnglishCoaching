// ============================================================
// CENTRAL SITE CONFIGURATION
// To customize for a real client, update values in this file.
// ============================================================

export const siteConfig = {
  // --- DEMO MODE ---
  // Set to false when deploying for a real client
  demoMode: true,

  // --- BRAND ---
  name: "FluentRise English Academy",
  shortName: "FluentRise",
  tagline: "Speak English With Confidence",
  description:
    "Practical English communication classes designed to help you speak, practice and grow with confidence — online and offline.",

  // --- LOCATION ---
  city: "Pune",
  area: "Kothrud",
  address: "2nd Floor, Sunrise Plaza, FC Road, Kothrud, Pune – 411038",
  googleMapsUrl: "https://maps.google.com/?q=Kothrud,Pune",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",

  // --- CONTACT ---
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "hello@fluentrise.in",
  workingHours: "Mon – Sat: 7:00 AM – 8:00 PM",

  // --- SOCIAL / MESSAGING ---
  // Replace with real numbers/URLs for each client
  whatsapp: "919876543210",
  whatsappMessage:
    "Hello! I am interested in your Spoken English programs. Could you please share details about available batches and the free demo class?",
  instagram: "https://instagram.com/fluentrise",
  facebook: "https://facebook.com/fluentrise",
  googleBusinessUrl: "https://g.page/fluentrise",

  // --- SEO ---
  siteUrl: "https://fluentrise.in",
  ogImage: "/og-image.jpg",

  // --- STATS (demo numbers) ---
  stats: [
    { value: "500+", label: "Students Trained" },
    { value: "10+", label: "Years Experience" },
    { value: "4.8/5", label: "Student Rating" },
    { value: "15+", label: "Courses Offered" },
  ],

  // --- ANALYTICS (add IDs when ready) ---
  googleAnalyticsId: "",
  facebookPixelId: "",
};

export default siteConfig;
