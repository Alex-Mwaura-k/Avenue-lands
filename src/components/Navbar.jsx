import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { properties } from "../data/propertiesData"; // Make sure this path matches your folder structure

const Navbar = () => {
  // STATE MANAGEMENT
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  // REFS
  const closeButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  const location = useLocation();

  // CLOSE MENUS ON ROUTE CHANGE
  useEffect(() => {
    setIsPropertiesOpen(false);
    if (closeButtonRef.current) closeButtonRef.current.click();
  }, [location]);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isPropertiesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsPropertiesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPropertiesOpen]);

  // HANDLERS
  const toggleProperties = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPropertiesOpen(!isPropertiesOpen);
  };

  // --- NEW LOGIC: FILTER & FORMAT PROPERTIES ---
  // 1. Get the first 2 "Available" properties
  const availableProps = properties
    .filter((prop) => prop.status === "Available")
    .slice(0, 2);

  // 2. Get the first 2 "Sold Out" properties
  const soldOutProps = properties
    .filter((prop) => prop.status === "Sold Out")
    .slice(0, 2);

  // 3. Combine them into exactly 4 items
  const displayProperties = [...availableProps, ...soldOutProps];

  // 4. Helper to limit property names to exactly 2 words
  const formatTitle = (title) => {
    return title.split(" ").slice(0, 2).join(" ");
  };
  // ---------------------------------------------

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top site-navbar"
      data-bs-theme="dark"
    >
      <div className="container-md">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="/icons/logo.png"
            alt="Avenue Ventures"
            width="100"
            className="d-inline-block align-text-top"
          />
        </Link>

        {/* TOGGLE BUTTON */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* SIDEBAR (OFFCANVAS) */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              ref={closeButtonRef}
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* === PROPERTIES DROPDOWN === */}
              <li className="nav-item dropdown" ref={dropdownRef}>
                <a
                  className={`nav-link dropdown-toggle ${
                    isPropertiesOpen ? "show" : ""
                  }`}
                  href="#"
                  role="button"
                  onClick={toggleProperties}
                >
                  Properties
                </a>

                <ul
                  className={`dropdown-menu mt-2 ${
                    isPropertiesOpen ? "show" : ""
                  }`}
                >
                  {/* LINK 1: VIEW ALL */}
                  <li>
                    <Link
                      className="dropdown-item fw-bold small"
                      to="/properties"
                      style={{ color: "#a1a1a1" }}
                    >
                      View All Properties
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-1" />
                  </li>

                  {/* DYNAMIC MAPPING: Exactly 4 Items (2 Available, 2 Sold Out) */}
                  {displayProperties.map((property) => (
                    <li key={property.id}>
                      <Link
                        className="dropdown-item text-capitalize"
                        to={`/property/${property.slug}`}
                      >
                        {/* Use our helper to limit the text to 2 words */}
                        {formatTitle(property.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* === END PROPERTIES === */}

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* CONTACT INFO */}
            <div className="phone d-flex flex-column align-items-end mt-lg-0">
              <div className="p-number d-flex align-items-center">
                <a
                  href="tel:+254408888775"
                  className="nav-link p-0 contact-link"
                >
                  +254 740 888 775
                </a>
                <a href="#" className="text-decoration-none social-icon">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-decoration-none social-icon">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-decoration-none social-icon">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
              <div className="email small">
                <a
                  href="mailto:Avenuelandventures@gmail.com"
                  className="nav-link p-0 contact-link"
                >
                  info@avenuelandventures.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
