import "./App.css";
import React from "react";
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

import facebook from "assets/images/facebook.png";
import discord from "assets/images/discord.png";
import twitter from "assets/images/twitter.png";
import instagram from "assets/images/instagram.png";
import SocialLink from "components/SocialLink/SocialLink";

import breedingImg from "assets/images/breeding.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function App() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
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
                <p className="waghu-family  fs-40px white lh-1">
                  The most awaited play to <br />
                  <span className="fs-70px green ">EARN ADVENTURE</span>
                </p>
                <img src={textImg} alt="" />
                <div className="paragraphs">
                  <p>
                    Pluniverse is a multiplayer NFT game wherein the main
                    characters are called Plu’s which are elemental species from
                    an alternate universe. Embark on a grand expedition to gain
                    items that you can sell into the marketplace for Real Money
                  </p>
                  <p>
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
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                <SwiperSlide>
                  <img src={expeditionImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={breedingImg} alt="" />
                </SwiperSlide>
              </Swiper>
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
                <img src={arrowLeft} ref={navigationPrevRef} alt="" />
                <p className="waghu-family fs-40px green text-center lh-1">
                  GUILD QUESTS
                </p>
                <img src={arrowRight} ref={navigationNextRef} alt="" />
              </div>

              <p className="game-modes-text-subtitle fs-20px white weight-8 lh-1 text-center">
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
            <p className="green lh-1 waghu-family fs-75px">SPECIAL FEATURES</p>
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
            <div className="backed-by-wrapper">
              <p className="fs-57px text-center green lh-1 waghu-family">
                BACKED BY
              </p>

              <div className="backed-by-cards">
                <BackedByCard img={backedByImg1} />
                <BackedByCard img={backedByImg2} />
                <BackedByCard img={backedByImg3} />
                <BackedByCard img={backedByImg4} />
                <BackedByCard img={backedByImg5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="container-wrapper">
          <div className="footer">
            <div className="footer-top">
              <img className="footer-brand" src={footerImg} alt="" />

              <div className="footer-input-wrapper">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="footer-input"
                />
                <button className="footer-input-btn">SUBSCRIBE</button>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="stay-connected-wrapper">
                <p className="fs-22px white weight-8 lh-1">Stay Connected!</p>

                <div className="social-links">
                  <SocialLink img={facebook} />
                  <SocialLink img={discord} />
                  <SocialLink img={twitter} />
                  <SocialLink img={instagram} />
                </div>
              </div>

              <div className="footer-links">
                <p className="fs-25px green weight-8 pointer lh-1">Home</p>
                <p className="fs-25px green weight-8 pointer lh-1">
                  Whitepaper
                </p>
                <p className="fs-25px green weight-8 pointer lh-1">
                  Tokenomics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
