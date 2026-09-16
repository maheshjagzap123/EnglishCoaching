import { useState } from "react";
import { Link } from "react-router-dom";
import { Gauge, ArrowRight } from "lucide-react";
import { assessmentCategories } from "../../data/finder";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./AssessmentTeaser.css";

export default function AssessmentTeaser() {
  const { ref, visible } = useScrollAnimation();
  const [active, setActive] = useState(null);

  return (
    <section className="assess section section--dark" id="assessment" ref={ref}>
      <div className="container assess__inner">
        <div className={`assess__content fade-up${visible ? " visible" : ""}`}>
          <span className="section-label section-label--light">Free Assessment</span>
          <h2 className="section-title section-title--white">
            How confident is your <span className="gold">English?</span>
          </h2>
          <p className="assess__subtitle">
            Get a quick, friendly sense of where you stand across the areas that
            matter most — then see which course fits you best.
          </p>
          <Link to="/free-demo" className="btn btn--gold btn--lg">
            Take the Free Assessment <ArrowRight size={18} />
          </Link>
          <p className="assess__note">Demo interaction — no certification.</p>
        </div>

        <div className={`assess__cats fade-up${visible ? " visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
          {assessmentCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`assess__cat${active === c.id ? " active" : ""}`}
              onClick={() => setActive(active === c.id ? null : c.id)}
              aria-expanded={active === c.id}
            >
              <span className="assess__cat-icon"><Gauge size={18} /></span>
              <span className="assess__cat-body">
                <span className="assess__cat-label">{c.label}</span>
                <span className="assess__cat-desc">{c.desc}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
