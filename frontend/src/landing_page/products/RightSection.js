import React from "react";

export const RightSection = ({
  ProductTitle,
  ProductDescription,
  Link,
  ImageURL,
}) => {
  return (
    <div className="containe mt-5 mb-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-3 p-3 " style={{marginTop:"100px"}}>
          <h1 className="mb-5 mt-r fs-3 text-muted  text-center" >{ProductTitle}</h1>

          <p className="text-muted  text-center" style={{ fontSize: "1.2em" }}>
            {ProductDescription}
          </p>
          <div className="mt-3 p-3">
            <a href={Link} style={{ textDecoration: "none" }}>
              Learn More →
            </a>
          </div>
        </div>

        <div className="col-2"></div>

        <div className="col-5">
          <img src={ImageURL} alt={ProductTitle} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};
