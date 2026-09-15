import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";
import { trackEvent, events } from "../../utils/analytics";
import courses from "../../data/courses";
import batches from "../../data/batches";
import "./DemoBookingForm.css";

const init = {
  name: "", phone: "", email: "",
  course: "", batch: "", mode: "", date: "", message: "",
};

export default function DemoBookingForm() {
  const [form, setForm] = useState(init);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    // TODO: Connect to Formspree / API / Google Sheets
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    trackEvent(events.SUBMIT_DEMO_FORM, { course: form.course });
  };

  if (status === "success") {
    return (
      <div className="demo-success">
        <div className="demo-success__icon">🎉</div>
        <h3>Demo Class Booked!</h3>
        <p>
          Thank you, <strong>{form.name}</strong>! Your free demo class request has been received.
          We will contact you shortly to confirm the details.
        </p>
        <button
          className="btn btn--whatsapp btn--lg"
          onClick={() => openWhatsApp(`Hello! I just booked a free demo class for ${form.course || "Spoken English"}. My name is ${form.name}.`)}
        >
          <MessageCircle size={18} /> Continue on WhatsApp
        </button>
      </div>
    );
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit} noValidate>
      <div className="demo-form__row">
        <div className="form-group">
          <label htmlFor="d-name">Full Name *</label>
          <input id="d-name" name="name" type="text" placeholder="Your full name"
            value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="d-phone">Mobile Number *</label>
          <input id="d-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
            value={form.phone} onChange={handleChange} required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="d-email">Email Address</label>
        <input id="d-email" name="email" type="email" placeholder="your@email.com"
          value={form.email} onChange={handleChange} />
      </div>

      <div className="demo-form__row">
        <div className="form-group">
          <label htmlFor="d-course">Program Interested In *</label>
          <select id="d-course" name="course" value={form.course} onChange={handleChange} required>
            <option value="">Select a program</option>
            {courses.map((c) => <option key={c.id} value={c.title}>{c.title}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="d-batch">Preferred Batch</label>
          <select id="d-batch" name="batch" value={form.batch} onChange={handleChange}>
            <option value="">Select a batch</option>
            {batches.map((b) => <option key={b.id} value={b.name}>{b.name} — {b.time}</option>)}
          </select>
        </div>
      </div>

      <div className="demo-form__row">
        <div className="form-group">
          <label htmlFor="d-mode">Preferred Mode</label>
          <select id="d-mode" name="mode" value={form.mode} onChange={handleChange}>
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline (Classroom)</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="d-date">Preferred Date</label>
          <input id="d-date" name="date" type="date" value={form.date} onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="d-message">Message (Optional)</label>
        <textarea id="d-message" name="message" rows={3}
          placeholder="Any specific questions or requirements?"
          value={form.message} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn--primary btn--lg demo-form__submit"
        disabled={status === "loading"}>
        {status === "loading" ? "Booking…" : <><Send size={16} /> Book My Free Demo</>}
      </button>

      <p className="demo-form__note">
        Or <button type="button" className="demo-form__wa-link" onClick={() => openWhatsApp()}>
          chat on WhatsApp
        </button> to book instantly.
      </p>
    </form>
  );
}
