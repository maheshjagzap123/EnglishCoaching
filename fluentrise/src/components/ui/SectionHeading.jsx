export default function SectionHeading({ label, title, subtitle, center = true, light = false }) {
  return (
    <div className={`section-header${center ? "" : " section-header--left"}`}>
      {label && <span className={`section-label${light ? " section-label--light" : ""}`}>{label}</span>}
      <h2 className={`section-title${light ? " section-title--white" : ""}`}>{title}</h2>
      {center && <div className="divider" style={light ? { background: "rgba(255,255,255,0.4)" } : {}} />}
      {subtitle && (
        <p className={`section-subtitle${light ? " section-subtitle--white" : ""}`} style={{ marginTop: "1rem" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
