import React from "react";
import "../../styles/home.css";
import heroImg from '../../assets/home/hero.png'

const Hero = () => {
  return (
    <section>
      <div className="hero__container column">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
