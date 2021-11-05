import React from "react";
import "./RoadmapCard.css";
import roadMapTextImg from "assets/images/roadmap-text-img.png";
import roadmapMark from "assets/images/roadmap-mark.png";

function RoadmapCard(props) {
  return (
    <div className="roadmap-card">
      <img className="roadmap-card-title-img" src={roadMapTextImg} alt="" />

      <div
        className={`roadmap-card-content-wrapper ${
          props.to === "left" ? "left" : "right"
        }`}
      >
        <div className="roadmap-card-content-left">
          <img src={roadmapMark} alt="" />
        </div>
        <div className="roadmap-card-content-right">
          <p className="roadmap-card-content-right-title">Year 2020</p>
          <p className="roadmap-card-content-right-points">Idea & research</p>
          <p className="roadmap-card-content-right-points">
            Game Development Consultations
          </p>
          <p className="roadmap-card-content-right-points">
            Blockchain Tech Consultations
          </p>
          <p className="roadmap-card-content-right-points">Business plan</p>
          <p className="roadmap-card-content-right-points">Team creation</p>
          <p className="roadmap-card-content-right-points">
            Characters and Gameplay concept development
          </p>
          <p className="roadmap-card-content-right-points">
            Private fund allocation
          </p>
          <p className="roadmap-card-content-right-points">
            Network selection Negotiation
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
