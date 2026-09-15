import { Link } from "react-router-dom";
import { Sun, Sunset, Calendar, Monitor, Clock } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import batches from "../../data/batches";
import "./BatchesSection.css";

const iconMap = {
  sunrise: <Sun size={22} />,
  sun: <Sun size={22} />,
  sunset: <Sunset size={22} />,
  calendar: <Calendar size={22} />,
  monitor: <Monitor size={22} />,
};

const colorMap = {
  orange: "#ea580c",
  yellow: "#ca8a04",
  purple: "#7c3aed",
  blue: "#1d4ed8",
  green: "#16a34a",
};

export default function BatchesSection({ limit }) {
  const { ref, visible } = useScrollAnimation();
  const displayed = limit ? batches.slice(0, limit) : batches;

  return (
    <section className="section" id="batches" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Batch Timings"
          title="Choose a Batch That Fits Your Schedule"
          subtitle="We offer multiple batch options so you can learn without disrupting your daily routine."
        />
        <div className={`batches-grid stagger`}>
          {displayed.map((b) => (
            <div
              key={b.id}
              className={`batch-card fade-up${visible ? " visible" : ""}`}
              style={{ "--batch-color": colorMap[b.color] || colorMap.blue }}
            >
              <div className="batch-card__icon">{iconMap[b.icon] || <Clock size={22} />}</div>
              <h3 className="batch-card__name">{b.name}</h3>
              <p className="batch-card__time">{b.time}</p>
              <p className="batch-card__days">{b.days}</p>
              <div className="batch-card__footer">
                <span className="batch-card__mode">{b.mode}</span>
                <span className="batch-card__seats">{b.seats}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/free-demo" className="btn btn--primary btn--lg">
            Book Free Demo Class
          </Link>
        </div>
      </div>
    </section>
  );
}
