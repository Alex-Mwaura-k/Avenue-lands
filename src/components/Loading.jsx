const Loading = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        position: "fixed", // Locks it to the screen
        top: 0,
        left: 0,
        width: "100vw", // 100% of the browser width
        height: "100vh", // 100% of the browser height
        backgroundColor: "#ffffff", // Solid white to hide everything behind it
        zIndex: 99999, // Extremely high z-index so nothing overlaps it
      }}
    >
      {/* --- LOGO SECTION --- */}
      <div className="mb-4 text-center">
        <img
          src="/icons/logo.png"
          alt="Avenue Land Ventures"
          style={{ width: "150px", height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* --- MODERN SPINNER (Theme Colored) --- */}
      <div
        className="spinner-border"
        style={{
          width: "2.5rem",
          height: "2.5rem",
          color: "#0a2259" /* Deep blue matching Avenue theme */,
          borderWidth: "0.15em",
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      {/* --- SLEEK TYPOGRAPHY --- */}
      <p
        className="mt-3 small fw-bold text-uppercase"
        style={{
          color: "#0a2259",
          letterSpacing: "4px",
          opacity: 0.8,
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default Loading;
