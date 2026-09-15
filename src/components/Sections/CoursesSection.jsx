import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import CourseCard from "./CourseCard";
import courses from "../../data/courses";

export default function CoursesSection({ limit = 4 }) {
  const { ref, visible } = useScrollAnimation();
  const displayed = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="section" id="programs" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Our Programs"
          title="Find the Right Program for You"
          subtitle="From beginner spoken English to IELTS preparation — we have a program for every goal and every level."
        />
        <div className={`grid-4 stagger${visible ? " visible" : ""}`}>
          {displayed.map((c) => (
            <div key={c.id} className={`fade-up${visible ? " visible" : ""}`}>
              <CourseCard course={c} />
            </div>
          ))}
        </div>
        {limit && courses.length > limit && (
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link to="/programs" className="btn btn--secondary btn--lg">
              View All Programs
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
