import React from "react";
import "./Location.css";

const Location = () => {

  const location = {
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.237321454131!2d78.1459124!3d11.677586100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf150c5bf2007%3A0x4c8785e8bac14ece!2sREP%20ONE%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1776338390767!5m2!1sen!2sin",

    link: "https://www.google.com/maps/place/REP+ONE+Fitness+Club/",

    address: "REP ONE Fitness Club, Tamil Nadu",

    timing: "Mon - Sat : 05:00 AM - 09:00 PM"
  };

  return (
    <section className="location-section" id="branches">

      <div className="location-container">

        <div className="location-header">

          <span className="mini-tag">OUR STUDIO</span>

          <h2 className="location-title">
            FIND YOUR <span>ZONE</span>
          </h2>

          <div className="title-bar"></div>

        </div>

        <div className="map-view">

          <div className="map-frame">

            <iframe
              src={location.map}
              loading="lazy"
              title="REP ONE Fitness Club Location"
              className="google-map"
              allowFullScreen
            />

          </div>

          <div className="address-card">

            <div className="card-top">

              <h3>REP ONE FITNESS CLUB</h3>

              <p className="loc-status">● Open Now</p>

            </div>

            <div className="address-details">

              <div className="detail-row">

                <span className="icon">📍</span>

                <p>{location.address}</p>

              </div>

              <div className="detail-row">

                <span className="icon">🕒</span>

                <p>{location.timing}</p>

              </div>

            </div>

            <a
              href={location.link}
              target="_blank"
              rel="noreferrer"
              className="direction-btn"
            >
              Get Directions →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Location;