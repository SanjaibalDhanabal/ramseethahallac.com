import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CTASection.css";


const CTASection = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/contact");
  };

  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Looking for the Best Marriage Hall in Chennai? Choose Ram Seetha Mahal
      </h2>
      <div className="cta-buttons">
        <button className="cta-button book" onClick={handleBookNow}>
          <img
            src="/assets/icons/mail.png"
            alt="Book Now"
            className="cta-icon"
          />
          Book Now
        </button>
        <span className="cta-or">or</span>
        <a className="cta-button call" href="tel:918870888779">
          <img
            src="/assets/icons/cell.png"
            alt="Call Now"
            className="cta-icon"
          />
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;