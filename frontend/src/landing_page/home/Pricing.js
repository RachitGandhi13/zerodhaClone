import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row p-5 shadow-lg rounded-4 bg-light align-items-center">
        {/* Left */}
        <div className="col-md-5">
          <h1 className="mb-4 fs-2 fw-bold text-primary">Unbeatable Pricing</h1>
          <p className="text-secondary fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="d-inline-flex align-items-center text-decoration-none fw-semibold text-warning mt-3 link-hover"
          >
            See Pricing <i className="fa fa-long-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Right - Pricing Cards */}
        <div className="col-md-7 mt-5 mt-md-0">
          <div className="row text-center g-4">
            {[
              {
                img: "media/images/pricing0.svg",
                text: "Free account opening",
              },
              {
                img: "media/images/pricingEquity.svg",
                text: "Free equity delivery & direct mutual funds",
              },
              {
                img: "media/images/intradaytrades.svg",
                text: "Intraday and F&O",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="p-4 bg-white rounded-4 shadow-sm h-100 hover-card">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="mb-3"
                    style={{ width: "60px" }}
                  />
                  <p className="text-muted fw-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hover-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .link-hover:hover i {
          margin-left: 6px;
        }
      `}</style>
    </div>
  );
}

export default Pricing;