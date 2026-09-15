import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteConfig } from "../../config/siteConfig";
import "./StatsSection.css";

export default function StatsSection() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="stats section--soft" ref={ref}>
      <div className="container stats__grid stagger">
        {siteConfig.stats.map((s) => (
          <div key={s.label} className={`stats__item fade-up${visible ? " visible" : ""}`}>
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
