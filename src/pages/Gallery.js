import React from "react";
import "../styles/Gallery.css";
import QuickEnquiry from "../components/QuickEnquiry";

const galleryImages = [
  "/assets/images/img.jpg",
  "/assets/images/pexels-photo-7669965.jpeg",
  "/assets/images/1Y9A9249.jpg", // 3rd image (full width)
  "/assets/images/South-Indian-Weddings.jpg",
  "/assets/images/Marriage-Certificate.jpg",
  "/assets/images/1Y9A2391.jpg",
  "/assets/images/catering.png",
  "/assets/images/IMG_9303.jpg",
  "/assets/images/1Y9A9249.jpg",
  "/assets/images/IMG_9222.jpg", // last image (full width)
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-content-wrapper">
        <div className="gallery-hero">
          <img
            src="/assets/images/3.jpeg"
            alt="Gallery Hero"
            className="gallery-bg"
          />
          <div className="gallery-overlay">
            <h1>Gallery</h1>
          </div>
        </div>
        {/* Memories Section */}
        <section className="memories-section">
          <h2>Memories at Ram Seetha Hall</h2>
          <p>
            Explore the beautiful event setups, décor, and memorable moments hosted at Ram Seetha Marriage Hall
          </p>
          <div className="memories-grid">
            {galleryImages.map((src, idx) => (
              <div
                className={`memories-item${idx === 2 || idx === galleryImages.length - 1 ? " full-width" : ""}`}
                key={idx}
              >
                <img src={src} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
        </section>
        {/* Quick Enquiry Section */}
        <QuickEnquiry />
      </div>
    </div>
  );
};

export default Gallery;