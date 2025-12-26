import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/QuickEnquiry.css";


const QuickEnquiry = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: ""
  });
  const [submitted, setSubmitted] = useState(false);
  // WhatsApp number (with country code, no +)
  const whatsappNumber = "918870888779";


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to new Formspree endpoint
    const res = await fetch("https://formspree.io/f/meeqobpk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        date: form.date,
        _replyto: form.email
      })
    });
    if (res.ok) {
      // Show SweetAlert2 and on confirm open WhatsApp
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


  // WhatsApp message formatting
  const whatsappMsg =
    `Name: ${form.name}%0aEmail: ${form.email}%0aPhone: ${form.phone}%0aDate: ${form.date}`;

  return (
    <section className="enquiry-section">
      <div
        className="enquiry-bg"
        style={{ backgroundImage: "url('/assets/images/18.jpeg')" }}
      >
        {!submitted ? (
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <h2 className="enquiry-title">Quick ENQUIRY</h2>
            <div className="enquiry-fields">
              <div className="enquiry-field">
                <label>
                  Name<span className="required">*</span>
                </label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
              </div>
              <div className="enquiry-field">
                <label>
                  Email<span className="required"></span>
                </label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" />
              </div>
              <div className="enquiry-field">
                <label>
                  Phone<span className="required">*</span>
                </label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone" required />
              </div>
              <div className="enquiry-field">
                <label>
                  Function Date<span className="required">*</span>
                </label>
                <input type="date" name="date" value={form.date} onChange={handleChange} placeholder="Pick Your Function date" required />
              </div>
            </div>
            <button type="submit" className="enquiry-submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="enquiry-success quick-enquiry-thankyou-message">
            <h3>Thank you for your enquiry!</h3>
            <p>We have received your details. We will contact you soon.</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="enquiry-whatsapp-btn"
            >
              Send to WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuickEnquiry;

// NOTE: To receive emails at ramseethahall@gmail.com, ensure your Formspree form is set up and verified for that address in your Formspree dashboard. The code here only sends data to Formspree; email delivery is managed by Formspree.