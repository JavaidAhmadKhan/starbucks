import React from "react";
import "./card-styles.css";

const Card = () => {
  return (
    <div className="card">
      <h2>The First Sip Feeling</h2>
      <div className="card-container">
        <divc className="image-container">
          <img
            src="https://rewards.starbucks.in//themes/starbucks/images/Enjoy_your_first_tall_beverage_at_INR_150.png"
            alt=""
          />
          <img
            src="https://rewards.starbucks.in//themes/starbucks/images/Free_Beverage_in_your_Birthday_month.png"
            alt=""
          />
          <img
            src="https://rewards.starbucks.in//themes/starbucks/images/Free_Beverage_on_every_10_Stars_collected_in_Gold_tier.png"
            alt=""
          />
          <img
            src="https://rewards.starbucks.in//themes/starbucks/images/Free_Size_upgrade_or_Customisations.png"
            alt=""
          />
        </divc>
      </div>
    </div>
  );
};

export default Card;
