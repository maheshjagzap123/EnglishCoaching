import { Camera, Play } from "lucide-react";
import { reels } from "../../data/reels";
import { siteConfig } from "../../config/siteConfig";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./ReelsSection.css";

export default function ReelsSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="reels section section--cream" id="inside-veyora" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Inside Veyora</span>
          <h2 className="section-title">Life at the Academy</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ margin: "1rem auto 0" }}>
            Classroom moments, speaking practice and quick English tips.
          </p>
        </div>

        <div className={`reels__row fade-up${visible ? " visible" : ""}`}>
          {reels.map((r) => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reel"
              style={{ backgroundImage: `url(${r.thumb})` }}
              aria-label={`${r.caption} — watch on Instagram`}
            >
              <span className="reel__overlay" />
              <span className="reel__cat">{r.category}</span>
              <span className="reel__play"><Play size={16} fill="currentColor" /></span>
              <span className="reel__caption">{r.caption}</span>
              <span className="reel__watch">
                <Camera size={13} /> Watch on Instagram
              </span>
            </a>
          ))}
        </div>

        <div className="reels__cta">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            <Camera size={16} /> Follow @{siteConfig.shortName.toLowerCase()}
          </a>
        </div>
      </div>
    </section>
  );
}
