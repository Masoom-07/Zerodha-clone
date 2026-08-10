import React from "react";

export const LeftSection = ({
  imageURL,
  ProductName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8 ">
          <img src={imageURL}></img>
        </div>
        <div className="col-4 p-3 ">
          <h1 className="mb-4 fs-3 text-muted">{ProductName}</h1>
          <p className="text-muted" style={{ fontSize: "1.2em" }}>
            {ProductDescription}
          </p>
          <div className="mt-3 p-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "100px", textDecoration: "none" }}
            >
              {" "}
              Learn More →
            </a>
          </div>
          <div className=" p-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore} style={{ marginLeft: "32px" }}>
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
