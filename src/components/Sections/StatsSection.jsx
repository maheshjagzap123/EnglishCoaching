import { siteConfig } from "../../config/siteConfig";
import { useCountUp } from "../../hooks/useCountUp";
import "./StatsSection.css";

function StatItem({ stat }) {
  const { ref, value } = useCountUp(stat.count || 0);
  const display = stat.count ? `${value}${stat.suffix || ""}` : stat.value;

  return (
    <div className="stats__item" ref={ref}>
      <span className="stats__value">
        {display}
        {stat.sample && <sup className="stats__star">*</sup>}
      </span>
      <span className="stats__label">{stat.label}</span>
    </div>
  );
}

export default function StatsSection() {
  const hasSample = siteConfig.stats.some((s) => s.sample);
  return (
    <section className="stats section--soft" aria-label="Key figures">
      <div className="container">
        <div className="stats__grid">
          {siteConfig.stats.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </div>
        {hasSample && <p className="stats__note">* Sample / demo figures</p>}
      </div>
    </section>
  );
}
