import React from "react";
import { Link } from "react-router-dom";

const Contact = ({ showBreadcrumb }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <section
      id="contact"
      className="contact-feature position-relative"
      style={{
        minHeight: "90dvh", // Forces the section to be at least 90% of screen height
        display: "flex",
        alignItems: "center", // Vertically centers the content inside the 90dvh space
        paddingTop: "3rem",
        paddingBottom: "3rem",
        backgroundColor: "#f8f9fa", // A very soft, clean off-white background
      }}
    >
      {/* Background Squares (tech-grid-bg) have been officially removed! */}

      <div className="container-md position-relative z-2 w-100">
        {/* --- BREADCRUMB --- */}
        {showBreadcrumb && (
          <nav aria-label="breadcrumb" className="mb-4">
            <ol
              className="breadcrumb"
              style={{ backgroundColor: "transparent", padding: 0, margin: 0 }}
            >
              <li className="breadcrumb-item">
                <Link
                  to="/"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#0a2259" }}
                >
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        )}

        <div className="row align-items-stretch justify-content-center g-4">
          {/* LEFT COLUMN: Info (Top) + Map (Bottom) */}
          <div className="col-lg-6 col-md-10 d-flex flex-column">
            {/* 1. TEXT AREA */}
            <div className="text-area-wrapper mb-4 pe-lg-4">
              <span
                className="fw-bold text-uppercase small ls-2"
                style={{ color: "#f26522" }}
              >
                Connect With Us
              </span>
              <h2 className="display-5 fw-bold text-dark mt-2 mb-3">
                Get in <span style={{ color: "#f26522" }}>Touch</span>
              </h2>
              <p className="text-muted mb-4">
                Ready to own your piece of Kenya? Visit our offices at
                <strong>
                  {" "}
                  Main Stage Exit, Star House, Suite 405, Ruiru
                </strong>{" "}
                or reach out directly.
              </p>

              {/* Contact Details */}
              <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
                <div className="d-flex align-items-center mb-2 mb-md-0">
                  <i
                    className="bi bi-telephone-fill fs-5 me-2"
                    style={{ color: "#f26522" }}
                  ></i>
                  <span className="fw-bold text-dark small">
                    +254 740 888 775
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-envelope-at-fill fs-5 me-2"
                    style={{ color: "#f26522" }}
                  ></i>
                  <span className="fw-bold text-dark small">
                    info@avenuelandventures.co.ke
                  </span>
                </div>
              </div>
            </div>

            {/* 2. MAP AREA */}
            <div
              className="map-standalone flex-grow-1 position-relative rounded shadow-sm overflow-hidden"
              style={{ minHeight: "250px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.51733276685!2d36.9536!3d-1.1485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f470000000000%3A0x0!2zRGFuam8gQ2VudHJlLCBSdWlydQ!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" // Replaced placeholder with an actual embed link structure
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div
                className="position-absolute bottom-0 start-0 m-3 px-3 py-1 bg-white rounded shadow-sm fw-bold small"
                style={{ zIndex: 10, color: "#0a2259" }}
              >
                <i
                  className="bi bi-geo-alt-fill me-1"
                  style={{ color: "#f26522" }}
                ></i>{" "}
                Ruiru HQ
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form Card */}
          <div className="col-lg-6 col-md-10">
            <div className="floating-card h-100 bg-white p-4 p-md-5 rounded shadow-sm border-0">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold text-dark mb-0">Send a Message</h4>
                <div className="live-indicator small fw-bold text-success">
                  <span
                    className="pulse-dot bg-success rounded-circle d-inline-block me-1"
                    style={{ width: "8px", height: "8px" }}
                  ></span>{" "}
                  Online
                </div>
              </div>

              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-person text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control bg-light border-start-0 ps-0 py-2"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-phone text-muted"></i>
                      </span>
                      <input
                        type="tel"
                        className="form-control bg-light border-start-0 ps-0 py-2"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-envelope text-muted"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control bg-light border-start-0 ps-0 py-2"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group">
                      <select
                        className="form-select bg-light py-2 text-muted"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Interested in...
                        </option>
                        <option value="Buy">Buying Property</option>
                        <option value="Visit">Site Visit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0 align-items-start pt-2">
                        <i className="bi bi-chat-dots text-muted"></i>
                      </span>
                      <textarea
                        rows="3"
                        className="form-control bg-light border-start-0 ps-0 py-2"
                        placeholder="Message..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn w-100 rounded-pill py-2 fw-bold text-uppercase small shadow-sm"
                      style={{ backgroundColor: "#0a2259", color: "#ffffff" }}
                    >
                      Send Message <i className="bi bi-send-fill ms-2"></i>
                    </button>
                  </div>

                  <div className="col-12 text-center mt-3 mb-2">
                    <span
                      className="text-muted small text-uppercase ls-2"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Or Contact Directly
                    </span>
                  </div>

                  <div className="col-6">
                    <a
                      href="tel:+254740888775"
                      className="btn w-100 rounded-pill py-2 small fw-bold"
                      style={{ border: "1px solid #0a2259", color: "#0a2259" }}
                    >
                      <i className="bi bi-telephone-fill me-2"></i> Call
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="https://maps.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100 rounded-pill py-2 small fw-bold shadow-sm"
                      style={{
                        backgroundColor: "#f26522",
                        color: "#ffffff",
                        border: "none",
                      }}
                    >
                      <i className="bi bi-cursor-fill me-2"></i> Directions
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
