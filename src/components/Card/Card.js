import React from "react";
import "./Card.css";
import cardImg from "assets/images/card-img.png";
import textImg from "assets/images/text-img.png";

function Card() {
  return (
    <div className="special-features-card">
      <div className="special-features-card-left">
        <img src={cardImg} alt="" />
      </div>
      <div className="special-features-card-right">
        <p className="special-features-card-right-title waghu-family">
          OWNERSHIPS <br />
          <img src={textImg} alt="" />
        </p>
        <p className="special-features-card-right-subtitle">
          All game assets are securely stores on the blockchain giving players
          exclusive ownership
        </p>
      </div>
    </div>
  );
}

export default Card;
