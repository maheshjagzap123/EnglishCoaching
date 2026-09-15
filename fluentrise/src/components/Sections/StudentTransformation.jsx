import { ArrowRight, X, Check } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import "./StudentTransformation.css";

const before = [
  "Hesitates to speak in English",
  "Limited vocabulary",
  "Grammar confusion",
  "Low confidence in conversations",
  "Struggles in interviews",
];

const after = [
  "Communicates with more confidence",
  "Improved vocabulary in context",
  "Better sentence construction",
  "More comfortable in conversations",
  "Better prepared for interviews",
];

export default function StudentTransformation() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section" id="transformation" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Student Journey"
          title="From Hesitation to Confidence"
          subtitle="Here is what many of our students experience over the course of their learning journey."
        />
        <div className={`transform-grid fade-up${visible ? " visible" : ""}`}>
          <div className="transform-col transform-col--before">
            <div className="transform-col__header">
              <span className="transform-col__tag transform-col__tag--before">Before</span>
              <h3>Common Challenges</h3>
            </div>
            <ul>
              {before.map((b) => (
                <li key={b}>
                  <span className="transform-icon transform-icon--x"><X size={14} /></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="transform-arrow" aria-hidden="true">
            <ArrowRight size={32} />
            <span>Learning Journey</span>
          </div>

          <div className="transform-col transform-col--after">
            <div className="transform-col__header">
              <span className="transform-col__tag transform-col__tag--after">After</span>
              <h3>What Students Report</h3>
            </div>
            <ul>
              {after.map((a) => (
                <li key={a}>
                  <span className="transform-icon transform-icon--check"><Check size={14} /></span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="transform-disclaimer">
          * Results vary by individual. These reflect common experiences shared by students — not guaranteed outcomes.
        </p>
      </div>
    </section>
  );
}
