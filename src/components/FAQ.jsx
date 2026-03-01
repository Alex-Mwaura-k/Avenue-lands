import React, { useState } from "react";
import { faqData } from "../data/faqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-5 pb-5 overflow-hidden bg-primary-custom">
      <div className="container-md">
        <div className="mb-5 text-center text-lg-start">
          <span
            className="fw-bold text-uppercase small text-secondary-custom ls-2"
            style={{ letterSpacing: "2px" }}
          >
            Common Questions
          </span>
          <h2 className="display-6 fw-bold text-white mt-2">FAQs</h2>
          <p className="text-white opacity-75" style={{ maxWidth: "600px" }}>
            Everything you need to know about buying land with Avenue Land
            Ventures.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Happy Clients"
                  className="img-fluid rounded shadow-lg w-100"
                  style={{ objectFit: "cover", height: "500px" }}
                />
                <div className="position-absolute bottom-0 start-0 p-3 text-white m-4 rounded shadow-lg bg-secondary-custom">
                  <h3 className="fw-bold mb-0">100%</h3>
                  <small className="fw-medium">Transparent Process</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion custom-accordion">
              {faqData.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    className={`accordion-item border-0 shadow-sm rounded overflow-hidden bg-white ${
                      index === faqData.length - 1 ? "mb-0" : "mb-3"
                    }`}
                    key={index}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button fw-bold py-4 text-primary-custom bg-white ${
                          isOpen ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          boxShadow: "none",
                          fontSize: "1.05rem",
                        }}
                      >
                        {faq.question}
                      </button>
                    </h2>

                    {/* --- THE ANIMATION MAGIC HAPPENS HERE --- */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        transition: "grid-template-rows 0.3s ease-in-out",
                      }}
                    >
                      <div style={{ overflow: "hidden" }}>
                        <div className="accordion-body bg-light text-muted border-top">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                    {/* ---------------------------------------- */}
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
