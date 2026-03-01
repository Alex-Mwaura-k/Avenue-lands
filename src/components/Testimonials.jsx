import { useState, useEffect } from "react";
import { validIdsDB, initialReviews } from "../data/testimonialsData";

const Testimonials = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = isMobile ? 1 : 6;
  const isCarouselMode = reviews.length > itemsPerPage;

  useEffect(() => {
    if (!isCarouselMode || isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, reviews.length, isCarouselMode, isPaused]);

  const nextSlide = () => {
    if (activeIndex >= reviews.length - itemsPerPage) setActiveIndex(0);
    else setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (activeIndex === 0) setActiveIndex(reviews.length - itemsPerPage);
    else setActiveIndex((prev) => prev - 1);
  };

  const togglePause = () => setIsPaused(!isPaused);

  const displayReviews = isCarouselMode
    ? reviews.slice(activeIndex, activeIndex + itemsPerPage)
    : reviews;

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    idNumber: "",
    role: "",
    location: "",
    message: "",
    rating: 5,
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState("idle");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size exceeds 2MB limit. Please choose a smaller image.");
        e.target.value = "";
        setFormData({ ...formData, image: null });
        setImagePreview(null);
        return;
      }
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message.length < 85 || formData.message.length > 150) return;

    setStatus("checking");
    setTimeout(() => {
      const isValid = validIdsDB.includes(formData.idNumber.trim());

      if (isValid) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus("idle");
    setFormData({
      name: "",
      idNumber: "",
      role: "",
      location: "",
      message: "",
      rating: 5,
      image: null,
    });
    setImagePreview(null);
  };

  const isMessageValid =
    formData.message.length >= 85 && formData.message.length <= 150;

  return (
    <section className="testimonials-section pt-3 pb-3 bg-white position-relative">
      <div className="container-md">
        <div className="row align-items-end mb-3">
          <div className="col-lg-8">
            <span className="secondary-text fw-bold text-uppercase small ls-2 brand-text-orange">
              Testimonials
            </span>
            <h2 className="display-6 fw-bold text-dark mt-2">
              What the society <span className="text-stroke-brand">Says</span>
            </h2>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <button
              className="btn btn-dark px-4 py-2 rounded-0 shadow"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-pencil-square me-2"></i> Write a Review
            </button>
          </div>
        </div>

        <div className="position-relative">
          <div className="row g-4 justify-content-center transition-all">
            {displayReviews.length > 0 ? (
              displayReviews.map((review) => (
                <div
                  key={review.id}
                  className="d-flex col-md-4 fade-in-animation"
                >
                  <div className="card border-0 shadow-sm p-4 bg-light position-relative h-100 w-100">
                    <div className="position-absolute top-0 end-0 p-3 opacity-25 brand-text-orange">
                      <i className="bi bi-quote fs-1"></i>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="rounded-circle me-3 testimonial-img"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="fw-bold mb-0 text-dark">
                          {review.name}
                        </h6>
                        <small
                          className="brand-text-orange fw-bold text-uppercase"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {review.role}
                        </small>
                        <span className="text-muted small d-block">
                          {review.location}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 text-warning small">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < review.rating ? "bi-star-fill" : "bi-star"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <p
                      className="text-secondary small fst-italic mb-4"
                      style={{ lineHeight: "1.6" }}
                    >
                      "{review.text}"
                    </p>
                    <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                      <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill small">
                        <i className="bi bi-patch-check-fill me-1"></i> Verified
                      </span>
                      <small
                        className="text-muted"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {review.date
                          ? review.date.toLocaleDateString()
                          : "Recent"}
                      </small>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-5">
                <p>No reviews yet. Be the first!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {isCarouselMode && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            className="btn btn-outline-brand"
            onClick={prevSlide}
            title="Previous"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className={`btn ${isPaused ? "btn-brand" : "btn-outline-brand"}`}
            onClick={togglePause}
            title={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? (
              <i className="bi bi-play-fill"></i>
            ) : (
              <i className="bi bi-pause-fill"></i>
            )}
          </button>
          <button
            className="btn btn-outline-brand"
            onClick={nextSlide}
            title="Next"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}

      {showModal && (
        <div
          className="modal show d-block testimonials-modal"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 shadow-lg">
              <div
                className="modal-header text-white"
                style={{ backgroundColor: "#021a40" }}
              >
                <h5 className="modal-title fw-bold text-white">
                  Share Your Experience
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-4 p-lg-5">
                {status === "success" ? (
                  <div className="text-center py-4">
                    <div className="mb-3">
                      <i className="bi bi-check-circle-fill text-success display-1"></i>
                    </div>
                    <h4 className="fw-bold text-success">
                      Verification Successful!
                    </h4>
                    <p className="text-muted mt-3">
                      Thank you, <strong>{formData.name}</strong>. Your review
                      has been submitted to the admin for approval. It will
                      appear on the site within 24 hours.
                    </p>
                    <button
                      className="btn btn-dark mt-3 px-4"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {status === "error" && (
                      <div
                        className="alert alert-danger mb-4 shadow-sm"
                        role="alert"
                      >
                        <strong>Verification Failed:</strong> ID Number not
                        found.
                      </div>
                    )}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold small">
                            Full Name{" "}
                            <span className="brand-text-orange">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control border-brand"
                            name="name"
                            value={formData.name}
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-bold small brand-text-orange">
                            ID Number{" "}
                            <span className="brand-text-orange">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control border-brand"
                            name="idNumber"
                            value={formData.idNumber}
                            placeholder="e.g. 12345678"
                            required
                            onChange={handleInputChange}
                          />
                          <div className="form-text x-small">
                            Used for verification only.
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6 mb-3">
                            <label className="form-label fw-bold small">
                              Your Role
                            </label>
                            <select
                              className="form-select border-brand"
                              name="role"
                              value={formData.role}
                              required
                              onChange={handleInputChange}
                            >
                              <option value="" disabled>
                                Select...
                              </option>
                              <option value="Investor">Investor</option>
                              <option value="Home Owner">Home Owner</option>
                              <option value="Diaspora Client">
                                Diaspora Client
                              </option>
                              <option value="Business Owner">
                                Business Owner
                              </option>
                              <option value="Partner">Partner</option>
                            </select>
                          </div>
                          <div className="col-6 mb-3">
                            <label className="form-label fw-bold small">
                              Location
                            </label>
                            <input
                              type="text"
                              className="form-control border-brand"
                              name="location"
                              value={formData.location}
                              placeholder="e.g. Malindi"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label fw-bold small">
                            Upload Photo (Max 2MB)
                          </label>
                          <div className="d-flex align-items-center gap-3">
                            <div className="flex-grow-1">
                              <input
                                type="file"
                                className="form-control form-control-sm border-brand"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                            </div>
                            {imagePreview && (
                              <div className="flex-shrink-0">
                                <img
                                  src={imagePreview}
                                  alt="Preview"
                                  className="rounded-circle shadow-sm"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                    border: "2px solid #ea580c",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold small">
                            Your Message{" "}
                            <span className="brand-text-orange">*</span>
                          </label>
                          <textarea
                            className={`form-control border-brand ${
                              !isMessageValid && formData.message.length > 0
                                ? "is-invalid border-danger"
                                : ""
                            }`}
                            rows="4"
                            name="message"
                            value={formData.message}
                            placeholder="Tell us about your experience..."
                            required
                            minLength="85"
                            maxLength="150"
                            onChange={handleInputChange}
                          ></textarea>
                          <div className="d-flex justify-content-between form-text x-small">
                            <span
                              className={
                                formData.message.length < 85
                                  ? "brand-text-orange"
                                  : "text-success"
                              }
                            >
                              Min: 85
                            </span>
                            <span
                              className={
                                formData.message.length > 150
                                  ? "brand-text-orange"
                                  : ""
                              }
                            >
                              {formData.message.length}/150
                            </span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold small">
                            Rating
                          </label>
                          <div className="d-flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <div
                                key={star}
                                className="form-check form-check-inline m-0"
                              >
                                <input
                                  className="form-check-input d-none"
                                  type="radio"
                                  name="rating"
                                  id={`star${star}`}
                                  value={star}
                                  onChange={handleInputChange}
                                  checked={
                                    parseInt(formData.rating, 10) === star
                                  }
                                />
                                <label
                                  className={`form-check-label fs-4 ${
                                    parseInt(formData.rating, 10) >= star
                                      ? "text-warning"
                                      : "text-muted"
                                  }`}
                                  htmlFor={`star${star}`}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="bi bi-star-fill"></i>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-brand py-2 px-5 fw-bold shadow-sm rounded-pill"
                        disabled={status === "checking" || !isMessageValid}
                      >
                        {status === "checking" ? (
                          <span>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Verifying...
                          </span>
                        ) : (
                          "Verify & Submit Review"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
