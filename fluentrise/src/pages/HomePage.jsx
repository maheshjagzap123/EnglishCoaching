import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import StatsSection from "../components/Sections/StatsSection";
import CoursesSection from "../components/Sections/CoursesSection";
import WhyChooseUs from "../components/Sections/WhyChooseUs";
import LearningMethodology from "../components/Sections/LearningMethodology";
import SpeakingActivities from "../components/Sections/SpeakingActivities";
import BatchesSection from "../components/Sections/BatchesSection";
import TrainersSection from "../components/Sections/TrainersSection";
import StudentTransformation from "../components/Sections/StudentTransformation";
import TestimonialsSection from "../components/Sections/TestimonialsSection";
import ReviewsSection from "../components/Sections/ReviewsSection";
import GallerySection from "../components/Sections/GallerySection";
import FAQSection from "../components/Sections/FAQSection";
import ContactSection from "../components/Sections/ContactSection";
import CTASection from "../components/Sections/CTASection";
import DemoSalesSection from "../components/Sections/DemoSalesSection";
import { siteConfig } from "../config/siteConfig";

export default function HomePage() {
  return (
    <MainLayout
      description={`${siteConfig.name} — ${siteConfig.tagline}. Spoken English classes in ${siteConfig.city}. Online and offline batches available.`}
    >
      <Hero />
      <StatsSection />
      <CoursesSection limit={4} />
      <WhyChooseUs />
      <LearningMethodology />
      <SpeakingActivities />
      <BatchesSection limit={5} />
      <TrainersSection />
      <StudentTransformation />
      <TestimonialsSection />
      <ReviewsSection />
      <GallerySection limit={6} />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <DemoSalesSection />
    </MainLayout>
  );
}
