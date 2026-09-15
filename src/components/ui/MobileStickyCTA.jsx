import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";
import "./MobileStickyCTA.css";

export default function MobileStickyCTA() {
  return (
    <div className="mobile-sticky" role="complementary" aria-label="Quick actions">
      <Link to="/free-demo" className="mobile-sticky__btn mobile-sticky__btn--primary">
        Book Free Demo
      </Link>
      <button
        className="mobile-sticky__btn mobile-sticky__btn--whatsapp"
        onClick={() => openWhatsApp()}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={18} />
        WhatsApp
      </button>
    </div>
  );
}
