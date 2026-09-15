import MainLayout from "../layouts/MainLayout";
import ContactSection from "../components/Sections/ContactSection";
import FAQSection from "../components/Sections/FAQSection";
import { siteConfig } from "../config/siteConfig";
import "./AboutPage.css";

export default function ContactPage() {
  return (
    <MainLayout title="Contact Us" description={`Contact ${siteConfig.name}. Call, WhatsApp, or fill the enquiry form to get in touch.`}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1 className="page-hero__title">Get in Touch</h1>
          <p className="page-hero__subtitle">
            Have a question about our programs or batches? We are happy to help. Reach out anytime.
          </p>
        </div>
      </div>
      <ContactSection />
      <FAQSection />
    </MainLayout>
  );
}
