import { MessageCircle, Globe, Users, Search, Smartphone, TrendingUp } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import { openWhatsApp } from "../../utils/whatsapp";
import "./DemoSalesSection.css";

const benefits = [
  { icon: <Globe size={20} />, text: "Professional online presence for your institute" },
  { icon: <Users size={20} />, text: "Make it easier for students to discover your programs" },
  { icon: <MessageCircle size={20} />, text: "Easy WhatsApp enquiries directly from your website" },
  { icon: <Search size={20} />, text: "Better visibility on Google for local searches" },
  { icon: <Smartphone size={20} />, text: "Mobile-friendly experience for every visitor" },
  { icon: <TrendingUp size={20} />, text: "Turn website visitors into enquiries and admissions" },
];

// Only shown when demoMode is true
export default function DemoSalesSection() {
  if (!siteConfig.demoMode) return null;

  const waMsg = "Hello! I saw your demo website for English coaching institutes. I am interested in getting a similar website for my institute. Could we discuss the details?";

  return (
    <section className="demo-sales">
      <div className="container demo-sales__inner">
        <div className="demo-sales__badge">✦ For Institute Owners</div>
        <h2 className="demo-sales__title">
          Imagine This Website With<br />
          <span>Your Institute's Brand</span>
        </h2>
        <p className="demo-sales__subtitle">
          We can customise this experience with your institute name, logo, programs, trainers,
          batch timings, student reviews, photos, location and contact details.
        </p>

        <div className="demo-sales__benefits">
          {benefits.map((b) => (
            <div key={b.text} className="demo-sales__benefit">
              <span className="demo-sales__benefit-icon">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        <div className="demo-sales__ctas">
          <button className="btn btn--gold btn--lg" onClick={() => openWhatsApp(waMsg)}>
            <MessageCircle size={18} /> Talk on WhatsApp
          </button>
          <button className="btn demo-sales__outline btn--lg" onClick={() => openWhatsApp(waMsg)}>
            Get My Custom Website
          </button>
        </div>

        <p className="demo-sales__note">
          This is a demo website created to showcase what an English coaching institute website can look like.
          All content, names, and data shown are fictional and for demonstration purposes only.
        </p>
      </div>
    </section>
  );
}
