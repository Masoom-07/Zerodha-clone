import React from "react";

export const Hero = () => {
  return (
    <div className="container">
      <div
        className="row text-center text-muted "
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h1 className="fs-2">Charges</h1>
        <p style={{ fontSize: "1.2em" }}>List of all charges and taxes</p>
      </div>
      <div className=" row">
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg"></img>
          <h1 className="fs-2" text-muted>
            Free equity delivery
          </h1>
          <p className="text-muted" style={{ fontSize: "1.2em" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/intradayTrades.svg"></img>
          <h1 className="fs-2  text-muted">Intraday and F&O trades</h1>
          <p className="text-muted" style={{ fontSize: "1.2em" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/images/pricing0.svg"></img>
          <h1 className="fs-2 text-muted">Free direct MF</h1>
          <p className="text-muted" style={{ fontSize: "1.2em" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges
          </p>
        </div>
      </div>
    </div>
  );
};
