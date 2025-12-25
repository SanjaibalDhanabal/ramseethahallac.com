import React from "react";
import "../styles/Contact.css";
import BookHallNow from "../components/BookHallNow";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-hero">
        <img
          src="/assets/images/3.jpeg"
          alt="Contact Us Hero"
          className="contactus-bg"
        />
        <div className="contactus-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Book Your Hall Now Section */}
      <BookHallNow />
    {/* Map Section */}
    <section className="contact-map-section">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.725128520383!2d80.15082237484053!3d12.925379987385753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f6268229a93%3A0xf1c3948ebe35ab49!2sRam%20Seetha%20Hall%20AC%20-%20Kalyana%20Mandapam!5e0!3m2!1sen!2sin!4v1765273320752!5m2!1sen!2sin" 
      width="1350" 
      height="450" 
      style={{ border: 0 }} 
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
    </div>
  );
};

export default ContactUs;