import Stats from "./Stats";

const About = () => {
  return (
    <section id="about-us" className="about-section bg-primary-custom py-5">
      <div className="container-md pt-4">
        {/* Header - Centered for a modern look */}
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-lg-8">
            <span className="text-secondary-custom fw-bold text-uppercase small ls-2">
              About Us
            </span>
            <h2 className="text-light display-5 fw-bold mb-3 mt-2">
              Building Your <span className="text-stroke-light">Future</span>
            </h2>
            <p
              className="text-light opacity-75 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Located at Ruiru, Main Stage, Exit star house, Suite 405. We
              bridge the gap between dream and reality with title-deed-inclusive
              pricing and transparent processes.
            </p>
          </div>
        </div>

        {/* Mission & Vision - Card Layout */}
        <div className="row g-4 mb-5 pb-4 border-bottom-light">
          <div className="col-md-6">
            <div className="info-card p-4 h-100 rounded bg-white-trans shadow-sm transition-hover">
              <h4 className="text-secondary-custom d-flex align-items-center mb-3">
                <i className="bi bi-rocket-takeoff me-3 fs-3"></i>
                Our Mission
              </h4>
              <p className="text-light mb-0">
                To enable every investor to own property and empower
                livelihoods. We make land ownership smooth, transparent, and
                accessible.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card p-4 h-100 rounded bg-white-trans shadow-sm transition-hover">
              <h4 className="text-secondary-custom d-flex align-items-center mb-3">
                <i className="bi bi-eye me-3 fs-3"></i>
                Our Vision
              </h4>
              <p className="text-light mb-0">
                To be the most credible land selling company within Kenya. We
                envision a future where every investment guarantees security and
                growth.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values & Ownership Process - Split View */}
        <div className="row g-5 mb-5 align-items-center">
          {/* Left Column: Ownership Process */}
          <div className="col-lg-7">
            <h3 className="text-light h4 mb-4">
              Ownership <span className="text-secondary-custom">Process</span>
            </h3>
            <div className="row g-4">
              {[
                {
                  step: "01",
                  title: "Select",
                  desc: "Identify your preferred plot from our portfolio.",
                },
                {
                  step: "02",
                  title: "Visit",
                  desc: "We offer free site visits. See the beacons yourself.",
                },
                {
                  step: "03",
                  title: "Secure",
                  desc: "Pay a deposit to book. Flexible payment plans available.",
                },
                {
                  step: "04",
                  title: "Own",
                  desc: "Complete payment. We process and deliver your Title Deed.",
                },
              ].map((item, idx) => (
                <div key={idx} className="col-sm-6">
                  <div className="process-step transition-hover p-3 rounded border border-light-subtle">
                    <h2 className="text-stroke-light mb-2 lh-1">{item.step}</h2>
                    <h6 className="text-white fw-bold mb-1">{item.title}</h6>
                    <p className="text-light opacity-75 small mb-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Values */}
          <div className="col-lg-5">
            <div className="values-container bg-dark-trans p-4 rounded shadow">
              <h5 className="text-light text-uppercase mb-4 ls-2 small border-bottom-light pb-2">
                Core Values
              </h5>
              {[
                {
                  num: "01",
                  title: "Integrity",
                  desc: "No hidden fees. Genuine Title Deeds.",
                },
                {
                  num: "02",
                  title: "Innovation",
                  desc: "Modern value addition (Fencing, Grading).",
                },
                {
                  num: "03",
                  title: "Empowerment",
                  desc: "Plots designed for immediate settlement.",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="value-item d-flex align-items-center mb-4 transition-hover"
                >
                  <span className="text-stroke-secondary fs-2 fw-bold me-4 w-50px text-center">
                    {val.num}
                  </span>
                  <div>
                    <h6 className="text-light fw-bold mb-1">{val.title}</h6>
                    <small className="text-light opacity-75">{val.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Stats />
      </div>
    </section>
  );
};

export default About;
