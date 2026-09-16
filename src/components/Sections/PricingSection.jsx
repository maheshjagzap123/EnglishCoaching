import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { pricingPlans } from "../../data/pricing";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./PricingSection.css";

export default function PricingSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Learning Plans</span>
          <h2 className="section-title">Choose Your Learning Plan</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ margin: "1rem auto 0" }}>
            Pick the format that fits you — we'll tailor the details in your free demo.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingPlans.map((plan, i) => (
            <div
              key={plan.id}
              className={`pricing__card fade-up${plan.highlight ? " pricing__card--highlight" : ""}${visible ? " visible" : ""}`}
              style={{ transitionDelay: `${0.08 * i}s` }}
            >
              {plan.badge && <span className="pricing__badge">{plan.badge}</span>}
              <h3 className="pricing__name">{plan.name}</h3>
              <p className="pricing__for">{plan.for}</p>
              <ul className="pricing__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <span className="pricing__check"><Check size={13} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/free-demo"
                className={`btn ${plan.highlight ? "btn--gold" : "btn--secondary"} pricing__cta`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        <p className="pricing__note">
          Fees are shared during your enquiry so we can recommend the right plan for you.
        </p>
      </div>
    </section>
  );
}
