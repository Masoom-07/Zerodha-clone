import React from "react";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className=" row p-5" >
        <div className="col-6 mt-5">
          <h2 className="mb-5 fs-2">Trust with confidence</h2>
          <h3 className="fs-4" mt-5>Customer-first always</h3>
          <p className="test-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className="fs-4 mt-5">No spam or gimmicks</h3>
          <p className="test-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h3 className="fs-4 mt-5" >The Zerodha universe</h3>
          <p className="test-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className=" fs-4 mt-5">Do better with money</h3>
          <p className="test-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="mt-5"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="https://zerodha.com/products" className="mx-5 " style={{textDecoration:"none"}}>
              Explore our Products  
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="https://kite-demo.zerodha.com/dashboard" className="mx-5 " style={{textDecoration:"none"}} >
              Try kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
