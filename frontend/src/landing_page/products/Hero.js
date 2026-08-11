import React from "react";

export const Hero = () => {
  return (
    <div className="container border-bottom pb-5">
      <div className="row text-center mt-5">
        <h1>Zerodha Products</h1>

        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>

        <p className="mt-3">
          Check out our{" "}
          <a href="https://zerodha.com/investments" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
};