import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, RotateCcw, Check } from "lucide-react";
import { finderGoals, finderModes } from "../../data/finder";
import { courses } from "../../data/courses";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./CourseFinder.css";

export default function CourseFinder() {
  const { ref, visible } = useScrollAnimation();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState(null);
  const [mode, setMode] = useState(null);

  const pickGoal = (g) => {
    setGoal(g);
    setStep(2);
  };

  const pickMode = (m) => {
    setMode(m);
    setStep(3);
  };

  const reset = () => {
    setGoal(null);
    setMode(null);
    setStep(1);
  };

  const recommended = goal
    ? courses.find((c) => c.id === goal.courseId) || courses[0]
    : null;

  return (
    <section className="finder section section--cream" id="find-course" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Find Your Course</span>
          <h2 className="section-title">Which English goal is yours?</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ margin: "1rem auto 0" }}>
            Answer two quick questions and we'll point you to a starting course.
          </p>
        </div>

        <div className={`finder__card fade-up${visible ? " visible" : ""}`}>
          {/* Progress */}
          <div className="finder__progress" aria-hidden="true">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`finder__dot${step >= s ? " active" : ""}`}
              />
            ))}
          </div>

          {/* Step 1 — Goal */}
          {step === 1 && (
            <div className="finder__step">
              <h3 className="finder__q">What do you want to improve?</h3>
              <div className="finder__options">
                {finderGoals.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className="finder__option"
                    onClick={() => pickGoal(g)}
                  >
                    {g.label}
                    <ArrowRight size={16} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Mode */}
          {step === 2 && (
            <div className="finder__step">
              <h3 className="finder__q">Preferred learning mode?</h3>
              <div className="finder__options finder__options--modes">
                {finderModes.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    className="finder__option finder__option--mode"
                    onClick={() => pickMode(m)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <button type="button" className="finder__back" onClick={reset}>
                ← Start over
              </button>
            </div>
          )}

          {/* Step 3 — Result */}
          {step === 3 && recommended && (
            <div className="finder__step finder__result">
              <span className="finder__result-tag">
                <Check size={14} /> Recommended for you
              </span>
              <h3 className="finder__result-title">{recommended.title}</h3>
              <p className="finder__result-desc">{recommended.shortDesc}</p>
              <div className="finder__result-meta">
                <span>{recommended.level}</span>
                <span>{recommended.duration}</span>
                <span>{mode ? mode.label : recommended.mode}</span>
              </div>
              <div className="finder__result-ctas">
                <Link to={`/programs/${recommended.id}`} className="btn btn--primary">
                  View Course <ArrowRight size={16} />
                </Link>
                <Link to="/free-demo" className="btn btn--gold">
                  Book Free Demo
                </Link>
              </div>
              <button type="button" className="finder__back" onClick={reset}>
                <RotateCcw size={14} /> Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
