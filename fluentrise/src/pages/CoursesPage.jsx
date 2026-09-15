import MainLayout from "../layouts/MainLayout";
import CoursesSection from "../components/Sections/CoursesSection";
import CTASection from "../components/Sections/CTASection";
import { siteConfig } from "../config/siteConfig";
import "./AboutPage.css";

export default function CoursesPage() {
  return (
    <MainLayout
      title="Courses"
      description={`Explore all English programs at ${siteConfig.name} — Spoken English, IELTS, Business English, Interview Preparation and more.`}
    >
      <div className="page-hero">
        <div className="container">
          <span className="section-label">Our Programs</span>
          <h1 className="page-hero__title">English Programs for Every Goal</h1>
          <p className="page-hero__subtitle">
            From beginner spoken English to IELTS preparation — find the program that matches your goal and level.
          </p>
        </div>
      </div>
      <CoursesSection limit={null} />
      <CTASection />
    </MainLayout>
  );
}
