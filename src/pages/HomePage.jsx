import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import StatsSection from "../components/Sections/StatsSection";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import CoursesSection from "../components/Sections/CoursesSection";
import CourseFinder from "../components/Sections/CourseFinder";
import HowWeTeach from "../components/Sections/HowWeTeach";
import VideoSection from "../components/Sections/VideoSection";
import ReelsSection from "../components/Sections/ReelsSection";
import StudentTransformation from "../components/Sections/StudentTransformation";
import TrainersSection from "../components/Sections/TrainersSection";
import SuccessStories from "../components/Sections/SuccessStories";
import TestimonialsSection from "../components/Sections/TestimonialsSection";
import ReviewsSection from "../components/Sections/ReviewsSection";
import PricingSection from "../components/Sections/PricingSection";
import AssessmentTeaser from "../components/Sections/AssessmentTeaser";
import FAQSection from "../components/Sections/FAQSection";
import ContactSection from "../components/Sections/ContactSection";
import CTASection from "../components/Sections/CTASection";
import DemoSalesSection from "../components/Sections/DemoSalesSection";
import { siteConfig } from "../config/siteConfig";

export default function HomePage() {
  return (
    <MainLayout
      description={`${siteConfig.name} — ${siteConfig.tagline} Practical spoken English, interview preparation and exam coaching in ${siteConfig.city}. Online and offline batches.`}
    >
      {/* Dark hero */}
      <Hero />
      {/* Warm trust strip */}
      <StatsSection />
      {/* White — brand story */}
      <WhyChooseUs />
      {/* White — courses */}
      <CoursesSection limit={6} />
      {/* Cream — interactive finder */}
      <CourseFinder />
      {/* Muted — how we teach */}
      <HowWeTeach />
      {/* White — video */}
      <VideoSection />
      {/* Cream — reels */}
      <ReelsSection />
      {/* Dark — transformation */}
      <StudentTransformation />
      {/* White — trainers */}
      <TrainersSection />
      {/* Soft — success stories */}
      <SuccessStories />
      {/* Warm — testimonials */}
      <TestimonialsSection />
      {/* Reviews */}
      <ReviewsSection />
      {/* White — pricing */}
      <PricingSection />
      {/* Dark — assessment teaser */}
      <AssessmentTeaser />
      {/* FAQ */}
      <FAQSection />
      {/* Contact */}
      <ContactSection />
      {/* Dark final CTA */}
      <CTASection />
      {/* Demo-only sales pitch */}
      <DemoSalesSection />
    </MainLayout>
  );
}
