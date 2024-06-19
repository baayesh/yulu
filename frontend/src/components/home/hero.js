import React from "react";
import "../../styles/home.css";
import heroImg from "../../assets/home/hero.png";
import herolarge from '../../assets/home/hero-large.png';
import heromedium from '../../assets/home/hero-medium.png';
import heromedium2 from '../../assets/home/hero-medium-2.png';
import herosmall from '../../assets/home/hero-small.png';
import { useState } from "react";
import BookingForm from "./bookingForm";


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <div className="h__n__mc">
        <div className="hero__large__img"><img src={herolarge} alt="" /></div>
        <div className="hero__med__img"><img src={heromedium} alt='' /></div>
        <div className="hero__med__2__img"><img src={heromedium2} alt='' /></div>
        <div className="hero__small__img"><img src={herosmall} alt='' /></div>

        <div className="rent__from__us">
          <h2>Rent From Yulu</h2>
          <h4>and turn heads </h4>
          <button onClick={() => setIsOpen(true)}>Book Now</button>
        </div>

        <BookingForm open={isOpen} close={()=>setIsOpen(false)} />

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
