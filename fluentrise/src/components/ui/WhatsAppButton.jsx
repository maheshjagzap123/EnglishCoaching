import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <button
      className="wa-float"
      onClick={() => openWhatsApp()}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="wa-float__label">WhatsApp</span>
    </button>
  );
}
