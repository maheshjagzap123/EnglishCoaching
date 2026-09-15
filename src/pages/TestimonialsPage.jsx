import MainLayout from "../layouts/MainLayout";
import TestimonialsSection from "../components/Sections/TestimonialsSection";
import ReviewsSection from "../components/Sections/ReviewsSection";
import CTASection from "../components/Sections/CTASection";
import { siteConfig } from "../config/siteConfig";
import "./AboutPage.css";

export default function TestimonialsPage() {
  return (
    <MainLayout title="Testimonials" description={`Read student testimonials and reviews for ${siteConfig.name}.`}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Student Feedback</span>
          <h1 className="page-hero__title">What Our Students Say</h1>
          <p className="page-hero__subtitle">
            Hear from students who have completed our programs and improved their English communication skills.
          </p>
        </div>
      </div>
      <TestimonialsSection />
      <ReviewsSection />
      <CTASection />
    </MainLayout>
  );
}
