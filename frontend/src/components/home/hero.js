import React from "react";
import "../../styles/home.css";
import heroImg from "../../assets/home/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="h__n__mc">
        <img src={heroImg} alt="" />

        <div className="rent__from__us">
          <h2>Rent From Yulu</h2>
          <h4>and turn heads  </h4>
          <button>Book Now</button>
        </div>




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
