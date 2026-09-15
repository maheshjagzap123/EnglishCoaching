import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import StarRating from "../ui/StarRating";
import testimonials from "../../data/testimonials";
import "./TestimonialsSection.css";

const colorMap = {
  blue: { bg: "#eff6ff", text: "#1d4ed8" },
  purple: { bg: "#f5f3ff", text: "#7c3aed" },
  green: { bg: "#f0fdf4", text: "#16a34a" },
  orange: { bg: "#fff7ed", text: "#ea580c" },
  teal: { bg: "#f0fdfa", text: "#0d9488" },
  red: { bg: "#fef2f2", text: "#dc2626" },
};

export default function TestimonialsSection() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section section--soft" id="testimonials" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Student Testimonials"
          title="What Our Students Say"
          subtitle="Real feedback from students who have completed our programs. (Sample content — replace with actual reviews.)"
        />
        <div className={`testimonials-grid stagger`} ref={ref}>
          {testimonials.map((t) => {
            const c = colorMap[t.color] || colorMap.blue;
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
