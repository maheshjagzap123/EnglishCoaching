import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import { trackEvent, events } from "../../utils/analytics";
import SectionHeading from "../ui/SectionHeading";
import "./ContactSection.css";

const initForm = { name: "", phone: "", email: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: Connect to Formspree / API / Google Sheets
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    trackEvent("submit_contact_form");
  };

  return (
    <section className="section section--soft" id="contact">
      <div className="container">
        <SectionHeading
          label="Contact Us"
          title="Get in Touch"
          subtitle="Have a question? We are happy to help. Reach out via WhatsApp, phone, or the form below."
        />
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__item">
              <MapPin size={18} />
              <div>
                <strong>Address</strong>
                <span>{siteConfig.address}</span>
              </div>
            </div>
            <div className="contact-info__item">
              <Phone size={18} />
              <div>
                <strong>Phone</strong>
                <a href={`tel:${siteConfig.phoneRaw}`} onClick={() => trackEvent(events.CLICK_PHONE)}>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="contact-info__item">
              <Mail size={18} />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>
            <div className="contact-info__item">
              <Clock size={18} />
              <div>
                <strong>Working Hours</strong>
                <span>{siteConfig.workingHours}</span>
              </div>
            </div>

            <div className="contact-social">
              <button className="btn btn--whatsapp" onClick={() => openWhatsApp()}>
                <MessageCircle size={16} /> Chat on WhatsApp
              </button>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
                className="btn btn--ghost" onClick={() => trackEvent(events.CLICK_INSTAGRAM)}>
              <InstagramIcon /> Instagram
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer"
                className="btn btn--ghost" onClick={() => trackEvent(events.CLICK_FACEBOOK)}>
              <FacebookIcon /> Facebook
              </a>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                src={siteConfig.googleMapsEmbed}
                title="Location Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onClick={() => trackEvent(events.CLICK_GOOGLE_MAPS)}
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === "success" ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button className="btn btn--whatsapp" onClick={() => openWhatsApp()}>
                  <MessageCircle size={16} /> Continue on WhatsApp
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact-form__title">Send Us a Message</h3>
                <div className="form-group">
                  <label htmlFor="c-name">Your Name *</label>
                  <input id="c-name" name="name" type="text" placeholder="Your full name"
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-phone">Phone Number *</label>
                  <input id="c-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email Address</label>
                  <input id="c-email" name="email" type="email" placeholder="your@email.com"
                    value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="c-message">Message *</label>
                  <textarea id="c-message" name="message" rows={4} placeholder="How can we help you?"
                    value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn--primary btn--lg" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
