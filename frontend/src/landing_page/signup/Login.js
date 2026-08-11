import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://zerodha-backend-z8lu.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    console.log("Saved user:", data.user);

    
   setTimeout(() => {
  window.location.href =
    ` https://zerodha-clone-seven-nu.vercel.app/`;
}, 200);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fafafa" }}>
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-lg-5 col-md-7">
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "40px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div className="text-center mb-4">
                <img
                  src="https://zerodha.com/static/images/logo.svg"
                  alt="Zerodha"
                  style={{ width: "140px", marginBottom: "20px" }}
                />

                <h3 style={{ fontWeight: "700" }}>Open your account</h3>

                <p style={{ color: "#666" }}>
                  Start investing with your Zerodha clone
                </p>
              </div>

              {error && <div className="alert alert-danger py-2">{error}</div>}

              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-3"
                  placeholder="Email address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  style={{ height: "48px", borderRadius: "10px" }}
                />

                <input
                  className="form-control mb-3"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  style={{ height: "48px", borderRadius: "10px" }}
                />

                <button
                  className="btn w-100"
                  type="submit"
                  style={{
                    background: "#387ed1",
                    color: "white",
                    height: "48px",
                    borderRadius: "10px",
                    fontWeight: "600",
                    border: "none",
                  }}
                >
                  Login
                </button>
              </form>

              <p className="text-center mt-4 mb-0">
                New account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#387ed1", textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
