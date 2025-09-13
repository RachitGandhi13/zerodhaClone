import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  // Slightly richer theme tokens
  const theme = {
    surface: "#ffffff",
    surfaceAlt: "#f6f8fb",
    text: "#1f2937",
    muted: "#6b7280",
    primary: "#2563eb",
    danger: "#e11d48",
    border: "#e5e7eb",
    shadow: "0 10px 25px rgba(0,0,0,.06)",
    radius: 14
  };

  // Handle input updates
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Basic validation on submit
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      alert("Account created!");
      setFormData({ name: "", email: "", password: "" });
    }
  };

  // Helper: error indicator
  const hasError = (field) => Boolean(errors[field]);

  // Styles (enhanced)
  const containerStyle = {
    maxWidth: 480,
    margin: "40px auto",
    padding: 20,
    borderRadius: theme.radius,
    background: `linear-gradient(135deg, ${theme.surface}, ${theme.surfaceAlt})`,
    border: `1px solid ${theme.border}`,
    boxShadow: theme.shadow
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 700,
    fontSize: 22,
    letterSpacing: 0.4,
    color: theme.text
  };

  const subtitleStyle = {
    textAlign: "center",
    marginBottom: 20,
    color: theme.muted,
    fontSize: 13
  };

  const fieldWrap = { marginBottom: 18 };

  const labelStyle = { display: "block", marginBottom: 6, fontSize: 14, color: theme.text };

  const inputBase = {
    width: "100%",
    padding: "12px 12px",
    fontSize: 15,
    borderRadius: 8,
    border: `1px solid ${theme.border}`,
    background: "#fff",
    transition: "border-color .2s, box-shadow .2s"
  };

  const inputError = {
    borderColor: theme.danger,
    boxShadow: `0 0 0 3px rgba(225, 29, 72, 0.15)`
  };

  const errorText = { color: theme.danger, fontSize: 13, marginTop: 6, display: "flex", alignItems: "center", gap: 6 };

  const helperIcon = {
    display: "inline-block",
    width: 16,
    height: 16,
    borderRadius: 3,
    background: theme.danger,
    color: "#fff",
    textAlign: "center",
    lineHeight: "16px",
    fontSize: 12,
    marginRight: 6
  };

  const btnStyle = {
    width: "100%",
    padding: "12px 0",
    fontSize: 16,
    borderRadius: 8,
    border: "none",
    background: theme.primary,
    color: "#fff",
    cursor: "pointer",
    transition: "transform .05s ease-in-out",
  };

  const btnHover = {
    transform: "translateY(-1px)"
  };

  // Local hover state for button (optional)
  const [hover, setHover] = useState(false);

  return (
    <div style={containerStyle} aria-label="Signup form">
      <h2 style={headerStyle}>Create Your Account</h2>
      <p style={subtitleStyle}>Join our Zerodha Family today. It only takes a minute.</p>

      <form onSubmit={handleSubmit} noValidate>
        <div style={fieldWrap}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ ...inputBase, ...(hasError("name") ? inputError : {}) }}
            placeholder="Your Full Name"
            aria-describedby={errors.name ? "nameError" : undefined}
          />
          {errors.name && (
            <span id="nameError" style={errorText}>
              <span style={helperIcon} aria-hidden="true">!</span>
              {errors.name}
            </span>
          )}
        </div>

        <div style={fieldWrap}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ ...inputBase, ...(hasError("email") ? inputError : {}) }}
            placeholder="Your Mail ID"
            aria-describedby={errors.email ? "emailError" : undefined}
          />
          {errors.email && (
            <span id="emailError" style={errorText}>
              <span style={helperIcon} aria-hidden="true">!</span>
              {errors.email}
            </span>
          )}
        </div>

        <div style={fieldWrap}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ ...inputBase, ...(hasError("password") ? inputError : {}) }}
            placeholder="At least 6 characters"
            aria-describedby={errors.password ? "passwordError" : undefined}
          />
          {errors.password && (
            <span id="passwordError" style={errorText}>
              <span style={helperIcon} aria-hidden="true">!</span>
              {errors.password}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{ ...btnStyle, ...(hover ? btnHover : {}) }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Sign Up
        </button>
      </form>

      <div style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: theme.muted }}>
        By signing up, you agree to our terms.
      </div>
    </div>
  );
}

export default Signup;
