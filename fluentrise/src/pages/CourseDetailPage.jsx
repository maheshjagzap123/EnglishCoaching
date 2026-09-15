import { useParams, Link } from "react-router-dom";
import { Clock, Monitor, CheckCircle, Users, MessageCircle, ArrowLeft } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import CTASection from "../components/Sections/CTASection";
import { openWhatsApp } from "../utils/whatsapp";
import { trackEvent, events } from "../utils/analytics";
import courses from "../data/courses";
import trainers from "../data/trainers";
import "./CourseDetailPage.css";

export default function CourseDetailPage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <MainLayout title="Program Not Found">
        <div className="container" style={{ padding: "8rem 1.5rem", textAlign: "center" }}>
          <h1>Program Not Found</h1>
          <p style={{ marginTop: "1rem", color: "var(--color-text-muted)" }}>
            The program you are looking for does not exist.
          </p>
          <Link to="/programs" className="btn btn--primary" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
            View All Programs
          </Link>
        </div>
      </MainLayout>
    );
  }

  const waMsg = `Hello! I am interested in the ${course.title} program. Could you please share details about batch timings and fees?`;

  return (
    <MainLayout title={course.title} description={course.description}>
      <div className="course-detail-hero">
        <div className="container">
          <Link to="/programs" className="course-detail__back">
            <ArrowLeft size={16} /> All Programs
          </Link>
          <div className="course-detail-hero__inner">
            <div>
              <span className="section-label">{course.level}</span>
              <h1 className="course-detail__title">{course.title}</h1>
              <p className="course-detail__desc">{course.description}</p>
              <div className="course-detail__meta">
                <span><Clock size={15} /> {course.duration}</span>
                <span><Monitor size={15} /> {course.mode}</span>
                <span><Users size={15} /> Small Batches</span>
              </div>
              <div className="course-detail__ctas">
                <Link to="/free-demo" className="btn btn--primary btn--lg"
                  onClick={() => trackEvent(events.CLICK_BOOK_DEMO, { program: course.id })}>
                  Book Free Demo
                </Link>
                <button className="btn btn--whatsapp btn--lg" onClick={() => openWhatsApp(waMsg)}>
                  <MessageCircle size={18} /> Ask on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container course-detail-grid">
          <div className="course-detail-main">
            {/* Who is it for */}
            <div className="course-detail-block">
              <h2>Who Is This Program For?</h2>
              <ul>
                {course.whoIsItFor.map((w) => (
                  <li key={w}><CheckCircle size={15} /> {w}</li>
                ))}
              </ul>
            </div>

            {/* What you will learn */}
            <div className="course-detail-block">
              <h2>What You Will Learn</h2>
              <ul>
                {course.highlights.map((h) => (
                  <li key={h}><CheckCircle size={15} /> {h}</li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div className="course-detail-block">
              <h2>Program Curriculum</h2>
              <ol className="course-curriculum">
                {course.curriculum.map((c, i) => (
                  <li key={i}>
                    <span className="curriculum-num">{i + 1}</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="course-detail-sidebar">
            <div className="course-sidebar-card">
              <h3>Program Details</h3>
              <div className="sidebar-detail"><strong>Level</strong><span>{course.level}</span></div>
              <div className="sidebar-detail"><strong>Duration</strong><span>{course.duration}</span></div>
              <div className="sidebar-detail"><strong>Mode</strong><span>{course.mode}</span></div>
              <div className="sidebar-detail"><strong>Batch Size</strong><span>Small (Limited seats)</span></div>
              <div className="sidebar-detail"><strong>Certificate</strong><span>Yes, on completion</span></div>
              <Link to="/free-demo" className="btn btn--primary" style={{ width: "100%", justifyContent: "center", marginTop: "1rem" }}>
                Book Free Demo
              </Link>
              <button className="btn btn--whatsapp" style={{ width: "100%", justifyContent: "center", marginTop: "0.625rem" }}
                onClick={() => openWhatsApp(waMsg)}>
                <MessageCircle size={15} /> Ask on WhatsApp
              </button>
            </div>

            <div className="course-sidebar-card">
              <h3>Your Trainer</h3>
              {trainers.slice(0, 1).map((t) => (
                <div key={t.id} className="sidebar-trainer">
                  <div className="sidebar-trainer__avatar">{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.experience} Experience</span>
                    <span>{t.specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Ready to Start the ${course.title} Program?`}
        subtitle="Book a free demo class and experience our teaching style before you enrol."
      />
    </MainLayout>
  );
}
