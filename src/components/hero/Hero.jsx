import "./Hero.css";
import HeroImage from "../../assets/hero-women.jpg"; // Updated image reference

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Decorative Elements */}
      <div className="hero-bg-text">STRENGTH</div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="pulse-dot"></span> 
            Premium Fitness Studio
          </div>
          
          <h1 className="hero-title">
            FORGE <br />
            <span className="text-outline">YOUR</span> <br />
            LEGACY
          </h1>

          <p className="hero-subtitle">
            Don’t just wish for it. Work for it. Join the elite community at 
            <span className="highlight-red"> Rep OneGym</span> and break your boundaries.
          </p>

          <div className="hero-btns">
            <a href="#services" className="btn-primary">Start Your Journey</a>
            <a href="#about" className="btn-secondary">
              Our Story <span className="arrow">→</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">Members</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">12+</span>
              <span className="stat-label">Experts</span>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="image-wrapper">
             <img src={HeroImage} alt="Fitness Elite" className="main-img" />
             {/* Floating Badge */}
             <div className="experience-badge">
                <span className="exp-year">ESTD.</span>
                <span className="exp-val">2018</span>
             </div>
          </div>
          {/* Vertical Decoration */}
          <div className="vertical-label">PREMIUM PERFORMANCE</div>
        </div>
      </div>
    </section>
  );
}