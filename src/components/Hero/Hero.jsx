import { Link } from "react-router-dom";
import { MessageCircle, Users, Star, Zap } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Hero.css";

const trustPoints = [
  { icon: <Star size={14} />, text: "4.8 / 5 Rating" },
  { icon: <Users size={14} />, text: "500+ Learners" },
  { icon: <Zap size={14} />, text: "Online & Offline" },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container hero__inner">
        {/* Left — Content */}
        <div className="hero__content">
          {siteConfig.demoMode && (
            <span className="hero__demo-tag">✦ Demo Website</span>
          )}

          <h1 className="hero__title">
            Speak Better.<br />
            Go{" "}
            <span className="hero__title-accent">Further.</span>
          </h1>

          <p className="hero__subtitle">
            Build confident English communication skills through practical
            learning, real conversations, guided practice and personalised feedback.
          </p>

          <div className="hero__ctas">
            <Link to="/free-demo" className="btn btn--gold btn--lg">
              Book a Free Demo →
            </Link>
            <Link to="/programs" className="btn btn--outline-light btn--lg">
              Explore Programs
            </Link>
          </div>

          <div className="hero__trust">
            {trustPoints.map((t) => (
              <div key={t.text} className="hero__trust-item">
                {t.icon}
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image */}
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=85"
              alt="Students in an English speaking class"
              className="hero__image"
              loading="eager"
            />

            <div className="hero__badge hero__badge--rating">
              <span className="hero__badge-icon">⭐</span>
              <div>
                <strong>4.8 / 5 Rating</strong>
                <span>From 127+ students</span>
              </div>
            </div>

            <div className="hero__badge hero__badge--students">
              <span className="hero__badge-icon">🎓</span>
              <div>
                <strong>500+ Learners</strong>
                <span>Trained so far</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave to next section */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
