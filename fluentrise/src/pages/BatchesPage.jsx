import MainLayout from "../layouts/MainLayout";
import BatchesSection from "../components/Sections/BatchesSection";
import CTASection from "../components/Sections/CTASection";
import { siteConfig } from "../config/siteConfig";
import "./AboutPage.css";

export default function BatchesPage() {
  return (
    <MainLayout title="Batch Timings" description={`View all batch timings at ${siteConfig.name}. Morning, evening, weekend and online batches available.`}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Batch Timings</span>
          <h1 className="page-hero__title">Choose Your Batch</h1>
          <p className="page-hero__subtitle">
            We offer multiple batch options so you can learn without disrupting your daily routine.
          </p>
        </div>
      </div>
      <BatchesSection />
      <CTASection />
    </MainLayout>
  );
}
