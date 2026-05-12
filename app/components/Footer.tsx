export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="logo-box" style={{ width: 32, height: 32, fontSize: 12 }}>FA</div>
        <span className="footer-copy">
          Designed & built by <span>Fuzail Akhtar</span> © {new Date().getFullYear()}
        </span>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
