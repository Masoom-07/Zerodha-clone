import React from "react";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container">
        <div className="p-5" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="https://support.zerodha.com">Track Tickets</a>
        </div>

        <div className="row p-3 ">
          <div className="col-6 p-5">
            <h2 className="fs-3">
              Search for a answer or browse help topics to create a ticket
            </h2>
            <input
              placeholder="Eg. how do I activate F&O"
              style={{ padding: "10px 50px", borderRadius: "15px", width: "100%", fontSize: "20px" }}
            />
            <br />
            <a href="https://support.zerodha.com/category/account-opening">Track account openning</a>{" "}
            <a href="https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition">Track segment activation</a>{" "}
            <a href="https://support.zerodha.com/category/trading-and-markets/margins-leverage-and-product-and-order-types">Intraday margins</a> <a href="https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile">Kite User manual</a>{" "}
          </div>
          <div className="col-6 p-5">
            <h2>Featured</h2>
            <ol>
              <li>
                <a href="https://support.zerodha.com/category/trading-and-markets/corporate-actions">Current takeover and delisting -january 2024</a>
              </li>
              <li>
                {" "}
                <a href="https://support.zerodha.com/category/trading-and-markets/margins-leverage-and-product-and-order-types">Latest Intraday Levarage -MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;