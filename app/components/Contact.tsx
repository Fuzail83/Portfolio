"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    ref.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        "service_dfi1w1f",
        "template_5s11jjb",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "zx8-ghAUzWwyU9vbE",
      );

      setStatus("done");
      setForm({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.log(err);
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="sec-header reveal">
          <h2 className="sec-title">Get In Touch</h2>
          <div className="sec-line" />
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <p className="contact-intro">
              I&apos;m open to new opportunities, freelance projects, or just a
              good tech conversation. Whether it&apos;s a React app, a WordPress
              site, or a full MERN project — feel free to reach out!
            </p>
            <div className="contact-items">
              {[
                {
                  icon: "✉️",
                  label: "EMAIL",
                  val: (
                    <a href="mailto:fuzailakhtar@email.com">
                      fuzailakhtar0497@email.com
                    </a>
                  ),
                },
                {
                  icon: "💼",
                  label: "LINKEDIN",
                  val: (
                    <a
                      href="www.linkedin.com/in/fuzail-akhtar-26b6b715a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/fuzailakhtar
                    </a>
                  ),
                },
                {
                  icon: "🐙",
                  label: "GITHUB",
                  val: (
                    <a
                      href="https://github.com/Fuzail83"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/fuzailakhtar
                    </a>
                  ),
                },
                {
                  icon: "📍",
                  label: "LOCATION",
                  val: <span>India — Available Remotely</span>,
                },
              ].map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon-box">{item.icon}</div>
                  <div>
                    <div className="ci-label">{item.label}</div>
                    <div className="ci-val">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">YOUR NAME</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">PHONE NUMBER</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">MESSAGE</label>
                <textarea
                  className="form-textarea"
                  placeholder="Hi Fuzail, I'd like to discuss..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <button
                className={`form-submit${status === "done" ? " success" : ""}`}
                onClick={handleSubmit}
                disabled={status === "sending"}
              >
                {status === "idle"
                  ? "Send Message →"
                  : status === "sending"
                    ? "Sending..."
                    : "✓ Message Sent!"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
