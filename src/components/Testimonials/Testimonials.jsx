import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      text: "Amazing transformation experience! The atmosphere is so encouraging and professional, pushing me to reach my fitness goals.",
      author: "Sanjay R.",
      tag: "Weight Loss",
      rating: 5
    },
    {
      text: "Hands down the best fitness studio in the city. The state-of-the-art equipment and expert coaching are absolutely top-notch.",
      author: "Priya K.",
      tag: "Strength Training",
      rating: 5
    },
    {
      text: "Loved the trainers' support. They don't just teach exercises; they focus on proper form and building long-term discipline.",
      author: "Anish M.",
      tag: "Personal Coaching",
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-bg-glow"></div>
      
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="subtitle">Success Stories</span>
          <h2 className="title">Member <span>Reviews</span></h2>
          <div className="title-dash"></div>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, i) => (
            <div className="review-card" key={i}>
              <div className="card-top">
                <div className="stars">
                  {[...Array(rev.rating)].map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <div className="quote-mark">“</div>
              </div>

              <p className="review-text">{rev.text}</p>
              
              <div className="review-footer">
                <div className="author-thumb">
                  {rev.author.charAt(0)}
                </div>
                <div className="author-meta">
                  <h4>{rev.author}</h4>
                  <span className="testi-tag">{rev.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}