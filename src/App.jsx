import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Transformations from "./components/Transformation/Transformation";
import Coach from "./components/Coach/Coach";
import Programs from "./components/Programs/Programs";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonial/Testimonial";
import FAQ from "./components/FAQ/FAQ";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import FloatingWhatsapp from "./components/Floating/Floating";
import Brands from "./components/brands/Brands"
import About from "./components/About/About";
import Why from "./components/why/Why";






function App() {

  return (

    <div>

      <Navbar/>


      {/* HERO */}

      <section id="hero">

        <Hero/>

      </section>



      {/* TRANSFORMATIONS */}

      <section id="transformations">

        <Transformations/>

      </section>



      {/* COACH */}

      {/* <section id="coach">

        <Coach/>

      </section> */}



      {/* PROGRAMS */}

      <section id="services">

        <Programs/>

      </section>



      {/* PRICING */}

      <section id="pricing">

        <Pricing/>

      </section>



      {/* WHY CHOOSE US */}

   



      {/* TESTIMONIAL */}

      <section id="testimonials">

        <Testimonials />

      </section>



      {/* FAQ */}

      <section id="faq">

        <FAQ/>

      </section>
      
      <Why/>



      {/* BRANDS */}

      {/* <section id="brands">

        <Brands />

      </section> */}



      {/* LOCATION */}

      <section id="branches">

        <Location />

      </section>



      {/* FOOTER */}

      <Footer/>


      {/* FLOATING WHATSAPP */}

      <FloatingWhatsapp/>


    </div>

  );

}

export default App;