import { MessageCircle, CheckCircle } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import DemoBookingForm from "../components/Sections/DemoBookingForm";
import { siteConfig } from "../config/siteConfig";
import { openWhatsApp } from "../utils/whatsapp";
import "./FreeDemoPage.css";

const perks = [
  "Experience our teaching style before enrolling",
  "Meet your trainer and ask questions",
  "Understand the program structure",
  "No obligation — completely free",
];

export default function FreeDemoPage() {
  return (
    <MainLayout
      title="Book Free Demo Class"
      description={`Book a free demo English class at ${siteConfig.name}. Experience our teaching style before you enrol.`}
    >
      <div className="demo-page">
        <div className="container demo-page__grid">
          {/* Left */}
          <div className="demo-page__info">
            <span className="section-label">Free Demo Class</span>
            <h1 className="demo-page__title">
              Experience Our Class<br />Before You Enrol
            </h1>
            <p className="demo-page__subtitle">
              Book a free demo class and see how we teach. No pressure, no obligation —
              just a genuine opportunity to experience our approach.
            </p>
            <ul className="demo-page__perks">
              {perks.map((p) => (
                <li key={p}><CheckCircle size={16} /> {p}</li>
              ))}
            </ul>
            <div className="demo-page__wa">
              <p>Prefer to book directly?</p>
              <button className="btn btn--whatsapp btn--lg" onClick={() => openWhatsApp()}>
                <MessageCircle size={18} /> Book via WhatsApp
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
              alt="Students in English class"
              className="demo-page__image"
            />
          </div>

          {/* Form */}
          <div className="demo-page__form-wrap">
            <div className="demo-page__form-card">
              <h2>Book Your Free Demo</h2>
              <p>Fill in your details and we will confirm your demo class shortly.</p>
              <DemoBookingForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
