import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import trainers from "../../data/trainers";
import "./TrainersSection.css";

const colorMap = {
  blue: { bg: "#eff6ff", text: "#1d4ed8" },
  purple: { bg: "#f5f3ff", text: "#7c3aed" },
  green: { bg: "#f0fdf4", text: "#16a34a" },
};

export default function TrainersSection() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section section--soft" id="trainers" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Our Trainers"
          title="Learn From Experienced Communicators"
          subtitle="Our trainers bring real-world experience and a passion for helping students find their voice."
        />
        <div className={`trainers-grid stagger`}>
          {trainers.map((t) => {
            const c = colorMap[t.color] || colorMap.blue;
            return (
              <div key={t.id} className={`trainer-card fade-up${visible ? " visible" : ""}`}>
                <div className="trainer-card__avatar" style={{ background: c.bg, color: c.text }}>
                  {t.image
                    ? <img src={t.image} alt={t.name} />
                    : <span>{t.initials}</span>
                  }
                </div>
                <div className="trainer-card__body">
                  <h3 className="trainer-card__name">{t.name}</h3>
                  <p className="trainer-card__role">{t.role}</p>
                  <p className="trainer-card__spec">{t.specialization}</p>
                  <p className="trainer-card__exp">{t.experience} Experience</p>
                  <p className="trainer-card__bio">{t.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
