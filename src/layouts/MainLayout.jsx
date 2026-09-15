import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import MobileStickyCTA from "../components/ui/MobileStickyCTA";
import { siteConfig } from "../config/siteConfig";

export default function MainLayout({ children, title, description }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} — ${siteConfig.tagline}`;
    document.title = pageTitle;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  return (
    <>
      {siteConfig.demoMode && (
        <div className="demo-banner" role="banner">
          ✦ Demo Website — All content is fictional and for demonstration purposes only
        </div>
      )}
      <Navbar hasBanner={siteConfig.demoMode} />
      <main
        id="main-content"
        style={{
          paddingTop: siteConfig.demoMode
            ? "calc(var(--banner-h) + var(--navbar-h))"
            : "var(--navbar-h)",
        }}
      >
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </>
  );
}
