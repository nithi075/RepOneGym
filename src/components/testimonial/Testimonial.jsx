import "./testimonial.css";

const Testimonial = () => {

  const reviews = [

    {
      name: "Tamil Selvan",
      result: "Lost 15kg in 6 months",
      text: "Amazing gym experience! Trainers are friendly and always guide properly.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },

    {
      name: "Ameer Khan",
      result: "Lost 13kg",
      text: "Training style is awesome. Very supportive trainers and good atmosphere.",
      img: "https://randomuser.me/api/portraits/men/45.jpg"
    },

    {
      name: "Kulasekaran",
      result: "Improved Physique",
      text: "Ambience is superb and training quality is excellent.",
      img: "https://randomuser.me/api/portraits/men/64.jpg"
    }

  ];

  return (

    <section className="testimonial" id="testimonials">

      <div className="testimonial-header">

        <span className="tag">
          MEMBER REVIEWS
        </span>

        <h2>

          Real Stories <span>Real Results</span>

        </h2>

        <p>

          See what our members say about their transformation journey at GYM NATION.

        </p>

      </div>


      <div className="testimonial-grid">

        {

          reviews.map((item, i) => (

            <div key={i} className="testimonial-card">

              <div className="stars">
                ★★★★★
              </div>

              <p className="quote">
                "{item.text}"
              </p>


              <div className="testimonial-user">

                <img src={item.img} alt={item.name} />

                <div>

                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    {item.result}
                  </span>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

};

export default Testimonial;