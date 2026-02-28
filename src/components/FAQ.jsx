import React, { useState } from "react";
// Import the data
import { faqData } from "../data/faqData";

const FAQ = () => {
  // --- NEW: React State to track the open accordion ---
  // null means all are closed. A number means that specific index is open.
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // If you click the one that's already open, close it (set to null)
    // Otherwise, open the one you just clicked
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="pt-5 pb-5 overflow-hidden"
      style={{ backgroundColor: "#0a2259" }}
    >
      <div className="container-md">
        {/* HEADER */}
        <div className="mb-5 text-center text-lg-start">
          <span
            className="fw-bold text-uppercase small ls-2"
            style={{ color: "#f26522", letterSpacing: "2px" }}
          >
            Common Questions
          </span>
          <h2 className="display-6 fw-bold text-white mt-2">FAQs</h2>
          <p className="text-white opacity-75" style={{ maxWidth: "600px" }}>
            Everything you need to know about buying land with Avenue Land
            Ventures.
          </p>
        </div>

        <div className="row g-5 align-items-stretch">
          {/* LEFT COLUMN: Image */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="h-100 position-relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy Clients"
                className="img-fluid rounded shadow-lg w-100 h-100"
                style={{ objectFit: "cover", minHeight: "400px" }}
              />
              <div
                className="position-absolute bottom-0 start-0 p-3 text-white m-4 rounded shadow-lg"
                style={{ backgroundColor: "#f26522" }}
              >
                <h3 className="fw-bold mb-0">100%</h3>
                <small className="fw-medium">Transparent Process</small>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="col-lg-6">
            <div className="accordion custom-accordion">
              {faqData.map((faq, index) => {
                // --- NEW: Check if this specific item is the active one ---
                const isOpen = activeIndex === index;

                return (
                  <div
                    className={`accordion-item border-0 shadow-sm rounded overflow-hidden ${
                      index === faqData.length - 1 ? "mb-0" : "mb-3"
                    }`}
                    key={index}
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <h2 className="accordion-header">
                      <button
                        // --- NEW: Dynamically add the 'collapsed' class and onClick event ---
                        className={`accordion-button fw-bold py-4 ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          color: "#0a2259",
                          backgroundColor: "#ffffff",
                          boxShadow: "none",
                          fontSize: "1.05rem",
                        }}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      // --- NEW: Dynamically add the 'show' class to display the text ---
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          backgroundColor: "#fafafa",
                          color: "#444444",
                          borderTop: "1px solid #eaeaea",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
