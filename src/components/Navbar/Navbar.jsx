import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Navbar.css";

const navLinks = [
  { label: "Courses", to: "/programs" },
  { label: "How We Teach", to: "/#how-we-teach" },
  { label: "Success Stories", to: "/#success-stories" },
  { label: "Trainers", to: "/trainers" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ hasBanner = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  // Smooth-scroll to a section when a hash link is clicked
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // small delay so layout is ready after route/paint
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      }
    }
  }, [location]);

  const isActive = (to) => {
    if (to.includes("#")) return false;
    return location.pathname === to;
  };

  const logoInitials =
    (siteConfig.shortName || "V").slice(0, 2).toUpperCase();

  return (
    <>
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}${hasBanner ? " navbar--has-banner" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">{logoInitials}</span>
          <span className="navbar__logo-text">{siteConfig.shortName}</span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link${isActive(l.to) ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={`tel:${siteConfig.phoneRaw}`} className="navbar__phone" aria-label="Call us">
            <Phone size={15} />
            <span>{siteConfig.phone}</span>
          </a>
          <Link to="/free-demo" className="btn btn--gold btn--sm">
            Book Free Demo
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>

    <div className={`navbar__mobile${open ? " open" : ""}${hasBanner ? " navbar__mobile--has-banner" : ""}`} aria-hidden={!open}>
      <nav className="navbar__mobile-nav">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`navbar__mobile-link${isActive(l.to) ? " active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="navbar__mobile-ctas">
        <Link to="/free-demo" className="btn btn--primary">Book Free Demo</Link>
        <button className="btn btn--whatsapp" onClick={() => openWhatsApp()}>WhatsApp Us</button>
      </div>
    </div>
    </>
  );
}
