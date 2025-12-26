import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css';
import QuickEnquiry from '../components/QuickEnquiry';
import CTASection from '../components/CTASection';
import BookHallNow from '../components/BookHallNow';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
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
      </motion.section>
      {/* About Us Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="about-img-wrapper">
            <img src="/assets/images/IMG_8502.jpg" alt="About Ramseetha Hall" className="about-img" />
        </div>
        <div className="about-content">
            <h2>About Us</h2>
            <p>
            Welcome to Ram Seetha Hall, Where every Celebration finds its perfect setting. Located in the heart of Chennai, our hall blends traditional elegance with modern comfort, making it ideal for weddings, receptions, and all kinds of family gatherings. With spacious interiors, air-conditioned comfort, and beautiful decor options, we ensure every moment becomes a memory to cherish for a lifetime.
            </p>
        </div>
      </motion.section>
        {/* Our Promise Section */}
      <motion.section
        className="promise-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="promise-content">
            <h2>Our Promise</h2>
            <p>
            At Ram Seetha Hall, we believe that every event deserves care, warmth, and perfection. From elegant setups to personalized service, our team takes pride in creating joyful experiences that last forever. Whether you’re planning a traditional wedding or a modern celebration, we promise to make your special day stress-free, beautiful, and truly memorable.
            </p>
        </div>
        <div className="promise-img-wrapper">
            <img src="/assets/images/2.jpeg" alt="Our Promise" className="promise-img" />
        </div>
      </motion.section>
        {/* Why Choose Us Section */}
        <motion.section
        className="why-choose-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        >
        <h2>Why Choose Ram Seetha Hall</h2>
        <p className="why-choose-subtitle">
          Perfect place for your special day with comfort, style & tradition
        </p>
        <div className="why-choose-cards">
          {[
            {
              img: "/assets/images/IMG_3466.jpg",
              alt: "Elegant Decor & Lighting",
              title: "Elegant Decor & Lighting",
              desc: "Modern interiors that fit every celebration."
            },
            {
              img: "/assets/images/catering.png",
              alt: "In-House Catering",
              title: "In-House Catering",
              desc: "Delicious vegetarian menu options."
            },
            {
              img: "/assets/images/3.jpeg",
              alt: "Spacious & Air Conditioned Hall",
              title: "Spacious & Air Conditioned Hall",
              desc: "Fully air-conditioned and comfortable for all guests."
            },
            {
              img: "/assets/images/event_support.png",
              alt: "Dedicated Event Support",
              title: "Dedicated Event Support",
              desc: "A professional team to handle all event needs."
            },
            {
              img: "/assets/images/IMG_1290.jpg",
              alt: "Affordable Packages",
              title: "Affordable Packages",
              desc: "Flexible pricing for every budget."
            },
            {
              img: "/assets/images/1Y9A8972.jpg",
              alt: "Prime Location",
              title: "Prime Location",
              desc: "Located in the heart of Chennai with ample parking space."
            }
          ].map((card, idx) => (
            <motion.div
              className="why-choose-card"
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <img src={card.img} alt={card.alt} className="why-choose-img" />
              <div className="why-choose-card-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </motion.section>

      {/* Call-to-Action Section */}
      <CTASection
        onBookNow={() => {
          const el = document.getElementById('book-hall-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />


      {/* Event Highlights Section */}
      <motion.section
        className="event-highlights-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="event-highlights-title">Event Highlights</h2>
        <p className="event-highlights-subtitle">
          A glimpse of our happiest celebrations
        </p>
        <div className="event-highlights-gallery">
          <div className="event-highlight-img-fullwidth">
            <motion.img
              src="/assets/images/1Y9A9249.jpg"
              alt="Event Highlight 1"
              className="event-highlight-img"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          <div className="event-highlight-img-row">
            <motion.img
              src="/assets/images/IMG_9303.jpg"
              alt="Event Highlight 2"
              className="event-highlight-img"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/assets/images/IMG_9219.jpg"
              alt="Event Highlight 3"
              className="event-highlight-img"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
          <div className="event-highlight-img-row">
            <motion.img
              src="/assets/images/IMG_9222.jpg"
              alt="Event Highlight 4"
              className="event-highlight-img"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/assets/images/1Y9A2391.jpg"
              alt="Event Highlight 5"
              className="event-highlight-img"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </motion.section>

      {/* Quick Enquiry Section */}
      <QuickEnquiry />

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Hear from happy couples and families who celebrated with us.
        </p>
        <div className="testimonials-cards">
          {[
            {
              img: "/assets/images/ss.png",
              name: "SaiPriya Sairam",
              stars: "★★★★★",
              text: "We happened to attend a function of my relative in this hall, recently. The hall was so beautiful and offered a very comfortable stay. We had a pleasant time during those two days. They have a spacious car parking. The airconditioner was quite effective despite a big crowd . Hats off!!"
            },
            {
              img: "/assets/images/s.png",
              name: "Sri Murali Krishnan Dowlathraman",
              stars: "★★★★",
              text: "Good place, got a good parking place near the mandapam. It has elevator, so people can comfortably move from marriage hall, balcony to the dining area. Hall is further having 10+ rooms to accomodate the bride and bridegroom family."
            },
            {
              img: "/assets/images/g.png",
              name: "Gayathri Venkat",
              stars: "★★★★★",
              text: "We performed our son's Upanayanam in Ramseetha Hall this month. Beautiful & Spacious. Very good vibration present in the Hall. Our caterers also appreciated the kitchen facilities and the service lift.They have provided a seperate & safe car parking space so that guests need not park on the streets."
            }
          ].map((testimonial, idx) => (
            <motion.div
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="testimonial-header">
                <img src={testimonial.img} alt={testimonial.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-stars">{testimonial.stars}</div>
                </div>
              </div>
              <div className="testimonial-text">
                {testimonial.text}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Book Your Hall Now Section */}
      <BookHallNow />
      {/* Add more sections below */}
    </div>
  );
};

export default Home;