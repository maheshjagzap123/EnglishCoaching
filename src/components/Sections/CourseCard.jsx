import { Link } from "react-router-dom";
import { Clock, Monitor, ArrowRight, CheckCircle } from "lucide-react";
import "./CourseCard.css";

const colorMap = {
  blue: "#102A43",
  purple: "#1E4976",
  green: "#16a34a",
  orange: "#ea580c",
  red: "#dc2626",
  teal: "#0d9488",
  indigo: "#1E4976",
  yellow: "#D9A030",
};

export default function CourseCard({ course }) {
  const color = colorMap[course.color] || colorMap.blue;
  return (
    <article className="course-card card" style={{ "--card-color": color }}>
      {course.badge && <span className="badge course-card__badge">{course.badge}</span>}
      <div className="course-card__header">
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__desc">{course.shortDesc}</p>
      </div>
      <div className="course-card__meta">
        <span className="course-card__level">{course.level}</span>
        <span className="course-card__meta-item"><Clock size={13} /> {course.duration}</span>
        <span className="course-card__meta-item"><Monitor size={13} /> {course.mode}</span>
      </div>
      <ul className="course-card__highlights">
        {course.highlights.slice(0, 4).map((h) => (
          <li key={h}><CheckCircle size={13} /> {h}</li>
        ))}
      </ul>
      <Link to={`/programs/${course.id}`} className="course-card__cta">
        View Course <ArrowRight size={15} />
      </Link>
    </article>
  );
}
