import { Link } from "react-router-dom";
import { MessageCircle, Play, CheckCircle, Users, Star, Monitor } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Hero.css";

const trustPoints = [
  { icon: <Users size={15} />, text: "500+ Students Trained" },
  { icon: <Star size={15} />, text: "4.8/5 Rating" },
  { icon: <Monitor size={15} />, text: "Online & Offline" },
];

const highlights = [
  "Small batch sizes for personal attention",
  "Practical speaking activities every class",
  "Experienced & certified trainers",
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container hero__inner">
        <div className="hero__content">
          {siteConfig.demoMode && (
            <span className="hero__demo-tag">✦ Demo Website</span>
          )}
          <h1 className="hero__title">
            Speak English<br />
            <span className="hero__title-accent">With Confidence</span>
          </h1>
          <p className="hero__subtitle">
            Practical English communication classes designed to help you speak,
            practice and grow — in a supportive, activity-based environment.
          </p>

          <ul className="hero__highlights">
            {highlights.map((h) => (
              <li key={h}>
                <CheckCircle size={16} className="hero__check" />
                {h}
              </li>
            ))}
          </ul>

          <div className="hero__ctas">
            <Link to="/free-demo" className="btn btn--primary btn--lg">
              Book Free Demo
            </Link>
            <Link to="/programs" className="btn btn--secondary btn--lg">
              Explore Programs
            </Link>
            <button className="btn btn--whatsapp btn--lg" onClick={() => openWhatsApp()}>
              <MessageCircle size={18} /> WhatsApp
            </button>
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

        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80"
              alt="Students in English speaking class"
              className="hero__image"
              loading="eager"
            />
            <div className="hero__badge hero__badge--top">
              <span className="hero__badge-icon">🎓</span>
              <div>
                <strong>Free Demo Class</strong>
                <span>Experience before you enrol</span>
              </div>
            </div>
            <div className="hero__badge hero__badge--bottom">
              <span className="hero__badge-icon">⭐</span>
              <div>
                <strong>4.8/5 Rating</strong>
                <span>From 127+ students</span>
              </div>
            </div>
          </div>

          <div className="hero__modes">
            <div className="hero__mode">
              <Monitor size={20} />
              <div>
                <strong>Online</strong>
                <span>Live sessions</span>
              </div>
            </div>
            <div className="hero__mode-divider" />
            <div className="hero__mode">
              <Users size={20} />
              <div>
                <strong>Offline</strong>
                <span>Classroom learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}
