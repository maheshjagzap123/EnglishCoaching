import { useState } from "react";
import { Check } from "lucide-react";
import { teachingSteps } from "../../data/teaching";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./HowWeTeach.css";

export default function HowWeTeach() {
  const { ref, visible } = useScrollAnimation();
  const [active, setActive] = useState(0);
  const step = teachingSteps[active];

  return (
    <section className="teach section section--muted" id="how-we-teach" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">How We Teach</span>
          <h2 className="section-title">A Better Way to Learn English</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ margin: "1rem auto 0" }}>
            A clear, activity-based journey that takes you from hesitation to
            confident communication.
          </p>
        </div>

        <div className={`teach__layout fade-up${visible ? " visible" : ""}`}>
          {/* Timeline / step selector */}
          <div className="teach__timeline" role="tablist" aria-label="Learning steps">
            {teachingSteps.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={active === i}
                className={`teach__node${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="teach__node-num">{s.num}</span>
                <span className="teach__node-title">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Revealed detail */}
          <div className="teach__detail" key={step.key}>
            <span className="teach__detail-num">{step.num}</span>
            <h3 className="teach__detail-title">{step.title}</h3>
            <p className="teach__detail-tagline">{step.tagline}</p>
            <p className="teach__detail-desc">{step.desc}</p>
            <ul className="teach__detail-points">
              {step.points.map((p) => (
                <li key={p}>
                  <span className="teach__check"><Check size={13} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
