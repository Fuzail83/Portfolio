"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import ContactFormValidationRules from "../ValidationRules/ContactFormValidationRules";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
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

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "");

      value = value.slice(0, 12);
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    const validationErrors = ContactFormValidationRules(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    setStatus("sending");

    try {
      //  Admin mail
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

      //  User auto-reply mail
      await emailjs.send(
        "service_dfi1w1f",
        "template_ukrbeea",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
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
                    name="name"
                    className="form-input"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input
                    name="email"
                    className="form-input"
                    type="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "5px",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">PHONE NUMBER</label>
                <input
                  name="phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  type="tel"
                  className="form-input"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label className="form-label">MESSAGE</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Hi Fuzail, I'd like to discuss..."
                  value={form.message}
                  onChange={handleChange}
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
