import "./App.css";
import Navbar from "layouts/Navbar/Navbar";
import HeroPluniverse from "./components/HeroPluniverse";
import textImg from "assets/images/text-img.png";
import adventureImg from "assets/images/adventure-img.png";
import gameModeBox from "assets/images/game-modes-box.png";
import arrowLeft from "assets/images/left-arrow.png";
import arrowRight from "assets/images/right-arrow.png";
import expeditionImg from "assets/images/Expedition.jpg";

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

      {/*  */}
    </div>
  );
}

export default App;
