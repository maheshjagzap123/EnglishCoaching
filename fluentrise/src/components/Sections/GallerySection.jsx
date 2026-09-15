import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import { galleryItems, galleryCategories } from "../../data/gallery";
import "./GallerySection.css";

export default function GallerySection({ limit }) {
  const [active, setActive] = useState("All");
  const { ref, visible } = useScrollAnimation();

  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="section section--soft" id="gallery" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Gallery"
          title="Life at FluentRise"
          subtitle="A glimpse into our classroom activities, speaking sessions, and student experiences."
        />
        <div className="gallery-filters">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={`gallery-grid stagger`}>
          {displayed.map((item) => (
            <div key={item.id} className={`gallery-item fade-up${visible ? " visible" : ""}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-item__overlay">
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
