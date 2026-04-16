import { useState, useEffect } from "react";
import "./Navbar.css";
import LogoImg from "../../assets/logo.png"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open-la irukum pothu background scroll-ah stop panna
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""} ${menuOpen ? "nav-open" : ""}`}>
      <div className="nav-container">
        {/* LOGO SECTION */}
        <div className="logo-box" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}>
          <img src={LogoImg} alt="Rep OneGym" className="nav-logo" />
          <h1 className="logo-text">REP ONE<span>GYM</span></h1>
        </div>

        {/* NAVIGATION LINKS */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {["About", "Services", "Trainers", "Pricing"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                  <span className="link-num">0{["About", "Services", "Trainers", "Pricing"].indexOf(item) + 1}</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-footer">
            <p>Rep OneGym & Fitness, Madurai</p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="nav-right">
          <a href="#contact" className="nav-btn-premium desktop-only">
            <span>Join the Elite</span>
          </a>
          
          <button 
            className={`premium-hamburger ${menuOpen ? "active" : ""}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="ham-box"><div className="ham-inner"></div></div>
          </button>
        </div>
      </div>
    </nav>
  );
}