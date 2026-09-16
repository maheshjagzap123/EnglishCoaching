import { X, Check } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./StudentTransformation.css";

const before = [
  "Hesitates to speak in English",
  "Limited vocabulary",
  "Fear of making mistakes",
  "Low confidence in conversations",
  "Struggles in interviews",
];

const after = [
  "Communicates with confidence",
  "Richer vocabulary in context",
  "Comfortable making mistakes",
  "Expresses ideas clearly",
  "Interview-ready communication",
];

export default function StudentTransformation() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="transform section--dark" id="transformation" ref={ref}>
      <div className="container transform__inner">
        {/* Left — text */}
        <div className={`transform__content fade-up${visible ? " visible" : ""}`}>
          <span className="section-label section-label--light">Student Journey</span>
          <h2 className="section-title section-title--white">
            From <em>"I can't speak"</em><br />
            to <span className="gold">"I can express myself."</span>
          </h2>
          <p className="transform__subtitle">
            Here is what many of our students experience over the course of
            their learning journey.
          </p>

          <div className="transform__cols">
            <div className="transform__col">
              <div className="transform__col-label transform__col-label--before">Before</div>
              <ul>
                {before.map((b) => (
                  <li key={b}>
                    <span className="transform__icon transform__icon--x"><X size={12} /></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="transform__divider" aria-hidden="true">→</div>

            <div className="transform__col">
              <div className="transform__col-label transform__col-label--after">After</div>
              <ul>
                {after.map((a) => (
                  <li key={a}>
                    <span className="transform__icon transform__icon--check"><Check size={12} /></span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="transform__disclaimer">
            * Results vary by individual. These reflect common experiences shared by students.
          </p>
        </div>

        {/* Right — image */}
        <div className={`transform__image-col fade-up${visible ? " visible" : ""}`} style={{ transitionDelay: "0.12s" }}>
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80"
            alt="Student speaking confidently"
            className="transform__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
