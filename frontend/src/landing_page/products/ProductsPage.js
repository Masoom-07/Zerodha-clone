import React from "react";

import { RightSection } from "./RightSection";
import { LeftSection } from "./LeftSection";
import { Universe } from "./Universe";
import { Hero } from "./Hero";

export const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "
        tryDemo=""
        learnMore=" "
        googlePlay=""
        appStore=""
      />
      <RightSection
        ProductTitle="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Link=""
        ImageURL="media\images\console.png"
      />

      <LeftSection
        imageURL="media\images\coin.png"
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=" "
        googlePlay=""
        appStore=""
      />

      <RightSection
        ProductTitle="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Link=""
        ImageURL="media\images\kiteconnect.png"
      />

      <LeftSection
        imageURL="media\images\varsity.png"
        ProductName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=" "
        googlePlay=""
        appStore=""
      />

      <Universe />
    </>
  );
};
