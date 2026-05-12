"use client";
import { useEffect, useRef } from "react";

const techs = [
  // Frontend Core
  "React.js",
  "Redux",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3",

  // State & Data Handling
  "Redux Toolkit",
  "Axios",

  // Backend (Node + PHP)
  "Node.js",
  "Express.js",
  "PHP",
  // Databases
  "MongoDB",
  "MySQL",
  "WordPress",
  "Custom Theme Development",
  "Custom Plugin Development",
  "WooCommerce",
  "Git",
  "GitHub",
  "SEO Optimization",
];

export default function About() {
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
    <section id="about" ref={ref}>
      <div className="container">
        <div className="sec-header reveal">
          <h2 className="sec-title">About Me</h2>
          <div className="sec-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Hey! I&apos;m <span className="hl">Fuzail Akhtar</span>, a Full
              Stack Developer based in India. I started my journey with{" "}
              <span className="hl-blue">WordPress & PHP</span>, building and
              managing multiple production websites for real clients over 3
              years.
            </p>
            <p>
              I then transitioned into the{" "}
              <span className="hl">MERN stack</span>, and now I work
              professionally with{" "}
              <span className="hl-blue">
                React, Redux, Node.js, Express, and MongoDB
              </span>
              . I&apos;ve built full-stack applications including a complete{" "}
              <span className="hl">MERN signup/login project</span> and
              contribute to production React apps in my current company.
            </p>
            <p>
              I&apos;m comfortable with <span className="hl-blue">Redux</span>{" "}
              for state management, <span className="hl-blue">Axios</span> for
              API integration,{" "}
              <span className="hl-blue">phpMyAdmin & MongoDB</span> for
              databases, and I&apos;ve worked with{" "}
              <span className="hl-blue">Material UI</span> and{" "}
              <span className="hl-blue">Next.js with Redux</span> as well.
            </p>
            <p className="tech-label">TECHNOLOGIES I USE</p>
            <div className="tech-chips">
              {techs.map((t) => (
                <span key={t} className="chip">
                  <span className="chip-dot" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="profile-card">
              <div className="profile-card-top">
                <div className="avatar">FA</div>
                <div className="profile-name">Fuzail Akhtar</div>
                <div className="profile-role-txt">FULL STACK DEVELOPER</div>
                <div className="status-badge">
                  <span className="status-dot" />
                  Open to work
                </div>
              </div>
              <div className="profile-stats">
                <div className="p-stat">
                  <div className="p-stat-val">3+</div>
                  <div className="p-stat-label">Yrs WordPress</div>
                </div>
                <div className="p-stat">
                  <div className="p-stat-val">2+</div>
                  <div className="p-stat-label">Yrs React</div>
                </div>
                <div className="p-stat">
                  <div className="p-stat-val">10+</div>
                  <div className="p-stat-label">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
