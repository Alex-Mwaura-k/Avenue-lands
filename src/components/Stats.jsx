import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [counts, setCounts] = useState({
    locations: 0,
    investors: 0,
    assurance: 0,
    projects: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 2000;
    const startTime = performance.now();
    const targets = {
      locations: 20,
      investors: 500,
      assurance: 100,
      projects: 20,
    };

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        locations: Math.floor(progress * targets.locations),
        investors: Math.floor(progress * targets.investors),
        assurance: Math.floor(progress * targets.assurance),
        projects: Math.floor(progress * targets.projects),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="row justify-content-between g-4 w-100 m-0" ref={sectionRef}>
      <div className="col-6 col-md-auto px-0">
        <div className="stat-box d-flex align-items-center">
          <i className="bi bi-geo-alt text-secondary-custom fs-1 me-3"></i>
          <div>
            <h3 className="text-white fw-bold mb-0">{counts.locations}+</h3>
            <span className="text-white small text-uppercase ls-2">
              Prime Locations
            </span>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-auto px-0">
        <div className="stat-box d-flex align-items-center">
          <i className="bi bi-people text-secondary-custom fs-1 me-3"></i>
          <div>
            <h3 className="text-white fw-bold mb-0">{counts.investors}+</h3>
            <span className="text-white small text-uppercase ls-2">
              Happy Investors
            </span>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-auto px-0">
        <div className="stat-box d-flex align-items-center">
          <i className="bi bi-file-earmark-check text-secondary-custom fs-1 me-3"></i>
          <div>
            <h3 className="text-white fw-bold mb-0">{counts.assurance}%</h3>
            <span className="text-white small text-uppercase ls-2">
              Title Assurance
            </span>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-auto px-0">
        <div className="stat-box d-flex align-items-center">
          <i className="bi bi-house-check text-secondary-custom fs-1 me-3"></i>
          <div>
            <h3 className="text-white fw-bold mb-0">{counts.projects}+</h3>
            <span className="text-white small text-uppercase ls-2">
              Projects Done
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
