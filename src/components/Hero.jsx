import React from "react";
import hero__banner from "../assets/hero_banner (1).jpg";
import hero__title from "../assets/hero_title (1).png";
import play__icon from "../assets/play_icon (1).png";
import info__icon from "../assets/info_icon (1).png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero__banner} alt="" className="banner-img" />
      <div className="hero-caption">
        <img src={hero__title} alt="" className="caption-img" />
        <p>
          Discovering his ties to a secret ancient order, a young man living in
          modern Instanbul embarks on a question to save the city from an
          immortal enemy.
        </p>
        <div className="hero-btns">
          <button className="btn">
            <img src={play__icon} alt="" />
            Play
          </button>
          <button className="btn dark-btn">
            <img src={info__icon} alt="" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
