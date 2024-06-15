import React from "react";
import "../../styles/home.css";
import heroImg from "../../assets/home/hero.png";

const Hero = () => {
  return (
    <section>
      {/* <div className="hero__container column">
        <img src={heroImg} alt="" />
        <div className="hero__car__search container column">
          <h1 className="main__heading__2">RENT WITH US</h1>
          <div className="car__search row">
            <div className="column search__city">
              <label className="tag__1 " for="city">
                City
              </label>
              <input type="text" id="city" className="pk" />
            </div>
            <div className="pickup__date column">
              <label className="tag__1 " for="city">
                Pickup Date
              </label>
              <input type="date" id="city" />
            </div>
            <div className="drop__date column">
              <label className="tag__1 " for="city">
                Drop Date
              </label>
              <input type="date" id="city" />
            </div>
          </div>
          <button type="submit" className="search__suv__submit paragraph">
            Rent Your SUV
          </button>
        </div>
      </div> */}
      <div className="h__n__mc">
        <img src={heroImg} alt="" />
        <h2>RENT WITH US</h2>
        <div className="h__booking__form">
          <div className="row h__inputs">
            <div className="column h__city">
              <label className="" for="city">
                City
              </label>
              <input type="text" id="city" className="pk" />
            </div>
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
        <div className="h__submit__button ">
            {" "}
            <button type="submit">Rent Your SUV</button>
          </div>
      </div>
    </section>
  );
};

export default Hero;
