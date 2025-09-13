import React from "react";

function OpenAccount() {
  return (
    <div className="container my-5 py-5 text-center rounded-4" style={{ background: "#1e40af", color: "#fff" }}>
      <h1 className="mt-4 mb-3 fs-1 fw-bold">Open a Zerodha Account</h1>
      <p className="fs-5 mb-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday & F&O trades.
      </p>
      <button
        className="btn btn-warning fs-5 fw-semibold"
        style={{ borderRadius: "50px", padding: "12px 36px" }}
      >
        Sign Up for Free
      </button>
    </div>
  );
}

export default OpenAccount;