import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./WhyChooseUs.css";

const features = [
  {
    title: "Small Batches",
    desc: "More speaking time for every student. Personal attention, not a crowd.",
  },
  {
    title: "Practical Sessions",
    desc: "Learn through real conversations, role plays and everyday situations.",
  },
  {
    title: "Trainer Feedback",
    desc: "Understand exactly where you can improve — pronunciation, fluency, accuracy.",
  },
  {
    title: "Flexible Learning",
    desc: "Morning, evening, weekend and online batches to fit your schedule.",
  },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="why section" id="why-us" ref={ref}>
      <div className="container why__inner">
        {/* Left — Image */}
        <div className={`why__image-col fade-up${visible ? " visible" : ""}`}>
          <div className="why__image-wrap">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80"
              alt="Students in a speaking session"
              className="why__image"
              loading="lazy"
            />
            <div className="why__image-badge">
              <span className="why__image-badge-num">10+</span>
              <span>Years of teaching experience</span>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className={`why__content fade-up${visible ? " visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            More than grammar.<br />
            We build <span className="gold">communication.</span>
          </h2>
          <p className="why__intro">
            Most English classes teach rules. We teach you how to actually use
            the language — in conversations, interviews, presentations and
            everyday situations.
          </p>

          <div className="why__features">
            {features.map((f) => (
              <div key={f.title} className="why__feature">
                <div className="why__feature-dot" />
                <div>
                  <h3 className="why__feature-title">{f.title}</h3>
                  <p className="why__feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
