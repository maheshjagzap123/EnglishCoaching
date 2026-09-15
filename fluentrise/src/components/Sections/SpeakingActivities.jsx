import { MessageCircle, Users, Mic, Presentation, BookOpen, Gamepad2, Video, Award } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import SectionHeading from "../ui/SectionHeading";
import "./SpeakingActivities.css";

const activities = [
  { icon: <MessageCircle size={20} />, title: "Conversation Practice", desc: "Structured two-way conversations on everyday topics." },
  { icon: <Users size={20} />, title: "Group Discussions", desc: "Discuss real-world topics in small groups to build fluency." },
  { icon: <Mic size={20} />, title: "Public Speaking", desc: "Short speeches and presentations to build confidence." },
  { icon: <Award size={20} />, title: "Debate Sessions", desc: "Argue both sides of a topic to sharpen critical thinking." },
  { icon: <Video size={20} />, title: "Role Plays", desc: "Simulate real-life situations — interviews, shopping, travel." },
  { icon: <Presentation size={20} />, title: "Interview Practice", desc: "Mock HR and technical interviews with feedback." },
  { icon: <BookOpen size={20} />, title: "Vocabulary Games", desc: "Fun activities to build and retain new vocabulary." },
  { icon: <Gamepad2 size={20} />, title: "Story Building", desc: "Collaborative storytelling to improve creativity and fluency." },
];

export default function SpeakingActivities() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="section section--soft" id="activities" ref={ref}>
      <div className="container">
        <SectionHeading
          label="Speaking Activities"
          title="Learn by Doing, Not Just Listening"
          subtitle="Every class includes practical activities that make you speak, think, and communicate in English."
        />
        <div className={`activities-grid stagger`}>
          {activities.map((a) => (
            <div key={a.title} className={`activity-card fade-up${visible ? " visible" : ""}`}>
              <div className="activity-card__icon">{a.icon}</div>
              <div>
                <h3 className="activity-card__title">{a.title}</h3>
                <p className="activity-card__desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
