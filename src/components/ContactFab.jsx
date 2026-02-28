import React, { useState, useEffect, useRef } from "react";

const ContactFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);

  // Update these with your real details
  const phoneNumber = "+254740888775";
  const whatsappMessage =
    "Hello! I am interested in Investing with Avenue Lands. Can you provide more information?";

  const handleWhatsAppClick = () => {
    const cleanNumber = phoneNumber.replace("+", "");
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && fabRef.current && !fabRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={fabRef} className="contact-fab-container">
      <div className={`fab-menu ${isOpen ? "open" : "closed"}`}>
        <button
          onClick={handleWhatsAppClick}
          className="fab-button fab-whatsapp"
        >
          <i className="bi bi-whatsapp"></i>
          <span>WhatsApp</span>
        </button>

        <button onClick={handleCallClick} className="fab-button fab-call">
          <i className="bi bi-telephone-fill"></i>
          <span>Call Us</span>
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fab-main ${isOpen ? "open" : "closed"}`}
        aria-label="Contact Options"
      >
        {!isOpen && (
          <span className="ping-dot">
            <span className="ping-animate"></span>
            <span className="ping-static"></span>
          </span>
        )}

        {/* Switches between an 'X' close icon and a 'chat' icon */}
        {isOpen ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-chat-dots-fill"></i>
        )}
      </button>
    </div>
  );
};

export default ContactFab;
