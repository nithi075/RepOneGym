import "./About.css";

export default function About() {
  const values = [
    { title: "Strength", desc: "Build physical & mental resilience through guided elite training." },
    { title: "Balance", desc: "Harmonize your lifestyle, nutrition, and health seamlessly." },
    { title: "Focus", desc: "Dedicated one-on-one training designed for your specific goals." },
    { title: "Excellence", desc: "Only the highest standards for the women who choose to be elite." }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <div className="about-left">
          <div className="title-wrapper">
            <span className="accent-line"></span>
            <span className="section-subtitle">Our Philosophy</span>
          </div>
          
          <h2 className="about-title">
            Where <span>Discipline</span> <br /> 
            Meets Desire
          </h2>

          <p className="about-description">
            A fitness space built exclusively for women. At <strong>One Rep Gym</strong>, 
            we don't just count reps; we make reps count. We transform confidence, 
            empowering you to lead with strength in every aspect of life.
          </p>

          <div className="about-stats-row">
            <div className="exp-box">
              <span className="big-num">08+</span>
              <span className="stat-text">Years of <br/> Mastery</span>
            </div>
            <div className="exp-box">
              <span className="big-num">2k+</span>
              <span className="stat-text">Success <br/> Stories</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="values-grid">
            {values.map((val, index) => (
              <div className="value-card" key={index}>
                <div className="card-header">
                  <span className="step-num">/0{index + 1}</span>
                  <div className="dot-decor"></div>
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* Background Decorative Text */}
      <div className="bg-watermark">ESTD 2018</div>
    </section>
  );
}