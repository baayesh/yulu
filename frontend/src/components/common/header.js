import React, { useState } from "react";
import "../../styles/header__footer.css";
// Make navigation align to right side

const Header = () => {
  const cardata = [
    {
      brand: "Toyota",
      models: ["Rush", "Exppander", "Hello there"],
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae - toyota",
      imgLink: "../../test",
    },
    {
      brand: "Toyota",
      models: ["Rush", "Exppander", "Hello there"],
      paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae - toyota ",
      imgLink: "../../test",
    },
    {
      brand: "Mitsubhishi",
      models: ["X1", "X2", "X3"],
      paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae - mitsubhishi",
      imgLink: "../../test",
    },
    {
      brand: "BMW",
      models: ["X1", "X2", "X3"],
      paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae  -BMW",
      imgLink: "../../test",
    },
    {
      brand: "Audi",
      models: ["X1", "X2", "X3"],
      paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae - Audi",
      imgLink: "../../test",
    },
    {
      brand: "Lexus",
      models: ["X1", "X2", "X3"],
      paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae - Lexus ",
      imgLink: "../../test",
    },
  ];

  const [activePopup, setActivePopup] = useState(0);
  const selectedCarData = cardata[activePopup];

  return (
    <section>
      <div className="column header">
        <div className="row  header__top__bar">
          <h3 className="main__heading">...Offers We are offering...</h3>
        </div>
        <div className="header__middle__bar">
          <div className="row container middle__brands">
            <p onMouseOver={() => setActivePopup(1)}>TOYOTA</p>
            <p onMouseOver={() => setActivePopup(2)}>MITSUBHISHI</p>
            <p onMouseOver={() => setActivePopup(3)}>BMW</p>
            <p onMouseOver={() => setActivePopup(4)}>AUDI</p>
            <p onMouseOver={() => setActivePopup(5)}>LEXUS</p>
          </div>
          <div onMouseLeave={()=>setActivePopup(0)} className={`${activePopup === 0 ?'car__popup__container__none':'car__popup_container'}`}>
            <div className="car__popup__list">
              <h2>{selectedCarData.brand}</h2>
              <ul>
                {selectedCarData.models.map((model) => (
                  <li>{model}</li>
                ))}
              </ul>
            </div>

            <div className="car__popup__details">
              <p>
                {selectedCarData.paragraph}
              </p>
            </div>
            <div className="car__popup__image">car popup image</div>
          </div>
        </div>

        {/* <img src={logo} alt="logo" className="logo" /> */}
        <nav className="navigation">
          <div className="nav-container">
            {/* Brand Logo */}
            <a href="/" className="nav-brand">
              YULU&nbsp;DUBAI
            </a>

            {/* Navigation Links */}
            <ul className="nav-links">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT&nbsp;US</a>
              </li>
              <li>
                <a href="#">CONTACT&nbsp;US</a>
              </li>
              {/* Add more link elements as needed */}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
