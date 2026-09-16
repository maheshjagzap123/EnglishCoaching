import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./LearningMethodology.css";

const steps = [
  { num: "01", title: "Assess", desc: "We understand your current level, goals and learning style before you begin." },
  { num: "02", title: "Learn", desc: "Structured lessons covering grammar, vocabulary and communication concepts." },
  { num: "03", title: "Practice", desc: "Guided exercises, role plays and activities to apply what you have learned." },
  { num: "04", title: "Speak", desc: "Real speaking sessions where you communicate, make mistakes and improve." },
  { num: "05", title: "Feedback", desc: "Personalised trainer feedback on your pronunciation, fluency and accuracy." },
  { num: "06", title: "Improve", desc: "Track your progress, revisit weak areas and build lasting confidence." },
];

export default function LearningMethodology() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="method section section--muted" id="methodology" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Approach</span>
          <h2 className="section-title">Your Journey to Better English</h2>
          <p className="section-subtitle">
            A structured, activity-based process that takes you from hesitation to confident communication.
          </p>
        </div>

        <div className={`method__grid stagger`}>
          {steps.map((s, i) => (
            <div key={s.num} className={`method__step fade-up${visible ? " visible" : ""}`}>
              <div className="method__step-num">{s.num}</div>
              {i < steps.length - 1 && <div className="method__connector" aria-hidden="true" />}
              <h3 className="method__step-title">{s.title}</h3>
              <p className="method__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
