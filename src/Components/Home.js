import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="../home_bg.webp"
          className="card-img"
          alt="Background-Image"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="card-header home-card-text">
            <h5 className="card-title display-3 fw-bolder ps-5">
              NEW SEASON
            </h5>
            </div>
            <div className="card-footer home-card-text">
                <p className="card-text lead ps-5">
                SHOP YOUR FAVOURITE ITEMS OR ADD TO CART
                </p>
            </div>


        </div>
      </div>
      <Products />
    </div>
  );
}