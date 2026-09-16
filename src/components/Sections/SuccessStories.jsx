import { Quote } from "lucide-react";
import { featuredStory, successStories } from "../../data/successStories";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./SuccessStories.css";

export default function SuccessStories() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="stories section section--soft" id="success-stories" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Success Stories</span>
          <h2 className="section-title">From Hesitation to Confidence</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ margin: "1rem auto 0" }}>
            Sample journeys that reflect what learners experience at Veyora.
          </p>
        </div>

        <div className={`stories__layout fade-up${visible ? " visible" : ""}`}>
          {/* Featured story */}
          <article className="stories__featured">
            <div className="stories__featured-img">
              <img src={featuredStory.image} alt={featuredStory.name} loading="lazy" />
            </div>
            <div className="stories__featured-body">
              <span className="stories__course">{featuredStory.course}</span>
              <Quote size={28} className="stories__quote-icon" />
              <p className="stories__featured-quote">"{featuredStory.quote}"</p>
              <div className="stories__journey">
                <p><strong>Challenge:</strong> {featuredStory.challenge}</p>
                <p><strong>Journey:</strong> {featuredStory.journey}</p>
                <p><strong>Outcome:</strong> {featuredStory.outcome}</p>
              </div>
              <span className="stories__name">{featuredStory.name}</span>
            </div>
          </article>

          {/* Smaller stories */}
          <div className="stories__side">
            {successStories.map((s) => (
              <article key={s.id} className="stories__card">
                <img src={s.image} alt={s.name} loading="lazy" className="stories__card-img" />
                <div>
                  <span className="stories__course">{s.course}</span>
                  <p className="stories__card-quote">"{s.quote}"</p>
                  <span className="stories__name">{s.name}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="stories__note">Sample success stories for demonstration.</p>
      </div>
    </section>
  );
}
