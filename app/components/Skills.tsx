"use client";
import { useEffect, useRef } from "react";

const skillCards = [
  {
    icon: "⚛️",
    title: "Frontend",
    skills: [
      ["React.js", 88],
      ["Redux", 82],
      ["Next.js", 78],
      ["JavaScript / jQuery", 85],
      ["HTML / CSS", 92],
    ],
  },
  {
    icon: "🖥️",
    title: "Backend",
    skills: [
      ["Node.js / Express", 80],
      ["PHP", 88],
      ["REST APIs / Axios", 85],
      ["WordPress Dev", 92],
    ],
  },
  {
    icon: "🗄️",
    title: "Database & Tools",
    skills: [
      ["MongoDB", 78],
      ["MySQL / phpMyAdmin", 82],
      ["Git / GitHub", 85],
      ["Material UI", 75],
    ],
  },
];

const tools = [
  // API & Data
  "Axios",
  "Fetch API",
  "Postman",
  "JWT Auth",
  "Mongoose",

  // WordPress Tools
  "phpMyAdmin",
  "Elementor",
  "Custom Plugins",

  // React Utilities
  "React Hooks",
  "Redux DevTools",

  // Package Managers & Build Tools
  "NPM",

  // Development Tools
  "VS Code",
  "Git",
  "GitHub",
  "Chrome DevTools",

  // Deployment & Hosting
  "Netlify",
  "cPanel",
];

export default function Skills() {
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
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="sec-header reveal">
          <h2 className="sec-title">Skills & Technologies</h2>
          <div className="sec-line" />
        </div>

        <div className="skills-grid">
          {skillCards.map((card, i) => (
            <div
              key={card.title}
              className={`skill-card reveal${i > 0 ? ` reveal-delay-${i}` : ""}`}
            >
              <div className="skill-card-head">
                <span className="skill-icon">{card.icon}</span>
                <span className="skill-card-title">{card.title}</span>
              </div>
              {card.skills.map(([name, pct]) => (
                <div key={name} className="skill-row">
                  <div className="skill-meta">
                    <span className="skill-name">{name}</span>
                    <span className="skill-pct">{pct}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="tools-wrap reveal">
          <p className="tools-label">ALSO WORKED WITH</p>
          <div className="tools-grid">
            {tools.map((t) => (
              <span key={t} className="tool-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
