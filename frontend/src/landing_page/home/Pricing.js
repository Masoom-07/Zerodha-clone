import React from "react";

const Pricing = () => {
  return (
    <div className="container p-3 mb-5">
      <div className="row">
        <div className="col-4 p-5">
          <h1 className="mb-5 fs-3"> Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-2"></div>
        <div className="col-6">
          <div className="row mt-5">
            <div className="col p-2">
              <img src="media\images\pricing0.svg" alt="price"></img>
              <p>Free account opening</p>
            </div>
            <div className="col p-2">
              <img src="media\images\pricing0.svg" alt="price"></img>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-2">
              <img src="media\images\pricing0.svg" alt="price"></img>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
