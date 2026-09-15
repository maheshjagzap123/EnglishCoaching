import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import StarRating from "../ui/StarRating";
import reviews, { overallRating, totalReviews } from "../../data/reviews";
import { siteConfig } from "../../config/siteConfig";
import { trackEvent, events } from "../../utils/analytics";
import "./ReviewsSection.css";

export default function ReviewsSection() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section" id="reviews" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Google Reviews"
          title="Rated Highly by Our Students"
          subtitle="Sample reviews — replace with your institute's actual Google reviews."
        />
        <div className="reviews-summary">
          <div className="reviews-summary__score">
            <span className="reviews-summary__num">{overallRating}</span>
            <StarRating rating={5} size={20} />
            <span className="reviews-summary__count">{totalReviews}+ reviews</span>
          </div>
          <a
            href={siteConfig.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
            onClick={() => trackEvent(events.CLICK_GOOGLE_REVIEWS)}
          >
            See All Reviews <ExternalLink size={15} />
          </a>
        </div>

        <div className={`reviews-grid stagger`}>
          {reviews.map((r) => (
            <div key={r.id} className={`review-card fade-up${visible ? " visible" : ""}`}>
              <div className="review-card__header">
                <div className="review-card__avatar">{r.initials}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.date}</span>
                </div>
                <div className="review-card__google">G</div>
              </div>
              <StarRating rating={r.rating} size={13} />
              <p className="review-card__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
