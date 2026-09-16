import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { whyPoints } from "../../data/whyPoints";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="why section" id="why-us" ref={ref}>
      <div className="container">
        <div className={`why__lead fade-up${visible ? " visible" : ""}`}>
          <span className="section-label">Why Veyora</span>
          <h2 className="why__headline">
            English isn't learned by memorising.<br />
            It's learned by <span className="gold">using it.</span>
          </h2>
          <p className="why__intro">
            Veyora focuses on practical English that learners can use well
            beyond the classroom — at work, in interviews and in everyday
            conversations.
          </p>
        </div>

        <div className="why__grid">
          {whyPoints.map((p, i) => (
            <div
              key={p.num}
              className={`why__point fade-up${visible ? " visible" : ""}`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              <span className="why__point-num">{p.num}</span>
              <h3 className="why__point-title">{p.title}</h3>
              <p className="why__point-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
