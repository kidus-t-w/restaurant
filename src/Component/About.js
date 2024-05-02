import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "./Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et
          elit.dolor turpis molestindui magnis facilisis at fringilla quam
        </p>
        <p className="primary-text">
          Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et
          elit.dolor turpis molestindui magnis facilisis at fringilla quamNon
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button">Learn more</button>
            <button className="watch-video-button">
                <BsFillPlayCircleFill/>Watch Video
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;