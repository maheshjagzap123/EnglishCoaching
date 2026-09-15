import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Batches", to: "/batches" },
  { label: "Trainers", to: "/trainers" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <>
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">FR</span>
          <span className="navbar__logo-text">{siteConfig.shortName}</span>
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link${location.pathname === l.to ? " active" : ""}`}
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
          <Link to="/free-demo" className="btn btn--primary btn--sm">
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

    <div className={`navbar__mobile${open ? " open" : ""}`} aria-hidden={!open}>
      <nav className="navbar__mobile-nav">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`navbar__mobile-link${location.pathname === l.to ? " active" : ""}`}
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
