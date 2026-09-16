import { X, Check } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { transformation } from "../../data/successStories";
import "./StudentTransformation.css";

const before = transformation.before.points;
const after = transformation.after.points;

export default function StudentTransformation() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="transform section--dark" id="transformation" ref={ref}>
      <div className="container transform__inner">
        {/* Left — text */}
        <div className={`transform__content fade-up${visible ? " visible" : ""}`}>
          <span className="section-label section-label--light">Student Journey</span>
          <h2 className="section-title section-title--white">
            From hesitation<br />
            to <span className="gold">confidence.</span>
          </h2>
          <p className="transform__subtitle">
            "{transformation.before.quote}" → "{transformation.after.quote}"
            <br />
            Here's the shift many learners experience over their journey.
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
