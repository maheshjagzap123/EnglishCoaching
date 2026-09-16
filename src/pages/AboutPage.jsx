import { Link } from "react-router-dom";
import { CheckCircle, MessageCircle } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import SectionHeading from "../components/ui/SectionHeading";
import TrainersSection from "../components/Sections/TrainersSection";
import CTASection from "../components/Sections/CTASection";
import { siteConfig } from "../config/siteConfig";
import { openWhatsApp } from "../utils/whatsapp";
import "./AboutPage.css";

const values = [
  "Practical, activity-based learning over passive listening",
  "Small batches for personal attention and more speaking time",
  "Supportive environment where mistakes are part of learning",
  "Structured curriculum with clear weekly progress",
  "Trainers who genuinely invest in each student's growth",
];

export default function AboutPage() {
  return (
    <MainLayout title="About Us" description={`Learn about ${siteConfig.name} — our story, mission, and the team behind our English coaching programs.`}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">About Us</span>
          <h1 className="page-hero__title">Our Story & Mission</h1>
          <p className="page-hero__subtitle">
            We started with a simple belief: everyone deserves to communicate in English with confidence.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container about-grid">
          <div className="about-content">
            <SectionHeading label="Who We Are" title="Veyora English Academy" center={false} />
            <p>
              Veyora English Academy is a modern learning space focused on helping students communicate
              in English with greater confidence, clarity and ease.
            </p>
            <p>
              We believe that English communication is a skill, not a talent. With the right guidance,
              structured practice, and a supportive environment, anyone can improve.
            </p>
            <p>
              Our programs are designed around practical speaking activities, not just grammar rules.
              Every class gives you real opportunities to speak, make mistakes, get feedback, and improve.
            </p>
            <h3>Our Values</h3>
            <ul className="about-values">
              {values.map((v) => (
                <li key={v}><CheckCircle size={16} /> {v}</li>
              ))}
            </ul>
            <div className="about-ctas">
              <Link to="/programs" className="btn btn--primary btn--lg">Explore Programs</Link>
              <button className="btn btn--whatsapp btn--lg" onClick={() => openWhatsApp()}>
                <MessageCircle size={18} /> WhatsApp Us
              </button>
            </div>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
              alt="English coaching classroom"
            />
          </div>
        </div>
      </section>

      <TrainersSection />
      <CTASection />
    </MainLayout>
  );
}
