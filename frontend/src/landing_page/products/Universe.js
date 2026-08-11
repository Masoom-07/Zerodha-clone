import React from "react";
import { useNavigate} from 'react-router-dom'
export const Universe = () => {
  const navigate=useNavigate();
  return (
    <div className="container">
      <div
        className="row   text-muted text-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <h4>
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech/" style={{ textDecoration: "none" }}>
            Zerodha.tech{" "}
          </a>
          blog.
        </h4>
      </div>
      <div className="row text-muted text-center mb-5">
        <h2 className="mb-4">The Zerodha Universe</h2>
        <p style={{ fontSize: "1.2em" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center mt-5">
        <div className="col-md-4 mb-5 p-5">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="smallcase"
            style={{ width: "220px", marginBottom: "20px" }}
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 mb-5 p-5">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "220px", marginBottom: "20px" }}
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 mb-5 p-5">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "220px", marginBottom: "20px" }}
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5 p-5">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "220px", marginBottom: "20px" }}
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="col-md-4 mb-5 p-5">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "220px", marginBottom: "20px" }}
          />
          <p className="text-muted">
            Invest in high-quality fixed-income bonds with ease.
          </p>
        </div>

        <div className="col-md-4 mb-5 p-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Coin"
            style={{ width: "220px", marginBottom: "20px" }}
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
      </div>

      <div className="text-center " style={{ marginBottom: "80px" }}>
        <button
          className="btn btn-primary"
          style={{
            padding: "12px 35px",
            fontSize: "18px",
          }}
          onClick={()=>navigate('/signup')}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};
