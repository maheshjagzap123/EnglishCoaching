import { Users, MessageSquare, Clock, Monitor, Star, ThumbsUp, BookOpen, Smile } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import "./WhyChooseUs.css";

const reasons = [
  { icon: <Users size={22} />, title: "Small Batch Sizes", desc: "Limited students per batch ensures every learner gets personal attention and speaking time." },
  { icon: <MessageSquare size={22} />, title: "Practical Speaking Focus", desc: "Every class includes real speaking activities — not just theory. You speak from day one." },
  { icon: <Star size={22} />, title: "Experienced Trainers", desc: "Our trainers bring years of experience in English communication and coaching." },
  { icon: <Clock size={22} />, title: "Flexible Batch Timings", desc: "Morning, evening, weekend, and online batches to fit your schedule." },
  { icon: <Monitor size={22} />, title: "Online & Offline Classes", desc: "Choose the mode that works for you — both offer the same quality of learning." },
  { icon: <ThumbsUp size={22} />, title: "Personalised Feedback", desc: "Trainers provide individual feedback on your speaking, grammar, and pronunciation." },
  { icon: <Smile size={22} />, title: "Beginner Friendly", desc: "No prior English background needed. We start from where you are comfortable." },
  { icon: <BookOpen size={22} />, title: "Structured Curriculum", desc: "A clear week-by-week plan so you always know what you are learning and why." },
];

export default function WhyChooseUs() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section section--soft" id="why-us" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="What Makes FluentRise Different"
          subtitle="We focus on practical communication skills, not just textbook English."
        />
        <div className={`why-grid stagger`}>
          {reasons.map((r) => (
            <div key={r.title} className={`why-card fade-up${visible ? " visible" : ""}`}>
              <div className="why-card__icon">{r.icon}</div>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
