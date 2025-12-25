import React from "react";
import "../styles/Facilities.css";
import QuickEnquiry from "../components/QuickEnquiry";
import CTASection from "../components/CTASection";

const Facilities = () => {
  return (
    <div className="facilities-container">
      <div className="facilities-content-wrapper">
        <div className="facilities-hero">
          <img
            src="/assets/images/3.jpeg"
            alt="Facilities Hero"
            className="facilities-bg"
          />
          <div className="facilities-overlay">
            <h1>
              Facilities <span className="facilities-highlight">& Amenities</span>
            </h1>
            <p>
              Comfort, convenience, and complete event-ready spaces.
            </p>
          </div>
        </div>

        <section className="facilities-info-section">
          <h2 className="facilities-info-title">
            Everything You Need for a Perfect Celebration
          </h2>
          <p className="facilities-info-subtitle">
            We’ve designed our facilities to give you comfort, quality, and the right environment for your special day.
          </p>
          <div className="facilities-cards">
            {/* Row 1 */}
            <div className="facilities-card">
              <img src="/assets/images/seating.jpeg" alt="Seating Capacity" className="facilities-card-img" />
              <div className="facilities-card-content">
                <div className="facilities-card-header">
                  <div className="facilities-card-icon">
                    <img src="/assets/icons/WaitingRoom.png" alt="Seating Icon" />
                  </div>
                  <h3>Seating Capacity</h3>
                </div>
                <p>Main Hall: 520 seats.<br />Dining Hall: 150 seats.</p>
              </div>
            </div>
            <div className="facilities-card">
              <img src="/assets/images/16.jpeg" alt="Air Conditioning" className="facilities-card-img" />
              <div className="facilities-card-content">
                <div className="facilities-card-header">
                  <div className="facilities-card-icon">
                    <img src="/assets/icons/AirConditioner.png" alt="AC Icon" />
                  </div>
                  <h3>Air conditioning.</h3>
                </div>
                <p>Dining hall and Marriage hall are centralised AC.</p>
              </div>
            </div>
            <div className="facilities-card">
              <img src="/assets/images/24.jpeg" alt="Additional Service" className="facilities-card-img" />
              <div className="facilities-card-content">
                <div className="facilities-card-header">
                  <div className="facilities-card-icon">
                    <img src="/assets/icons/Apartment.png" alt="Apartment Icon" />
                  </div>
                  <h3>Additional Service.</h3>
                </div>
                <p>Apartments and Guest house are available.</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="facilities-card">
              <img src="/assets/images/14.jpeg" alt="Parking" className="facilities-card-img" />
              <div className="facilities-card-content">
                <div className="facilities-card-header">
                  <div className="facilities-card-icon">
                    <img src="/assets/icons/parking.png" alt="Parking Icon" />
                  </div>
                  <h3>Parking</h3>
                </div>
                <p>51 car parking slots for guests.</p>
              </div>
            </div>
            <div className="facilities-card">
              <img src="/assets/images/9.jpeg" alt="Power Backup" className="facilities-card-img" />
              <div className="facilities-card-content">
                <div className="facilities-card-header">
                  <div className="facilities-card-icon">
                    <img src="/assets/icons/powerbackup.png" alt="Power Icon" />
                  </div>
                  <h3>Power Backup</h3>
                </div>
                <p>Full generator backup for every event.</p>
              </div>
            </div>
            <div className="facilities-card">
              <img src="/assets/images/common_facilities.png" alt="Common Facilities" className="facilities-card-img" />
              <div className="facilities-card-content">
                <div className="facilities-card-header">
                  <div className="facilities-card-icon">
                    <img src="/assets/icons/Toilet.png" alt="Common Icon" />
                  </div>
                  <h3>Common facilities</h3>
                </div>
                <p>Common toilets and bathroom are available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Room Amenities Section (side-by-side layout) */}
        <section className="room-amenities-section">
          <div className="room-amenities-content">
            <h2 className="room-amenities-title">Our Room Amenities</h2>
            <p className="room-amenities-desc">
              Discover the spacious, clean, and fully equipped rooms included for your event and guest comfort.
            </p>
            <ul className="room-amenities-list">
              <li><img src="/assets/icons/check.png" alt="check" className="room-amenities-icon" /> 10 AC Rooms in package : Bride Room, Bridegroom Room.</li>
              <li><img src="/assets/icons/check.png" alt="check" className="room-amenities-icon" /> 7 Double-Beds, and 1 Four-Bed Room.</li>
              <li><img src="/assets/icons/check.png" alt="check" className="room-amenities-icon" /> 5 x 2-Bed AC Rooms (₹1500/day).</li>
              <li><img src="/assets/icons/check.png" alt="check" className="room-amenities-icon" /> 3 x 4-Bed AC Rooms (₹2500/day)</li>
              <li><img src="/assets/icons/check.png" alt="check" className="room-amenities-icon" /> Additional service apartments / guest house available.</li>
            </ul>
            <button className="room-amenities-btn">Check Availability →</button>
          </div>
          <img src="/assets/images/rooms.png" alt="Room" className="room-amenities-main-img" />
        </section>

        {/* Quick Enquiry Section */}
        <QuickEnquiry />
        {/* Gallery Section */}
        <section className="facilities-gallery-section">
        <h2 className="facilities-gallery-title">
            Spacious halls, modern facilities, comfortable rooms — everything your celebration needs.
        </h2>
        <div className="facilities-gallery-grid">
            <img src="/assets/images/IMG_3466.jpg" alt="Gallery 1" className="facilities-gallery-img" />
            <img src="/assets/images/IMG_9225.jpg" alt="Gallery 2" className="facilities-gallery-img" />
            <img src="/assets/images/35.jpeg" alt="Gallery 3" className="facilities-gallery-img" />
            <img src="/assets/images/15.jpeg" alt="Gallery 4" className="facilities-gallery-img" />
        </div>
        </section>
        {/* CTA Section */}
        <CTASection />
        {/* Add more sections below as needed */}
      </div>
    </div>
  );
};

export default Facilities;