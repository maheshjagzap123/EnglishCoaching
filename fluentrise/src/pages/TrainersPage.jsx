import MainLayout from "../layouts/MainLayout";
import TrainersSection from "../components/Sections/TrainersSection";
import CTASection from "../components/Sections/CTASection";
import { siteConfig } from "../config/siteConfig";
import "./AboutPage.css";

export default function TrainersPage() {
  return (
    <MainLayout title="Our Trainers" description={`Meet the experienced English trainers at ${siteConfig.name}.`}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Trainers</span>
          <h1 className="page-hero__title">Learn From the Best</h1>
          <p className="page-hero__subtitle">
            Our trainers bring years of experience and a genuine passion for helping students communicate with confidence.
          </p>
        </div>
      </div>
      <TrainersSection />
      <CTASection />
    </MainLayout>
  );
}
