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
          <img
            src={roadmapMark}
            className="roadmap-card-content-left-img"
            alt=""
          />
        </div>
        <div className="roadmap-card-content-right">
          <p className="fs-28px green lh-1 mb-5px">Year 2020</p>
          <p className="fs-18px green lh-1">Idea & research</p>
          <p className="fs-18px green lh-1">Game Development Consultations</p>
          <p className="fs-18px green lh-1">Blockchain Tech Consultations</p>
          <p className="fs-18px green lh-1">Business plan</p>
          <p className="fs-18px green lh-1">Team creation</p>
          <p className="fs-18px green lh-1">
            Characters and Gameplay concept development
          </p>
          <p className="fs-18px green lh-1">Private fund allocation</p>
          <p className="fs-18px green lh-1">Network selection Negotiation</p>
        </div>
      </div>
    </div>
  );
}

export default RoadmapCard;
