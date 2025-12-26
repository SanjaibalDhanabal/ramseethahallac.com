import React from "react";
import { motion } from "framer-motion";
import "../styles/Facilities.css";
import QuickEnquiry from "../components/QuickEnquiry";
import CTASection from "../components/CTASection";

const Facilities = () => {
  return (
    <div className="facilities-container">
      <div className="facilities-content-wrapper">
        <motion.div
          className="facilities-hero"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.section
          className="facilities-info-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="facilities-info-title">
            Everything You Need for a Perfect Celebration
          </h2>
          <p className="facilities-info-subtitle">
            We’ve designed our facilities to give you comfort, quality, and the right environment for your special day.
          </p>
          <div className="facilities-cards">
            {/* Row 1 */}
            {[
              {
                img: "/assets/images/seating.jpeg",
                alt: "Seating Capacity",
                icon: "/assets/icons/WaitingRoom.png",
                iconAlt: "Seating Icon",
                title: "Seating Capacity",
                desc: <>Main Hall: 520 seats.<br />Dining Hall: 150 seats.</>
              },
              {
                img: "/assets/images/16.jpeg",
                alt: "Air Conditioning",
                icon: "/assets/icons/AirConditioner.png",
                iconAlt: "AC Icon",
                title: "Air conditioning.",
                desc: "Dining hall and Marriage hall are centralised AC."
              },
              {
                img: "/assets/images/24.jpeg",
                alt: "Additional Service",
                icon: "/assets/icons/Apartment.png",
                iconAlt: "Apartment Icon",
                title: "Additional Service.",
                desc: "Apartments and Guest house are available."
              },
              {
                img: "/assets/images/14.jpeg",
                alt: "Parking",
                icon: "/assets/icons/parking.png",
                iconAlt: "Parking Icon",
                title: "Parking",
                desc: "51 car parking slots for guests."
              },
              {
                img: "/assets/images/9.jpeg",
                alt: "Power Backup",
                icon: "/assets/icons/powerbackup.png",
                iconAlt: "Power Icon",
                title: "Power Backup",
                desc: "Full generator backup for every event."
              },
              {
                img: "/assets/images/common_facilities.png",
                alt: "Common Facilities",
                icon: "/assets/icons/Toilet.png",
                iconAlt: "Common Icon",
                title: "Common facilities",
                desc: "Common toilets and bathroom are available."
              }
            ].map((card, idx) => (
              <motion.div
                className="facilities-card"
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <img src={card.img} alt={card.alt} className="facilities-card-img" />
                <div className="facilities-card-content">
                  <div className="facilities-card-header">
                    <div className="facilities-card-icon">
                      <img src={card.icon} alt={card.iconAlt} />
                    </div>
                    <h3>{card.title}</h3>
                  </div>
                  <p>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Room Amenities Section (side-by-side layout) */}
        <motion.section
          className="room-amenities-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="room-amenities-content">
            <h2 className="room-amenities-title">Our Room Amenities</h2>
            <p className="room-amenities-desc">
              Discover the spacious, clean, and fully equipped rooms included for your event and guest comfort.
            </p>
            <ul className="room-amenities-list">
              {[
                "10 AC Rooms in package : Bride Room, Bridegroom Room.",
                "7 Double-Beds, and 1 Four-Bed Room.",
                "5 x 2-Bed AC Rooms (₹1500/day).",
                "3 x 4-Bed AC Rooms (₹2500/day)",
                "Additional service apartments / guest house available."
              ].map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <img src="/assets/icons/check.png" alt="check" className="room-amenities-icon" /> {item}
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="room-amenities-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Check Availability →
            </motion.button>
          </div>
          <motion.img
            src="/assets/images/rooms.png"
            alt="Room"
            className="room-amenities-main-img"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </motion.section>

        {/* Quick Enquiry Section */}
        <QuickEnquiry />
        {/* Gallery Section */}
        <motion.section
          className="facilities-gallery-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="facilities-gallery-title">
              Spacious halls, modern facilities, comfortable rooms — everything your celebration needs.
          </h2>
          <div className="facilities-gallery-grid">
            {[
              { src: "/assets/images/IMG_3466.jpg", alt: "Gallery 1" },
              { src: "/assets/images/IMG_9225.jpg", alt: "Gallery 2" },
              { src: "/assets/images/35.jpeg", alt: "Gallery 3" },
              { src: "/assets/images/15.jpeg", alt: "Gallery 4" }
            ].map((img, idx) => (
              <motion.img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="facilities-gallery-img"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.section>
        {/* CTA Section */}
        <CTASection />
        {/* Add more sections below as needed */}
      </div>
    </div>
  );
};

export default Facilities;