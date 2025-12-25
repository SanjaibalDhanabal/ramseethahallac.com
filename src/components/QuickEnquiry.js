import React, { useState } from "react";
import "../styles/QuickEnquiry.css"; // Create this file for the styles below


const QuickEnquiry = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState(null);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  // User's WhatsApp number (with country code, no +)
  const whatsappNumber = "918870888779"; // Do not use +

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Save last submitted data for WhatsApp
    setLastSubmitted({ ...form });
    // Send to Formspree (new endpoint)
    const res = await fetch("https://formspree.io/f/mykgvvwv", {
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
      setSubmitted(true);
      setShowWhatsapp(true);
    } else {
      alert("There was an error submitting the form. Please try again or use WhatsApp.");
    }
  };

  // Use last submitted data for WhatsApp after submit, otherwise use current form
  const whatsappData = submitted && lastSubmitted ? lastSubmitted : form;
  const whatsappMsg = encodeURIComponent(
    `Quick Enquiry\nName: ${whatsappData.name}\nEmail: ${whatsappData.email}\nPhone: ${whatsappData.phone}\nDate: ${whatsappData.date}`
  );

  // Open WhatsApp in a new tab
  const handleWhatsappSend = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
  };

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
        ) : showWhatsapp ? (
          <div className="enquiry-success">
            <h3 style={{ color: '#fff', fontSize: '24px', fontFamily: 'Lato, Arial, sans-serif', fontWeight: 800 }}>Thank you for your enquiry!</h3>
            <p style={{ color: '#fff', fontSize: '16px', fontFamily: 'Lato, Arial, sans-serif', fontWeight: 800 }}>We have received your details. For faster response, you can also send your enquiry to our WhatsApp.</p>
            <button
              onClick={handleWhatsappSend}
              className="enquiry-whatsapp-btn enquiry-whatsapp-btn--white"
              style={{ display: 'inline-block', marginTop: 16 }}
            >
              Send to WhatsApp
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default QuickEnquiry;

// NOTE: To receive emails at ramseethahall@gmail.com, ensure your Formspree form is set up and verified for that address in your Formspree dashboard. The code here only sends data to Formspree; email delivery is managed by Formspree.