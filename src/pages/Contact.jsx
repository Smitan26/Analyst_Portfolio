import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", company: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.company) {
      setError("Submission blocked.");
      return;
    }

    if (form.subject.trim().length < 3 || form.message.trim().length < 10) {
      setError("Please provide a clear subject and message before sending.");
      return;
    }

    setError("");
    const subject = encodeURIComponent(form.subject.trim() + " | Portfolio enquiry from " + form.name.trim());
    const body = encodeURIComponent(form.message.trim() + "\n\nFrom: " + form.name.trim() + " (" + form.email.trim() + ")");
    window.location.href = "mailto:" + profile.email + "?subject=" + subject + "&body=" + body;
    setSent(true);
  };

  return (
    <div className="wrap">
      <PageHeader
        kicker="Contact and Professional Links"
        title="Let's Discuss Analytics Opportunities"
        lead="Open to data analyst roles, internships, and project collaborations."
      />

      <div className="contact-grid">
        <section className="card">
          <h2>Professional Details</h2>
          <dl className="contact-list">
            <div><dt>Email</dt><dd><a href={"mailto:" + profile.email}>{profile.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={"tel:" + profile.phone.replace(/\s/g, "")}>{profile.phone}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noreferrer">Open profile</a></dd></div>
            <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noreferrer">Open profile</a></dd></div>
            <div><dt>Location</dt><dd>{profile.location}</dd></div>
          </dl>
          <a className="btn primary contact-resume-btn" href={profile.resume} target="_blank" rel="noreferrer">View Resume</a>
        </section>

        <form className="card form" onSubmit={onSubmit}>
          <h2>Contact Form</h2>
          <label>Your name
            <input name="name" value={form.name} onChange={onChange} required autoComplete="name" />
          </label>
          <label>Your email
            <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
          </label>
          <label>Subject
            <input name="subject" value={form.subject} onChange={onChange} required minLength={3} />
          </label>
          <label className="assistive-hidden" aria-hidden="true">
            Company
            <input name="company" value={form.company} onChange={onChange} tabIndex={-1} autoComplete="off" />
          </label>
          <label>Message
            <textarea name="message" rows="6" value={form.message} onChange={onChange} required minLength={10} />
          </label>
          <button className="btn primary" type="submit">Send Message</button>
          {error && <p className="note" role="alert">{error}</p>}
          {sent && <p className="note" role="status">Your email app should open with the message filled in. If it does not, email {profile.email} directly.</p>}
        </form>
      </div>
    </div>
  );
}
