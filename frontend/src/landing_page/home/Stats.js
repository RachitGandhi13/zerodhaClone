import React from "react";

function Stats() {
  return (
    <div className="container-fluid py-5" style={{ background: "#1e40af" }}>
      <div className="container text-white">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 p-4">
            <h1 className="mb-5 fs-1 fw-bold text-warning">
              Trust with Confidence
            </h1>

            <div className="mb-4">
              <h2 className="fs-4 fw-semibold text-white">Customer-first always</h2>
              <p className="fs-6 text-light">
                That’s why <span className="text-warning">1.5+ crore customers</span> trust Zerodha with{" "}
                <span className="text-warning">₹4.5+ lakh crores</span> of equity investments and contribute to{" "}
                <span className="text-warning">15% of daily retail exchange volumes</span> in India.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="fs-4 fw-semibold text-white">No spam or gimmicks</h2>
              <p className="fs-6 text-light">
                No gimmicks, spam, or annoying push notifications. Just{" "}
                <span className="text-warning">high quality apps</span> that you use at your pace.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="fs-4 fw-semibold text-white">The Zerodha universe</h2>
              <p className="fs-6 text-light">
                Not just an app, but a whole ecosystem. Our investments in{" "}
                <span className="text-warning">30+ fintech startups</span> offer tailored services specific to your needs.
              </p>
            </div>

            <div>
              <h2 className="fs-4 fw-semibold text-white">Do better with money</h2>
              <p className="fs-6 text-light">
                With initiatives like <span className="text-warning">Nudge</span> and{" "}
                <span className="text-warning">Kill Switch</span>, we don’t just facilitate transactions — we actively help you do better.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6 p-4 text-center">
            <img
              src="media/images/ecosystem.png"
              alt="Ecosystem"
              className="img-fluid rounded-3 shadow-lg mb-4"
              style={{ maxWidth: "90%" }}
            />
            <div>
              <a
                href="#"
                className="mx-3 text-decoration-none fw-semibold text-warning link-hover"
              >
                Explore our products{" "}
                <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
              <a
                href="#"
                className="text-decoration-none fw-semibold text-warning link-hover"
              >
                Try Kite demo{" "}
                <i className="fa fa-long-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <style>{`
        .link-hover {
          transition: color 0.2s ease, margin-left 0.2s ease;
        }
        .link-hover:hover {
          color: #ffffff;
        }
        .link-hover:hover i {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
}

export default Stats;