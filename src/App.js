import "./App.css";
import Navbar from "layouts/Navbar/Navbar";
import HeroPluniverse from "./components/HeroPluniverse";
import textImg from "assets/images/text-img.png";
import adventureImg from "assets/images/adventure-img.png";
import gameModeBox from "assets/images/game-modes-box.png";
import arrowLeft from "assets/images/left-arrow.png";
import arrowRight from "assets/images/right-arrow.png";
import expeditionImg from "assets/images/Expedition.jpg";
import Card from "components/Card/Card";
import roadmapBtn from "assets/images/roadmap-button.png";
import RoadmapCard from "components/RoadmapCard/RoadmapCard";
import BackedByCard from "components/BackedByCard/BackedByCard";

import backedByImg1 from "assets/images/backed-by-img-1.png";
import backedByImg2 from "assets/images/backed-by-img-2.png";
import backedByImg3 from "assets/images/backed-by-img-3.png";
import backedByImg4 from "assets/images/backed-by-img-4.png";
import backedByImg5 from "assets/images/backed-by-img-5.png";

import footerImg from "assets/images/footer-img.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <HeroPluniverse />
      </div>

      <div className="adventure-wrapper">
        <div className="container-wrapper">
          <div className="adventure">
            <div className="adventure-left">
              <div className="adventure-titles">
                <p className="waghu-family adventure-title">
                  The most awaited play to <br />
                  <span className="title-green-bold">EARN ADVENTURE</span>
                </p>
                <img src={textImg} alt="" />
                <div className="paragraphs">
                  <p className="paragraph">
                    Pluniverse is a multiplayer NFT game wherein the main
                    characters are called Plu’s which are elemental species from
                    an alternate universe. Embark on a grand expedition to gain
                    items that you can sell into the marketplace for Real Money
                  </p>
                  <p className="paragraph">
                    Lastly, form a guild with other players to extend your
                    influence and keep building your empire during this era of
                    peace in preparation for the fated “Great War”
                  </p>
                </div>
              </div>
            </div>
            <div className="adventure-right">
              <img src={adventureImg} alt="" />
            </div>
          </div>

          {/*  */}
          <div className="game-modes">
            <div className="game-modes-left">
              <img src={expeditionImg} alt="" />
            </div>
            <div className="game-modes-right">
              <div className="game-modes-right-img-wrapper">
                <div>
                  <img
                    src={gameModeBox}
                    className="game-modes-right-img"
                    alt=""
                  />
                  <img src={textImg} alt="" />
                </div>
              </div>

              <div className="game-modes-text-title">
                <img src={arrowLeft} alt="" />
                <p className="waghu-family">GUILD QUESTS</p>
                <img src={arrowRight} alt="" />
              </div>

              <p className="game-modes-text-subtitle">
                Join hands with other players and for a Guild in order to go
                overcome and defeat the ancient Gods and seige their territories
                for grand rewards and various treasures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="special-features-wrapper">
        <div className="container-wrapper">
          <div>
            <p className="special-feature-title waghu-family">
              SPECIAL FEATURES
            </p>
            <img src={textImg} alt="" />
          </div>

          <div className="special-features-cards">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div className="roadmap-wrapper">
        <div className="container-wrapper">
          <div className="roadmap">
            <a href="#" className="roadmap-btn">
              <img src={roadmapBtn} alt="" />
            </a>

            <div className="roadmap-cards">
              <div className="roadmap-cards-middle-line">
                <RoadmapCard />
                <RoadmapCard to="left" />
                <RoadmapCard />
                <RoadmapCard to="left" />
                <RoadmapCard />
                <RoadmapCard to="left" />
              </div>
            </div>
            {/*  */}
            <div className="backed-by-wrapper">
              <p className="backed-by-title waghu-family">BACKED BY</p>

              <div className="backed-by-cards">
                <BackedByCard img={backedByImg1} />
                <BackedByCard img={backedByImg2} />
                <BackedByCard img={backedByImg3} />
                <BackedByCard img={backedByImg4} />
                <BackedByCard img={backedByImg5} />
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="footer-wrapper">
        <div className="container-wrapper">
          <div className="footer">
            <div className="footer-row-1">
              <div className="footer-row-1-left">
                <img className="footer-brand" src={footerImg} alt="" />
              </div>
              <div className="footer-row-1-right"></div>
            </div>
            <div className="footer-row-2">
              <div className="footer-row-2-left"></div>
              <div className="footer-row-2-right"></div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default App;
