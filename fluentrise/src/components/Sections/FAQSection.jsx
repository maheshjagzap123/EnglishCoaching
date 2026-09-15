import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import faqs from "../../data/faqs";
import "./FAQSection.css";

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="section" id="faq" ref={ref}>
      <div className="container">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before joining. Still have questions? Chat with us on WhatsApp."
        />
        <div className={`faq-list fade-up${visible ? " visible" : ""}`}>
          {faqs.map((f) => (
            <div key={f.id} className={`faq-item${open === f.id ? " open" : ""}`}>
              <button
                className="faq-item__question"
                onClick={() => setOpen(open === f.id ? null : f.id)}
                aria-expanded={open === f.id}
              >
                <span>{f.question}</span>
                <ChevronDown size={18} className="faq-item__chevron" />
              </button>
              <div className="faq-item__answer">
                <p>{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
