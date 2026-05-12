"use client";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "React / Next.js Developer",
  "WordPress & PHP Expert",
  "MERN Stack Developer",
  "Frontend Specialist",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[ri];
    let timeout: NodeJS.Timeout;
    if (!del && ci < cur.length) {
      timeout = setTimeout(() => {
        setDisplayed(cur.slice(0, ci + 1));
        setCi((c) => c + 1);
      }, 75);
    } else if (!del && ci === cur.length) {
      timeout = setTimeout(() => setDel(true), 2200);
    } else if (del && ci > 0) {
      timeout = setTimeout(() => {
        setDisplayed(cur.slice(0, ci - 1));
        setCi((c) => c - 1);
      }, 38);
    } else {
      setDel(false);
      setRi((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [ci, del, ri]);

  return (
    <section id="hero">
      <div className="hero-orb1" />
      <div className="hero-orb2" />

      <div className="hero-inner">
        <div className="hero-tag">
          <span className="hero-tag-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">
          Fuzail
          <br />
          <span className="highlight">Akhtar</span>
        </h1>

        <div className="hero-role-wrap">
          I&apos;m a &nbsp;
          <span className="hero-role">{displayed}</span>
          <span className="cursor" />
        </div>

        <p className="hero-desc">
          Full Stack Developer with <strong> 3+ years of WordPress/PHP</strong>{" "}
          and <strong>2 years of React</strong> experience. I build fast,
          scalable web apps — from pixel-perfect frontends to robust backends.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View My Work →
          </a>
          <a href="#contact" className="btn-outline">
            Let&apos;s Talk
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Fuzail83"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
          <a
            href="www.linkedin.com/in/fuzail-akhtar-26b6b715a"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:fuzailakhtar0497@email.com"
            className="social-link"
            title="Email"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-val">3+</div>
          <div className="stat-label">Years WordPress</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">2+</div>
          <div className="stat-label">Years React</div>
        </div>
        <div className="stat-card">
          <div className="stat-val">10+</div>
          <div className="stat-label">Projects Built</div>
        </div>
      </div>

      <div className="scroll-hint">
        <span className="scroll-txt">SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
