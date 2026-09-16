import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Hero.css";

export default function Hero() {
  const trust = siteConfig.heroTrust || [];

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
            Go <span className="hero__title-accent">Further.</span>
          </h1>

          <p className="hero__subtitle">
            Build the confidence to speak English naturally — in conversations,
            interviews, presentations and everyday life.
          </p>

          <div className="hero__ctas">
            <Link to="/free-demo" className="btn btn--gold btn--lg">
              Book a Free Demo Class
              <ArrowRight size={18} />
            </Link>
            <Link to="/programs" className="btn btn--outline-light btn--lg">
              View Courses
            </Link>
          </div>

          <button
            type="button"
            className="hero__whatsapp"
            onClick={() => openWhatsApp()}
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
          </button>

          {/* Trust indicators — driven by config, demo-labeled */}
          <div className="hero__trust">
            {trust.map((t) => (
              <div key={t.label} className="hero__trust-item">
                <strong>
                  {t.value}
                  {t.sample && <sup className="hero__trust-star">*</sup>}
                </strong>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
          {trust.some((t) => t.sample) && (
            <p className="hero__trust-note">* Sample / demo figures</p>
          )}
        </div>

        {/* Right — Editorial image */}
        <div className="hero__visual">
          <div className="hero__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=85&auto=format&fit=crop"
              alt="Learners practising spoken English together in a classroom"
              className="hero__image"
              loading="eager"
              width="900"
              height="1000"
            />

            <div className="hero__float hero__float--top">
              <span className="hero__float-dot" />
              Practical Speaking
            </div>
            <div className="hero__float hero__float--mid">
              <span className="hero__float-dot" />
              Small Batches
            </div>
            <div className="hero__float hero__float--bottom">
              <span className="hero__float-dot" />
              Online + Offline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
