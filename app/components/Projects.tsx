"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "SolarTopps.com",
    badge: "LIVE SITE",
    live: true,
    url: "https://solartopps.com",
    desc: "Full WordPress website for a solar company. Custom theme, WooCommerce integration, SEO optimization, and responsive design for all devices.",
    stack: ["WordPress", "PHP", "jQuery", "MySQL", "ACF", "HTML", "CSS"],
    liveLink: "https://solartopps.com",
  },
  {
    title: "Texala.net",
    badge: "LIVE SITE",
    live: true,
    url: "https://texala.net",
    desc: "Professional WordPress website built from scratch including custom theme, plugin configurations, contact forms, dynamic content management, and performance optimization.",
    stack: ["WordPress", "PHP", "jQuery", "MySQL", "ACF", "HTML", "CSS"],
    liveLink: "https://texala.net",
  },
  {
    title: "SolarTopps Client Portal",
    badge: "LIVE PORTAL",
    live: true,
    url: "https://portal.solartopps.com/doc/",
    desc: "Custom client portal/documentation system for SolarTopps. Built to manage solar installation documents, client data, and interactive reporting for end users.",
    stack: ["WordPress", "PHP", "jQuery", "MySQL", "ACF", "HTML", "CSS"],
    liveLink: "https://portal.solartopps.com/doc/",
  },
  {
    title: "MERN Auth System",
    badge: "MERN STACK",
    live: false,
    url: null,
    desc: "Full-stack signup/login app built with the complete MERN stack. Features JWT authentication, protected routes, bcrypt password hashing, Redux state management, and Axios for API calls.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: null,
  },
];

export default function Projects() {
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

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="sec-header reveal">
          <h2 className="sec-title">Projects & Work</h2>
          <div className="sec-line" />
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`proj-card reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ""}`}
            >
              <div className="proj-top">
                <span className={`proj-badge${p.live ? " live" : ""}`}>
                  {p.badge}
                </span>
                <div className="proj-links">
                  {p.liveLink && (
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link"
                      title="Live site"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="proj-title">{p.title}</div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-url"
                >
                  {p.url.replace("https://", "")}
                </a>
              )}
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-stack">
                {p.stack.map((t, si) => (
                  <span key={t}>
                    <span className="proj-tech">{t}</span>
                    {si < p.stack.length - 1 && (
                      <span className="proj-sep"> · </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
