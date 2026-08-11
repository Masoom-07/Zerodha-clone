import React from "react";

const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#666",
    fontSize: "18px",
    lineHeight: "2.3",
  };

  const headingStyle = {
    fontSize: "22px",
    fontWeight: "600",
    color: "#424242",
    marginBottom: "20px",
  };

  return (
    <footer>
      <hr style={{ marginTop: "80px" }}></hr>
      <div className="container mt-5 ">
        <div className="row mt-5 mb-5">
          {/* Logo */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha logo"
              style={{ width: "70%" }}
            />
            <p className="mt-3">
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p style={headingStyle}>Account</p>

            <a href="https://zerodha.com/open-account" style={linkStyle}>Open demat account</a><br />
            <a href="https://zerodha.com/open-account/minor" style={linkStyle}>Minor demat account</a><br />
            <a href="https://zerodha.com/open-account/nri" style={linkStyle}>NRI demat account</a><br />
            <a href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account" style={linkStyle}>HUF demat account</a><br />
            <a href="https://zerodha.com/commodity" style={linkStyle}>Commodity</a><br />
            <a href="https://support.zerodha.com/category/account-opening/dematerialisation" style={linkStyle}>Dematerialisation</a><br />
            <a href="https://support.zerodha.com/category/funds/adding-funds" style={linkStyle}>Fund transfer</a><br />
            <a href="https://support.zerodha.com/category/trading-and-markets/margins-leverage-and-product-and-order-types" style={linkStyle}>MTF</a>
          </div>

          <div className="col">
            <p style={headingStyle}>Support</p>

            <a href="https://zerodha.com/contact" style={linkStyle}>Contact us</a><br />
            <a href="https://support.zerodha.com" style={linkStyle}>Support portal</a><br />
            <a href="https://support.zerodha.com/category/console/complaints" style={linkStyle}>How to file a complaint?</a><br />
            <a href="https://support.zerodha.com/category/console/complaints" style={linkStyle}>Status of your complaints</a><br />
            <a href="https://zerodha.com/z-connect" style={linkStyle}>Bulletin</a><br />
            <a href="https://zerodha.com/circulars" style={linkStyle}>Circular</a><br />
            <a href="https://zerodha.com/z-connect" style={linkStyle}>Z-Connect blog</a><br />
            <a href="https://zerodha.com/resources" style={linkStyle}>Downloads</a>
          </div>

          <div className="col">
            <p style={headingStyle}>Company</p>

            <a href="https://zerodha.com/about" style={linkStyle}>About</a><br />
            <a href="https://zerodha.com/about" style={linkStyle}>Philosophy</a><br />
            <a href="https://zerodha.com/media" style={linkStyle}>Press & media</a><br />
            <a href="https://careers.zerodha.com" style={linkStyle}>Careers</a><br />
            <a href="https://zerodha.com/z-connect/general/zerodha-cares" style={linkStyle}>Zerodha Cares (CSR)</a><br />
            <a href="https://zerodha.tech" style={linkStyle}>Zerodha.tech</a><br />
            <a href="https://github.com/zerodha" style={linkStyle}>Open source</a><br />
            <a href="https://zerodha.com/refer" style={linkStyle}>Referral program</a>
          </div>

          <div className="col">
            <p style={headingStyle}>Quick links</p>

            <a href="https://zerodha.com/ipo" style={linkStyle}>Upcoming IPOs</a><br />
            <a href="https://zerodha.com/charges" style={linkStyle}>Brokerage charges</a><br />
            <a href="https://zerodha.com/market-holidays" style={linkStyle}>Market holidays</a><br />
            <a href="https://zerodha.com/marketintel/economic-calendar" style={linkStyle}>Economic calendar</a><br />
            <a href="https://zerodha.com/calculators" style={linkStyle}>Calculators</a><br />
            <a href="https://zerodha.com/markets" style={linkStyle}>Markets</a><br />
            <a href="https://zerodha.com/markets/sectors" style={linkStyle}>Sectors</a><br />
            <a href="https://zerodha.com/markets/gift-nifty" style={linkStyle}>Gift Nifty</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;