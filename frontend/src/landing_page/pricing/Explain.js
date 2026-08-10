import React from "react";

const Explain = () => {
  return (
    <div className="container mt-5">
      <h2
        className="text-muted"
        style={{
          marginBottom: "50px",
        }}
      >
        Charges explained
      </h2>

      <div className="row">
        <div className="col-6">
          <h6 className="text-muted">Securities/Commodities transaction tax</h6>

          <p className="text-muted">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on the selling side when trading intraday or on F&O.
          </p>

          <p className="text-muted">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>

          <h6 className="text-muted">Transaction/Turnover Charges</h6>

          <p className="text-muted">
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>

          <p className="text-muted">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>

          <p className="text-muted">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>

          <p className="text-muted">
            BSE has revised transaction charges for group A, B and other
            non-exclusive scrips (groups E, F, FC, G, GC, W, T) at ₹375 per
            crore of turnover.
          </p>

          <p className="text-muted">
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h6 className="text-muted">Call & Trade</h6>

          <p className="text-muted">
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha.
          </p>

          <h6 className="text-muted">Stamp charges</h6>

          <p className="text-muted">
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h6 className="text-muted">NRI brokerage charges</h6>

          <ul className="text-muted">
            <li>
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is lower).
            </li>

            <li>
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>₹500 + GST as yearly AMC charges.</li>
          </ul>

          <h6 className="text-muted">Account with debit balance</h6>

          <p className="text-muted">
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
        </div>

        <div className="col-lg-6">
          <h6 className="text-muted ">GST</h6>

          <p className="text-muted">
            Tax levied by the government on the services rendered. 18% of
            brokerage + SEBI charges + transaction charges.
          </p>

          <h6 className="text-muted">SEBI Charges</h6>

          <p className="text-muted">
            Charged at ₹10 per crore + GST by SEBI for regulating the markets.
          </p>

          <h6 className="text-muted">DP (Depository participant) charges</h6>

          <p className="text-muted">
            ₹15.34 per scrip is charged on the trading account ledger when
            stocks are sold, irrespective of quantity.
          </p>

          <h6 className="text-muted">Pledging charges</h6>

          <p className="text-muted">₹30 + GST per pledge request per ISIN.</p>

          <h6 className="text-muted">AMC (Account maintenance charges)</h6>

          <p className="text-muted">
            Free for the first year on all new resident individual accounts.
          </p>

          <p className="text-muted">
            For non-BSDA demat accounts: ₹300/year + GST charged quarterly.
          </p>

          <h6 className="text-muted">Corporate action order charges</h6>

          <p className="text-muted">
            ₹20 + GST charged for OFS, buyback, takeover and delisting orders.
          </p>

          <h6 className="text-muted">Off-market transfer charges</h6>

          <p className="text-muted">₹25 per transaction.</p>

          <h6 className="text-muted">Physical CMR request</h6>

          <p className="text-muted">
            First CMR request is free. ₹20 + ₹100 courier charge + GST for
            subsequent requests.
          </p>

          <h6 className="text-muted">Payment gateway charges</h6>

          <p className="text-muted">
            ₹9 + GST (not levied on transfers done via UPI).
          </p>

          <h6 className="text-muted">Delayed Payment Charges</h6>

          <p className="text-muted">
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance.
          </p>

          <h6 className="text-muted">
            Trading using 3-in-1 account with block functionality
          </h6>

          <ul className="text-muted">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>

      <div className=" row mt-5">
        <h6 className="text-muted">Disclaimer</h6>
        <p className="text-muted">
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
};

export default Explain;
