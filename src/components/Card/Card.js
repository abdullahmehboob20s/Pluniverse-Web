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
        <p className="fs-30px green lh-1 waghu-family mb-8px">
          OWNERSHIPS <br />
          <img src={textImg} alt="" />
        </p>
        <p className="fs-22px white weight-8">
          All game assets are securely stores on the blockchain giving players
          exclusive ownership
        </p>
      </div>
    </div>
  );
}

export default Card;
