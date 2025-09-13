import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row p-5 shadow-lg rounded-4 bg-white align-items-center">
        {/* Left - Image */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid rounded-3"
            style={{ maxWidth: "85%" }}
          />
        </div>

        {/* Right - Content */}
        <div className="col-md-6 mt-4 mt-md-0">
          <h1 className="mb-4 fs-2 fw-bold text-primary">
            Free and Open Market Education
          </h1>
          <p className="text-secondary fs-5 mb-4">
            <strong>Varsity</strong>, the largest online stock market education
            book in the world covering everything from the basics to advanced
            trading.
          </p>

          <a
            href="#"
            className="d-inline-flex align-items-center text-decoration-none fw-semibold text-warning link-hover mb-4"
          >
            Varsity <i className="fa fa-long-arrow-right ms-2"></i>
          </a>

          <p className="text-secondary fs-5 mt-4 mb-4">
            <strong>TradingQ&amp;A</strong>, the most active trading and
            investment community in India for all your market-related queries.
          </p>

          <a
            href="#"
            className="d-inline-flex align-items-center text-decoration-none fw-semibold text-warning link-hover"
          >
            Trading Q&amp;A <i className="fa fa-long-arrow-right ms-2"></i>
          </a>
        </div>
      </div>

      <style>{`
        .link-hover {
          transition: color 0.2s ease, margin-left 0.2s ease;
        }
        .link-hover:hover {
          color: #1e40af;
        }
        .link-hover:hover i {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
}

export default Education;