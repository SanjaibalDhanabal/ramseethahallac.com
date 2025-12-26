// WhatsAppButton component is now hidden and not in use.
import React from 'react';
import '../styles/WhatsAppButton.css';

const whatsappNumber = '918870888779'; // Your WhatsApp number

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${whatsappNumber}`}
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <img
      src="/assets/icons/whatsapp.png"
      alt="WhatsApp"
      className="whatsapp-icon"
    />
  </a>
);

export default WhatsAppButton;