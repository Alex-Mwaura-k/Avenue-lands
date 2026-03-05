import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { careersData } from "../data/careersData";

// --- NEW: Helper function to turn "Job Title" into "job-title" ---
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '') // Remove special characters
    .replace(/ +/g, '-');    // Replace spaces with hyphens
};

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isJobExpired = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    today.setHours(0, 0, 0, 0);
    deadlineDate.setHours(0, 0, 0, 0);
    return today > deadlineDate;
  };

  useEffect(() => {
    let results = careersData;

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      results = results.filter(
        (job) =>
          job.title.toLowerCase().includes(lowerTerm) ||
          job.location.toLowerCase().includes(lowerTerm) ||
          job.department.toLowerCase().includes(lowerTerm),
      );
    }

    if (filterStatus !== "All") {
      results = results.filter((job) => {
        const expired = isJobExpired(job.deadline);
        return filterStatus === "Expired" ? expired : !expired;
      });
    }

    setFilteredJobs(results);
  }, [searchTerm, filterStatus]);

  return (
    <div className="careers-page bg-light pb-5">
      <Helmet>
        <title>Careers</title>
        <meta name="description" content="Join our team at Avenue Lands Ventures. Explore open real estate jobs, sales positions, and career opportunities in Kenya." />
        <meta name="keywords" content="Real estate jobs Kenya, careers at Avenue Lands Ventures, property sales jobs, real estate careers Nairobi, hiring real estate agents" />
      </Helmet>

      {/* HERO SECTION */}
      <div className="bg-primary-custom text-white py-4 mb-5 text-center">
        <div className="container">
          <span className="text-secondary-custom fw-bold text-uppercase small ls-2">
            Join Our Team
          </span>
          <h1 className="display-4 fw-bold mt-2">
            Build Your <span className="text-stroke-white">Career</span> With Us
          </h1>
        </div>
      </div>

      {/* FILTERS & LISTINGS */}
      <div className="container-md">
        <div className="row mb-4 align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h3 className="fw-bold text-secondary-custom border-start border-4 border-secondary-custom ps-3 mb-0">
              Open Positions
            </h3>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search job title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="form-select w-auto"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="All">All Jobs</option>
                <option value="Available">Available</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {filteredJobs.map((job) => {
            const expired = isJobExpired(job.deadline);
            // --- NEW: Generate the slug for the URL ---
            const jobSlug = generateSlug(job.title);

            return (
              <div key={job.id} className="col-md-6 col-lg-4">
                {/* --- CHANGED: Now links to /careers/job-title instead of /careers/1 --- */}
                <Link
                  to={expired ? "#" : `/careers/${jobSlug}`}
                  className="text-decoration-none h-100 d-block"
                  style={{ cursor: expired ? "default" : "pointer" }}
                >
                  <div className={`card h-100 border-0 shadow-sm hover-shadow transition-all ${expired ? "opacity-75 bg-light" : ""}`}>
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge fw-bold" style={{ backgroundColor: "rgba(228, 129, 90, 0.15)", color: "var(--secondary-custom)" }}>
                          {job.department}
                        </span>
                        {expired && <span className="badge bg-secondary">Closed</span>}
                      </div>

                      <h5 className="card-title fw-bold text-dark">{job.title}</h5>

                      <div className="text-muted small mb-4 mt-2">
                        <p className="mb-1"><i className="bi bi-geo-alt-fill text-secondary me-2"></i>{job.location}</p>
                        <p className="mb-1"><i className="bi bi-clock-fill text-secondary me-2"></i>{job.type}</p>
                        <p className={`mb-0 fw-bold ${expired ? "text-danger" : "text-success"}`}>
                          <i className="bi bi-calendar-event me-2"></i>Deadline: {job.deadline}
                        </p>
                      </div>

                      <p className="card-text text-secondary small mb-4 flex-grow-1">
                        {job.description.substring(0, 100)}...
                      </p>

                      <div className={`btn w-100 fw-bold mt-auto ${expired ? "btn-secondary disabled" : "btn-success"}`}>
                        {expired ? "Applications Closed" : "View Details & Apply"}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Careers;