import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";
import "./CTASection.css";

export default function CTASection({
  title = "Ready to Start Speaking English With Confidence?",
  subtitle = "Join hundreds of students who have improved their communication skills with FluentRise. Book your free demo class today.",
  primaryLabel = "Book Free Demo",
  primaryTo = "/free-demo",
}) {
  return (
    <section className="cta-section section--primary">
      <div className="container cta-section__inner">
        <h2 className="cta-section__title">{title}</h2>
        <p className="cta-section__subtitle">{subtitle}</p>
        <div className="cta-section__btns">
          <Link to={primaryTo} className="btn btn--white btn--lg">{primaryLabel}</Link>
          <button className="btn btn--whatsapp btn--lg" onClick={() => openWhatsApp()}>
            <MessageCircle size={18} /> WhatsApp Us
          </button>
        </div>
      </div>
    </section>
  );
}
