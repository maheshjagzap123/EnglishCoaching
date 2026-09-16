import { useState } from "react";
import { Play } from "lucide-react";
import { featuredVideo, videos } from "../../data/videos";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./VideoSection.css";

// Lazy YouTube facade: renders a thumbnail + play button, and only
// mounts the real iframe player after the user clicks. Avoids loading
// many YouTube players at once.
function LazyYouTube({ id, title, thumb, className }) {
  const [playing, setPlaying] = useState(false);
  const poster =
    thumb || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className={`ytfacade ytfacade--playing ${className || ""}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`ytfacade ${className || ""}`}
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      style={{ backgroundImage: `url(${poster})` }}
    >
      <span className="ytfacade__overlay" />
      <span className="ytfacade__play">
        <Play size={22} fill="currentColor" />
      </span>
      <span className="ytfacade__title">{title}</span>
    </button>
  );
}

export default function VideoSection() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="videos section" id="english-in-action" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">English in Action</span>
          <h2 className="section-title">See English in Action</h2>
          <div className="divider" />
          <p className="section-subtitle" style={{ margin: "1rem auto 0" }}>
            A look at how practical, speaking-first lessons actually feel.
          </p>
        </div>

        <div className={`videos__layout fade-up${visible ? " visible" : ""}`}>
          {/* Featured 16:9 */}
          <div className="videos__featured">
            <LazyYouTube
              id={featuredVideo.youtubeId}
              title={featuredVideo.title}
              className="videos__featured-player"
            />
            <div className="videos__featured-meta">
              <span className="videos__cat">{featuredVideo.category}</span>
              <h3>{featuredVideo.title}</h3>
              <p>{featuredVideo.desc}</p>
            </div>
          </div>

          {/* Supporting grid */}
          <div className="videos__grid">
            {videos.slice(0, 4).map((v) => (
              <div key={v.id} className="videos__item">
                <LazyYouTube id={v.youtubeId} title={v.title} />
                <div className="videos__item-meta">
                  <span className="videos__cat">{v.category}</span>
                  <h4>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="videos__note">Sample videos for demonstration.</p>
      </div>
    </section>
  );
}
