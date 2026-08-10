import React from "react";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <h1>404 Not Found</h1>
        <p className="text-muted">
          We couldn’t find the page you were looking for. Visit  {"   "}
          <Link to="/">Zerodha’s home page</Link>
        </p>
      </div>
    </div>
  );
};
