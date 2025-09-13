import React from "react";

function Hero() {
  return (
    <section
      className="text-center py-5"
      style={{
        background: "linear-gradient(135deg, #1e40af 0%, #fbbf24 100%)",
        color: "#fff",
      }}
    >
      <div className="container">
        <h1
          className="fs-1 fw-bold mb-3"
          style={{ maxWidth: "700px", margin: "0 auto", color: "#fff" }}
        >
          Invest in Your Future, Today
        </h1>
        <p
          className="fs-5 mb-4"
          style={{ maxWidth: "600px", margin: "0 auto", color: "#f0f0f0" }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn fs-5 fw-semibold"
          style={{
            background: "#fbbf24",
            color: "#1e40af",
            padding: "14px 40px",
            borderRadius: "50px",
            border: "none",
            boxShadow: "0 4px 12px rgba(251,191,36,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#fff";
            e.target.style.color = "#1e40af";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#fbbf24";
            e.target.style.color = "#1e40af";
          }}
        >
          Open Account
        </button>
      </div>
    </section>
  );
}

export default Hero;