import React from "react";
import "./banner.styles.css";

const Banner = () => {
  return (
    <div className="container">
      <img
        className="banner-image"
        src="https://rewards.starbucks.in/sites/default/files/2021-05/1922x914_without-text.png"
        alt="banner"
      />
      <div className="top-left">
        <h3>
          A loyalty program
          <br />
          that’s all about you.
        </h3>
      </div>
    </div>
  );
};

export default Banner;
