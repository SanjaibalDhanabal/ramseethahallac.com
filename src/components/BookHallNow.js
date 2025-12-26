import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/BookHallNow.css";

const BookHallNow = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    date: "",
    type: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // User's WhatsApp number (with country code, no +)
  const whatsappNumber = "918870888779";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to Formspree endpoint
    const res = await fetch("https://formspree.io/f/meeqobpk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        date: form.date,
        type: form.type,
        message: form.message,
        _replyto: form.email
      })
    });
    if (res.ok) {
      Swal.fire({
        title: "Thank you for your enquiry!",
        text: "We have received your details. Click OK to send your enquiry to WhatsApp for faster response.",
        icon: "success",
        confirmButtonText: "Send to WhatsApp"
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, "_blank");
        }
        setSubmitted(true);
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "There was an error submitting the form. Please try again.",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  const whatsappMsg =
    `Name: ${form.name}%0aMobile: ${form.mobile}%0aEmail: ${form.email}%0aDate: ${form.date}%0aType: ${form.type}%0aMessage: ${form.message}`;

  return (
    <section className="book-hall-section" id="book-hall-section">
      <div className="book-hall-container">
        <div className="book-hall-left">
          <div className="book-hall-left-top">
            <h2 className="book-hall-title">Book Your Hall Now</h2>
            <p className="book-hall-desc">
              We’re here to make your celebration truly unforgettable.
            </p>
          </div>
          <div className="book-hall-left-bottom">
            <img
              src="/assets/images/contact_sec-imagepng.png"
              alt="Book Hall Decor"
              className="book-hall-image"
            />
          </div>
        </div>
        {!submitted ? (
          <form className="book-hall-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter Mobile Number" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <label>Function Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} placeholder="Pick Your Function date" required />
            </div>
            <div className="form-group">
              <label>Function Type</label>
              <select name="type" value={form.type} onChange={handleChange} required>
                <option value="">-Select-</option>
                <option value="wedding">Wedding</option>
                <option value="reception">Reception</option>
                <option value="engagement">Engagement</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Type your message" rows={3}></textarea>
            </div>
            <button type="submit" className="book-hall-submit">SUBMIT</button>
          </form>
        ) : (
          <div className="book-hall-success book-hall-thankyou-message">
            <h3>Thank you for your enquiry!</h3>
            <p>We have received your details. For faster response, you can also send your enquiry to our WhatsApp.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="book-hall-whatsapp-btn"
            >
              Send to WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookHallNow;
