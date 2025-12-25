import React from 'react';
import '../styles/Home.css';
import QuickEnquiry from '../components/QuickEnquiry';
import CTASection from '../components/CTASection';
import BookHallNow from '../components/BookHallNow';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          src="/assets/videos/Ram_Seetha_Hall.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay">
          {/* Optional: Add a heading or call-to-action here */}
          {/* <h1>Welcome to Ramseetha Hall</h1> */}
        </div>
      </section>
      {/* About Us Section */}
        <section className="about-section">
        <div className="about-img-wrapper">
            <img src="/assets/images/IMG_8502.jpg" alt="About Ramseetha Hall" className="about-img" />
        </div>
        <div className="about-content">
            <h2>About Us</h2>
            <p>
            Welcome to Ram Seetha Hall, Where every Celebration finds its perfect setting. Located in the heart of Chennai, our hall blends traditional elegance with modern comfort, making it ideal for weddings, receptions, and all kinds of family gatherings. With spacious interiors, air-conditioned comfort, and beautiful decor options, we ensure every moment becomes a memory to cherish for a lifetime.
            </p>
        </div>
        </section>
        {/* Our Promise Section */}
        <section className="promise-section">
        <div className="promise-content">
            <h2>Our Promise</h2>
            <p>
            At Ram Seetha Hall, we believe that every event deserves care, warmth, and perfection. From elegant setups to personalized service, our team takes pride in creating joyful experiences that last forever. Whether you’re planning a traditional wedding or a modern celebration, we promise to make your special day stress-free, beautiful, and truly memorable.
            </p>
        </div>
        <div className="promise-img-wrapper">
            <img src="/assets/images/2.jpeg" alt="Our Promise" className="promise-img" />
        </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="why-choose-section">
        <h2>Why Choose Ram Seetha Hall</h2>
        <p className="why-choose-subtitle">
            Perfect place for your special day with comfort, style & tradition
        </p>
        <div className="why-choose-cards">
            <div className="why-choose-card">
            <img src="/assets/images/IMG_3466.jpg" alt="Elegant Decor & Lighting" className="why-choose-img" />
            <div className="why-choose-card-content">
                <h3>Elegant Decor & Lighting</h3>
                <p>Modern interiors that fit every celebration.</p>
            </div>
            </div>
            <div className="why-choose-card">
            <img src="/assets/images/catering.png" alt="In-House Catering" className="why-choose-img" />
            <div className="why-choose-card-content">
                <h3>In-House Catering</h3>
                <p>Delicious vegetarian menu options.</p>
            </div>
            </div>
            <div className="why-choose-card">
            <img src="/assets/images/3.jpeg" alt="Spacious & Air Conditioned Hall" className="why-choose-img" />
            <div className="why-choose-card-content">
                <h3>Spacious & Air Conditioned Hall</h3>
                <p>Fully air-conditioned and comfortable for all guests.</p>
            </div>
            </div>
            <div className="why-choose-card">
            <img src="/assets/images/event_support.png" alt="Dedicated Event Support" className="why-choose-img" />
            <div className="why-choose-card-content">
                <h3>Dedicated Event Support</h3>
                <p>A professional team to handle all event needs.</p>
            </div>
            </div>
            <div className="why-choose-card">
            <img src="/assets/images/IMG_1290.jpg" alt="Affordable Packages" className="why-choose-img" />
            <div className="why-choose-card-content">
                <h3>Affordable Packages</h3>
                <p>Flexible pricing for every budget.</p>
            </div>
            </div>
            <div className="why-choose-card">
            <img src="/assets/images/1Y9A8972.jpg" alt="Prime Location" className="why-choose-img" />
            <div className="why-choose-card-content">
                <h3>Prime Location</h3>
                <p>Located in the heart of Chennai with ample parking space.</p>
            </div>
            </div>
        </div>
        </section>

      {/* Call-to-Action Section */}
      <CTASection
        onBookNow={() => {
          const el = document.getElementById('book-hall-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />


      {/* Event Highlights Section */}
      <section className="event-highlights-section">
        <h2 className="event-highlights-title">Event Highlights</h2>
        <p className="event-highlights-subtitle">
          A glimpse of our happiest celebrations
        </p>
        <div className="event-highlights-gallery">
          <div className="event-highlight-img-fullwidth">
            <img src="/assets/images/1Y9A9249.jpg" alt="Event Highlight 1" className="event-highlight-img" />
          </div>
          <div className="event-highlight-img-row">
            <img src="/assets/images/IMG_9303.jpg" alt="Event Highlight 2" className="event-highlight-img" />
            <img src="/assets/images/IMG_9219.jpg" alt="Event Highlight 3" className="event-highlight-img" />
          </div>
          <div className="event-highlight-img-row">
            <img src="/assets/images/IMG_9222.jpg" alt="Event Highlight 4" className="event-highlight-img" />
            <img src="/assets/images/1Y9A2391.jpg" alt="Event Highlight 5" className="event-highlight-img" />
          </div>
        </div>
      </section>

      {/* Quick Enquiry Section */}
      <QuickEnquiry />

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Hear from happy couples and families who celebrated with us.
        </p>
        <div className="testimonials-cards">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="/assets/images/ss.png" alt="SaiPriya Sairam" className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">SaiPriya Sairam</div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
            <div className="testimonial-text">
              We happened to attend a function of my relative in this hall, recently. The hall was so beautiful and offered a very comfortable stay. We had a pleasant time during those two days. They have a spacious car parking. The airconditioner was quite effective despite a big crowd . Hats off!!
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="/assets/images/s.png" alt="Sri Murali Krishnan Dowlathraman" className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">Sri Murali Krishnan Dowlathraman</div>
                <div className="testimonial-stars">★★★★</div>
              </div>
            </div>
            <div className="testimonial-text">
              Good place, got a good parking place near the mandapam. It has elevator, so people can comfortably move from marriage hall, balcony to the dining area. Hall is further having 10+ rooms to accomodate the bride and bridegroom family.
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src="/assets/images/g.png" alt="Gayathri Venkat" className="testimonial-avatar" />
              <div>
                <div className="testimonial-name">Gayathri Venkat</div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
            <div className="testimonial-text">
              We performed our son's Upanayanam in Ramseetha Hall this month. Beautiful & Spacious. Very good vibration present in the Hall. Our caterers also appreciated the kitchen facilities and the service lift. They have provided a seperate & safe car parking space so that guests need not park on the streets.
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Hall Now Section */}
      <BookHallNow />
      {/* Add more sections below */}
    </div>
  );
};

export default Home;