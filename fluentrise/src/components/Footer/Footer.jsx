import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./Footer.css";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Batch Timings", to: "/batches" },
  { label: "Our Trainers", to: "/trainers" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
  { label: "Book Free Demo", to: "/free-demo" },
];

const courseLinks = [
  { label: "Basic Spoken English", to: "/programs/basic-spoken-english" },
  { label: "Advanced Spoken English", to: "/programs/advanced-spoken-english" },
  { label: "English Grammar", to: "/programs/english-grammar" },
  { label: "Interview Preparation", to: "/programs/interview-preparation" },
  { label: "IELTS Preparation", to: "/programs/ielts-preparation" },
  { label: "Business English", to: "/programs/business-english" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">FR</span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="footer__tagline">{siteConfig.tagline}</p>
          <p className="footer__desc">{siteConfig.description}</p>
          <div className="footer__social">
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <button onClick={() => openWhatsApp()} aria-label="WhatsApp">
              <MessageCircle size={18} />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="footer__col">
          <h3 className="footer__heading">Our Programs</h3>
          <ul>
            {courseLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__heading">Contact Us</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={15} />
              <span>{siteConfig.address}</span>
            </li>
            <li>
              <Phone size={15} />
              <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
            </li>
            <li>
              <Mail size={15} />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Clock size={15} />
              <span>{siteConfig.workingHours}</span>
            </li>
          </ul>
          <button className="btn btn--whatsapp btn--sm footer__wa" onClick={() => openWhatsApp()}>
            <MessageCircle size={15} /> Chat on WhatsApp
          </button>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            {" · "}
            <Link to="/privacy">Privacy Policy</Link>
            {" · "}
            <Link to="/terms">Terms of Use</Link>
          </p>
          {siteConfig.demoMode && (
            <span className="footer__demo-badge">Demo Website</span>
          )}
        </div>
      </div>
    </footer>
  );
}
