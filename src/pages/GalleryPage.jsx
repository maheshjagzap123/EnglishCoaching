import MainLayout from "../layouts/MainLayout";
import GallerySection from "../components/Sections/GallerySection";
import CTASection from "../components/Sections/CTASection";
import { siteConfig } from "../config/siteConfig";
import "./AboutPage.css";

export default function GalleryPage() {
  return (
    <MainLayout title="Gallery" description={`View photos from ${siteConfig.name} — classroom activities, speaking sessions, and student events.`}>
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Gallery</span>
          <h1 className="page-hero__title">Life at Veyora</h1>
          <p className="page-hero__subtitle">
            A glimpse into our classroom activities, speaking sessions, workshops, and student experiences.
          </p>
        </div>
      </div>
      <GallerySection />
      <CTASection />
    </MainLayout>
  );
}
