"use client";
import { useState, useEffect, useRef } from "react";

const expData = [
  {
    role: "React Developer",
    company: " Texala India Pvt. Ltd.",
    period: "2022 – Present · On-site / Hybrid",
    bullets: [
      "Working as a React.js developer building production-grade web applications.",
      "Implemented Redux for global state management across large-scale app.",
      "Integrated REST APIs using Axios with proper error handling and loading states.",
      "Worked with Next.js and implemented Redux in a Next.js project.",
      "Used Material UI for building consistent, responsive component interfaces.",
    ],
    tags: ["React", "Redux", "Next.js", "Axios", "Material UI", "JavaScript"],
  },
  {
    role: "WordPress / PHP Developer",
    company: "Freelance & Agency Work",
    period: "2019 – 2022 · 3 Years",
    bullets: [
      "Built and managed multiple production WordPress websites for international clients.",
      "Developed custom themes, plugins, and WooCommerce integrations from scratch.",
      "Used phpMyAdmin and MySQL for database design, queries, and optimization.",
      "Worked with ACF, Elementor, and custom page builder integrations.",
      "Delivered projects including solartopps.com, texala.net, and the SolarTopps portal.",
    ],
    tags: [
      "WordPress",
      "PHP",
      "MySQL",
      "phpMyAdmin",
      "jQuery",
      "WooCommerce",
      "ACF",
    ],
  },
  {
    role: "MERN Stack – Personal Project",
    company: "Signup / Login Auth App",
    period: "Full Stack — MongoDB, Express, React, Node",
    bullets: [
      "Built a complete MERN stack authentication application from scratch.",
      "Backend: Node.js + Express REST API with JWT token-based authentication.",
      "Frontend: React with Redux for auth state, protected routes, and Axios calls.",
      "Database: MongoDB with Mongoose schemas for user data management.",
      "Password hashing with bcrypt, form validation, and proper error handling.",
    ],
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux",
      "JWT",
      "Axios",
      "bcrypt",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
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

  const e = expData[active];

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className="sec-header reveal">
          <h2 className="sec-title">Experience</h2>
          <div className="sec-line" />
        </div>

        <div className="exp-wrap reveal">
          <div className="exp-tabs">
            {expData.map((exp, i) => (
              <button
                key={exp.company}
                className={`exp-tab${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {i === 0
                  ? "Current Job"
                  : i === 1
                    ? "WordPress Era"
                    : "MERN Project"}
              </button>
            ))}
          </div>

          <div className="exp-content">
            <div className="exp-role">
              {e.role} <span className="exp-company">@ {e.company}</span>
            </div>
            <div className="exp-meta">{e.period}</div>
            <ul className="exp-bullets">
              {e.bullets.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="bull">▹</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="exp-tags">
              {e.tags.map((t) => (
                <span key={t} className="exp-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
