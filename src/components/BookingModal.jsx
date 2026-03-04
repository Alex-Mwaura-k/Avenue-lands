import React, { useRef, useState, useEffect } from "react";
// Import your properties array correctly based on your file structure
import { properties } from "../data/propertiesData.js"; 

const BookingModal = () => {
  const closeBtnRef = useRef(null);
  const [minDate, setMinDate] = useState("");

  // Calculate today's date to prevent selecting past dates
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Ensure only Wednesdays (3) or Saturdays (6) are selected
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDay();

    if (day !== 3 && day !== 6) {
      e.target.setCustomValidity(
        "Site visits are only scheduled on Wednesdays and Saturdays. Please select a valid day."
      );
      e.target.reportValidity();
      e.target.value = ""; // Clears the input if invalid
    } else {
      e.target.setCustomValidity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger the coming soon alert
    alert("This feature is coming soon! Please try contacting us via WhatsApp to schedule your visit.");

    // Close the modal programmatically after the user clicks "OK" on the alert
    if (closeBtnRef.current) {
      closeBtnRef.current.click();
    }
  };

  // Filter out sold-out properties
  const availableProperties = properties.filter(
    (property) => property.status === "Available"
  );

  return (
    <div className="modal fade" tabIndex="-1" id="booking-Modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow">
          
          <div className="modal-header bg-primary-custom border-0">
            <h5 className="modal-title fw-bold text-white">Schedule Visit</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeBtnRef}
            ></button>
          </div>

          <form id="bookingForm" onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    id="firstName"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    id="lastName"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  id="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone No. (07... 01.../+254...)"
                  id="telephone"
                  pattern="^(\+254\d{9}|0[17]\d{8})$"
                  title="Format must be +254xxxxxxxxx, 07xxxxxxxx, or 01xxxxxxxx"
                  onInput={(e) => e.target.setCustomValidity("")}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter a valid 10-digit number starting with 07 or 01, or start with +254"
                    )
                  }
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="form-floating col">
                  <input
                    id="datePicker"
                    type="date"
                    className="form-control"
                    placeholder="Pick a desired date"
                    min={minDate}
                    onChange={handleDateChange}
                    onFocus={(e) => e.target.showPicker()}
                    required
                  />
                  <label className="mx-2 mb-2 text-muted" htmlFor="datePicker">
                    Schedule Date
                  </label>
                </div>

                <div className="form-floating col">
                  <select
                    id="destinationSelector"
                    className="form-control form-select"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a Site
                    </option>
                    {/* Dynamically map the available properties */}
                    {availableProperties.map((property) => (
                      <option key={property.id} value={property.title}>
                        {property.title}
                      </option>
                    ))}
                  </select>
                  <label
                    className="mx-2 mb-2 text-muted"
                    htmlFor="destinationSelector"
                  >
                    Select Site
                  </label>
                </div>
              </div>
            </div>

            <div className="modal-footer border-0 pb-4 pe-4">
              <button
                type="button"
                className="btn btn-outline-secondary px-4 rounded-pill"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-primary-custom text-white px-4 fw-bold rounded-pill"
              >
                Schedule
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BookingModal;