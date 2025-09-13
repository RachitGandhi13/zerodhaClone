import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [focus, setFocus] = useState({ name: false, email: false, password: false });
  const [hover, setHover] = useState(false);

  const theme = {
    surface: "#ffffff",
    surfaceAlt: "#f9fafb",
    text: "#232323",
    muted: "#6b7280",
    primary: "#1e40af",
    danger: "#e11d48",
    border: "#e5e7eb",
    shadow: "0 10px 25px rgba(0,0,0,.06)",
    radius: 14,
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      alert("Account created!");
      setFormData({ name: "", email: "", password: "" });
    }
  };

  const hasError = (field) => Boolean(errors[field]);

  const containerStyle = {
    maxWidth: 480,
    margin: "40px auto",
    padding: 30,
    borderRadius: theme.radius,
    background: theme.surface,
    border: `1px solid ${theme.border}`,
    boxShadow: theme.shadow,
  };

  const headerStyle = { textAlign: "center", marginBottom: 8, fontWeight: 700, fontSize: 24, color: theme.text };
  const subtitleStyle = { textAlign: "center", marginBottom: 24, color: theme.muted, fontSize: 14 };
  const fieldWrap = { marginBottom: 18 };
  const labelStyle = { display: "block", marginBottom: 6, fontSize: 14, color: theme.text };

  const inputBase = {
    width: "100%",
    padding: "12px 12px",
    fontSize: 15,
    borderRadius: 8,
    border: `1px solid ${theme.border}`,
    background: "#fff",
    transition: "border-color .2s, box-shadow .2s",
    outline: "none",
  };

  const inputFocus = { borderColor: theme.primary, boxShadow: `0 0 0 3px rgba(30,64,175,0.15)` };
  const inputError = { borderColor: theme.danger, boxShadow: `0 0 0 3px rgba(225,29,72,0.15)` };
  const errorText = { color: theme.danger, fontSize: 13, marginTop: 6, display: "flex", alignItems: "center", gap: 6 };
  const helperIcon = { display: "inline-block", width: 16, height: 16, borderRadius: 3, background: theme.danger, color: "#fff", textAlign: "center", lineHeight: "16px", fontSize: 12, marginRight: 6 };

  const btnStyle = {
    width: "100%",
    padding: "12px 0",
    fontSize: 16,
    borderRadius: 50,
    border: "none",
    background: theme.primary,
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  };

  const btnHover = { background: "#15428b" };

  return (
    <div style={containerStyle} aria-label="Signup form">
      <h2 style={headerStyle}>Create Your Account</h2>
      <p style={subtitleStyle}>Join our Zerodha Family today. It only takes a minute.</p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name Field */}
        <div style={fieldWrap}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              ...inputBase,
              ...(focus.name ? inputFocus : {}),
              ...(hasError("name") ? inputError : {}),
            }}
            placeholder="Your Full Name"
            onFocus={() => setFocus({ ...focus, name: true })}
            onBlur={() => setFocus({ ...focus, name: false })}
            aria-describedby={errors.name ? "nameError" : undefined}
          />
          {errors.name && (
            <span id="nameError" style={errorText}>
              <span style={helperIcon}>!</span>
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div style={fieldWrap}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              ...inputBase,
              ...(focus.email ? inputFocus : {}),
              ...(hasError("email") ? inputError : {}),
            }}
            placeholder="Your Email ID"
            onFocus={() => setFocus({ ...focus, email: true })}
            onBlur={() => setFocus({ ...focus, email: false })}
            aria-describedby={errors.email ? "emailError" : undefined}
          />
          {errors.email && (
            <span id="emailError" style={errorText}>
              <span style={helperIcon}>!</span>
              {errors.email}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div style={fieldWrap}>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              ...inputBase,
              ...(focus.password ? inputFocus : {}),
              ...(hasError("password") ? inputError : {}),
            }}
            placeholder="At least 6 characters"
            onFocus={() => setFocus({ ...focus, password: true })}
            onBlur={() => setFocus({ ...focus, password: false })}
            aria-describedby={errors.password ? "passwordError" : undefined}
          />
          {errors.password && (
            <span id="passwordError" style={errorText}>
              <span style={helperIcon}>!</span>
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