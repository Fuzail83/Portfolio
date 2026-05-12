"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

  // ✅ FINAL HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_dfi1w1f",
        "template_5s11jjb",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "zx8-ghAUzWwyU9vbE",
      )
      .then(() => {
        setStatus("done");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to send message");
      });
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="sec-header reveal">
          <h2 className="sec-title">Get In Touch</h2>
          <div className="sec-line" />
        </div>

        <div className="contact-grid">
          {/* LEFT SIDE */}
          <div className="reveal">
            <p className="contact-intro">
              I'm open to new opportunities, freelance projects, or just a good
              tech conversation.
            </p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="reveal reveal-delay-2">
            {/* ✅ FORM ADDED */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>EMAIL</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label>SUBJECT</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label>MESSAGE</label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>

              {/* ✅ BUTTON FIX */}
              <button type="submit" disabled={status === "sending"}>
                {status === "idle"
                  ? "Send Message →"
                  : status === "sending"
                    ? "Sending..."
                    : "✓ Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
