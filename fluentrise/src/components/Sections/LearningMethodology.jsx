import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import "./LearningMethodology.css";

const steps = [
  { num: "01", title: "Assess", desc: "We understand your current level, goals, and learning style before you begin." },
  { num: "02", title: "Learn", desc: "Structured lessons covering grammar, vocabulary, and communication concepts." },
  { num: "03", title: "Practice", desc: "Guided exercises, role plays, and activities to apply what you have learned." },
  { num: "04", title: "Speak", desc: "Real speaking sessions where you communicate, make mistakes, and improve." },
  { num: "05", title: "Feedback", desc: "Personalised trainer feedback on your pronunciation, fluency, and accuracy." },
  { num: "06", title: "Improve", desc: "Track your progress, revisit weak areas, and build lasting confidence." },
];

export default function LearningMethodology() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section" id="methodology" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Our Approach"
          title="How We Teach"
          subtitle="A structured, activity-based process that takes you from hesitation to confident communication."
        />
        <div className={`method-grid stagger`}>
          {steps.map((s, i) => (
            <div key={s.num} className={`method-step fade-up${visible ? " visible" : ""}`}>
              <div className="method-step__num">{s.num}</div>
              <h3 className="method-step__title">{s.title}</h3>
              <p className="method-step__desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="method-step__arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
