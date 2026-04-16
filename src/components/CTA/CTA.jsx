import "./CTA.css";

export default function CTA() {
  
  // WhatsApp Link Handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "919361082268"; // Updated number
    const message = "Hello Rep One Gym! I would like to book a free consultation for my fitness journey.";
    
    // URL-ah encode panni, new tab-la open pannuvom
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section className="cta" id="contact">
      {/* Background with Image + Overlay */}
      <div className="cta-image-bg"></div>
      <div className="cta-overlay-gradient"></div>
      
      <div className="cta-container">
        <div className="cta-box">
          <div className="cta-content">
            <span className="cta-tag">Your Journey Starts Here</span>
            <h2 className="cta-title">
              READY TO <span className="outline-txt">CHALLENGE</span> <br /> 
              YOUR <span>LIMITS?</span>
            </h2>
            <p className="cta-desc">
              Join <strong>Rep One Gym</strong> today. The most elite women-only 
              fitness sanctuary in Krishnagiri. High-intensity training meets luxury comfort.
            </p>
            
            <div className="cta-wrapper">
              {/* Added onClick Handler */}
              <button className="cta-btn-premium" onClick={handleWhatsAppClick}>
                <span className="btn-label">Book Free Consultation</span>
                <span className="btn-icon">⚡</span>
              </button>
              
              <div className="cta-contact-info">
                 <a href="tel:+919361082268" className="cta-link">
                    <small>Direct Line</small>
                    <span>+9193610 82268</span>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}