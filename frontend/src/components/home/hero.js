import React from "react";
import "../../styles/home.css";

// Images
import herolarge from "../../assets/home/hero-large.webp";
import heromedium from "../../assets/home/hero-medium.webp";
import heromedium2 from "../../assets/home/hero-medium-2.webp";
import herosmall from "../../assets/home/hero-small.webp";
import { useState } from "react";
import BookingForm from "./bookingForm";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="h__n__mc">
        <div className="hero__large__img">
          <img
            loading="lazy"
            role="presentation"
            decoding="async"
            src={herolarge}
            alt=""
          />
        </div>
        <div className="hero__med__img">
          <img
            loading="lazy"
            role="presentation"
            decoding="async"
            src={heromedium}
            alt=""
          />
        </div>
        <div className="hero__med__2__img">
          <img
            loading="lazy"
            role="presentation"
            decoding="async"
            src={heromedium2}
            alt=""
          />
        </div>
        <div className="hero__small__img">
          <img
            loading="lazy"
            role="presentation"
            decoding="async"
            src={herosmall}
            alt=""
          />
        </div>

        <div className="rent__from__us">
          <h2>Rent From Yulu</h2>
          <h4>and turn heads </h4>
          <div className="rent__from__us__buttons">
            <button
              className="rent__from__us__btn1"
              onClick={() => setIsOpen(true)}
            >
              Book Now
            </button>
            <button
              className="rent__from__us__btn2"
              onClick={() => setIsOpen(true)}
            >
              Book Now
            </button>
          </div>
        </div>

        <BookingForm open={isOpen} close={() => setIsOpen(false)} />

        {/* <h2>RENT WITH US</h2>
        <div className="h__booking__form">
          <div className="h__inputs">
            <div className="column h__city">
              <label className="" for="city">
                City
              </label>
              <input type="text" id="city" className="pk" />
            </div>
            <div className="h__date__inputs">
              <div className="column h__pickup">
                <label className="" for="city">
                  Pickup Date
                </label>
                <input type="date" id="city" />
              </div>
              <div className="column h__drop">
                <label className="" for="city">
                  Drop Date
                </label>
                <input type="date" id="city" />
              </div>
            </div>
          </div>
        </div>

        <div className="h__submit__button ">
          {" "}
          <button type="submit">Rent Your SUV</button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
