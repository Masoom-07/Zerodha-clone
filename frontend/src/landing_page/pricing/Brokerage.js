import React from "react";

export const Brokerage = () => {
  return (
    <div className="container my-5">
      <div
        className="table-responsive"
        style={{
          border: "1px solid #dee2e6",
          borderRadius: "6px",
        }}
      >
        
        <table className="table table-bordered mb-0 align-middle">
          <thead>
            <tr className="text-center">
              <th style={{ width: "12%" }}></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>

            <tr>
              <td>STT/CTT</td>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.05% on the sell side</td>
              <td>
                <ul className="mb-0">
                  <li>
                    0.15% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.15% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>Transaction charges</td>
              <td>
                NSE: 0.00307%
                <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00307%
                <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00183%
                <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03553% (on premium)
                <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>

            <tr>
              <td>GST</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>

            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>

            <tr>
              <td>Stamp charges</td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center text-muted mt-4 mb-5 fs-4">
        <a href="#" style={{ textDecoration: "none", fontSize: "1.1em" }}>
          Calculate your costs upfront{" "}
        </a>{" "}
        using our brokerage calculator
      </p>
    </div>
  );
};
