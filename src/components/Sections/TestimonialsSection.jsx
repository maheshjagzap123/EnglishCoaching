import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import StarRating from "../ui/StarRating";
import testimonials from "../../data/testimonials";
import "./TestimonialsSection.css";

const initials_colors = {
  blue: { bg: "#EBF2F8", text: "#102A43" },
  purple: { bg: "#f5f3ff", text: "#6d28d9" },
  green: { bg: "#f0fdf4", text: "#16a34a" },
  orange: { bg: "#fff7ed", text: "#ea580c" },
  teal: { bg: "#f0fdfa", text: "#0d9488" },
  red: { bg: "#fef2f2", text: "#dc2626" },
};

const [featured, ...rest] = testimonials;

export default function TestimonialsSection() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="testimonials section section--cream" id="testimonials" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Student Testimonials</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Real feedback from students who have completed our programs.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className={`testimonial-featured fade-up${visible ? " visible" : ""}`}>
          <div className="testimonial-featured__quote">"</div>
          <p className="testimonial-featured__text">{featured.text}</p>
          <div className="testimonial-featured__author">
            <div
              className="testimonial-featured__avatar"
              style={{ background: initials_colors[featured.color]?.bg, color: initials_colors[featured.color]?.text }}
            >
              {featured.initials}
            </div>
            <div>
              <strong>{featured.name}</strong>
              <span>{featured.program}</span>
            </div>
            <div className="testimonial-featured__stars">
              <StarRating rating={featured.rating} />
            </div>
          </div>
        </div>

        {/* Smaller cards */}
        <div className="testimonials-grid stagger">
          {rest.map((t) => {
            const c = initials_colors[t.color] || initials_colors.blue;
            return (
              <div key={t.id} className={`testimonial-card fade-up${visible ? " visible" : ""}`}>
                <StarRating rating={t.rating} />
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" style={{ background: c.bg, color: c.text }}>
                    {t.initials}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.program}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
