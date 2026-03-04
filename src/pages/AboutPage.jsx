import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div
      className="about-page-container"
      style={{
        backgroundColor: "#0a2b8b",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about Avenue Lands Ventures, our mission, vision, and our commitment to providing affordable land and 50x100 plots with ready title deeds in Kenya."
        />
        <meta 
          name="keywords" 
          content="about Avenue Lands Ventures, real estate company Kenya, affordable land Nairobi, property investment Kenya, land selling company" 
        />
        <meta property="og:title" content="About Us | Avenue Lands Ventures" />
        <meta 
          property="og:description" 
          content="Learn about Avenue Lands Ventures, our mission, vision, and our commitment to providing affordable land with ready title deeds in Kenya." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avenuelandsventures.co.ke/about" />
        <link rel="canonical" href="https://www.avenuelandsventures.co.ke/about" />
      </Helmet>

      <div className="container-md mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-danger text-decoration-none">
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              About Us
            </li>
          </ol>
        </nav>
      </div>

      <About />
    </div>
  );
};

export default AboutPage;