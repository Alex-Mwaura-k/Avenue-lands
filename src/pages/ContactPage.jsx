import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Contact from "../components/Contact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Avenue Lands Ventures. Visit our offices at Main stage Exit, Star House, Suite 405, Ruiru, call us, or send a message to book a free site visit for prime land in Kenya."
        />
        <meta
          name="keywords"
          content="Contact Avenue Lands Ventures, Real Estate Kenya Contact, Buy Land Ruiru, Site Visit Booking, Land for sale contacts"
        />
        <link rel="canonical" href="https://www.avenuelandsventures.co.ke/contact" />
        <meta property="og:title" content="Contact Us" />
        <meta 
          property="og:description" 
          content="Get in touch with Avenue Lands Ventures to book a free site visit or inquire about our prime plots for sale in Kenya." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avenuelandsventures.co.ke/contact" />
      </Helmet>

      <Contact showBreadcrumb={true} />
    </div>
  );
};

export default ContactPage;