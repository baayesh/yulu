import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/header__footer.css";
import toyota from "../../assets/home/header/toyota.png";
import mitsubishi from "../../assets/home/header/mitsubhishi.png";
import bmw from "../../assets/home/header/bmw.png";
import audi from "../../assets/home/header/audi.png";
import lexus from "../../assets/home/header/lexus.png";

// Icons
import { CiMenuFries } from "react-icons/ci";
import { TbRuler2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const cardata = [
    {
      brand: "Toyota",
      models: ["Rush", "Expander", "Hello there"],
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex debitis dolore, nisi nemo sapiente dolorum, vitae - toyota",
      imgLink: "",
    },
    {
      brand: "Toyota",
      models: ["Rush", "Land Cruiser", "Sequoia", "Alphard"],
      paragraph:
        "Toyota SUVs prioritize capability over luxury. Models like the Land Cruiser and 4Runner are renowned for their off-road prowess and durability, offering comfort but prioritizing functionality. However, some Toyota models, like the Sequoia and higher trims of the Highlander, elevate the experience with premium materials, advanced tech features, and comfortable seating, blurring the lines between capability and a touch of luxury. ",
      imgLink: toyota,
    },
    {
      brand: "Mitsubhishi",
      models: [
        "Expander",
        "Pajero",
        "Eclipse Cross",
        "Outlander PHEV",
        "Montero",
      ],
      paragraph:
        "Mitsubishi SUVs aren't just about conquering the terrain; they're about conquering it in style.  Experience the thrill of off-road prowess combined with surprisingly luxurious interiors featuring high-quality materials and thoughtful design.  Mitsubishi offers a compelling choice for discerning drivers who crave adventure without sacrificing comfort or sophistication.",
      imgLink: mitsubishi,
    },
    {
      brand: "BMW",
      models: ["BMW X7", "BMW X5", "BMW X3"],
      paragraph:
        "BMW SUVs are not merely vehicles; they are statements of power, precision, and unparalleled luxury.  Experience the thrill of a meticulously crafted driving machine, where every curve and response embodies legendary BMW performance.  Step inside a sanctuary of exquisite materials, cutting-edge technology, and spacious comfort designed to elevate every journey.  BMW SUVs redefine what it means to conquer the road in absolute luxury.",
      imgLink: bmw,
    },
    {
      brand: "Audi",
      models: ["Audi Q8", "E Tron", "Audi SQ5", "Audi Q7"],
      paragraph:
        "Audi SUVs transcend the ordinary, blending progressive technology with unparalleled refinement.  Command the road with confidence in a masterpiece of German engineering, where every detail exudes innovation and precision.  Immerse yourself in a haven of luxurious comfort, crafted with the finest materials and intuitive technology designed to elevate your senses.  Audi SUVs redefine luxury, offering a driving experience that is both exhilarating and effortlessly sophisticated.",
      imgLink: audi,
    },
    {
      brand: "Lexus",
      models: ["Lexus LX", "Lexus GX", "Lexus RX"],
      paragraph:
        "Lexus SUVs transcend the realm of transportation, transforming every drive into a meticulously crafted experience.  Anticipation builds as you approach your Lexus, its captivating design a promise of the unparalleled luxury within.  Slide into a serene sanctuary, enveloped by exquisite materials and intuitive technology designed to cater to your every whim.  Lexus SUVs redefine luxury, offering a symphony of power, refinement, and innovation that elevates every journey to an unforgettable arrival. ",
      imgLink: lexus,
    },
  ];

  const [activePopup, setActivePopup] = useState(0);
  const selectedCarData = cardata[activePopup];

  // Hamberger Menu
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section>
      <div className="column header">
        <div className="row  header__top__bar">
          <h3 className="main__heading"> Drive Luxury. Explore Dubai.</h3>
        </div>

        {/* Car popup */}
        <div className="header__middle__bar">
          <div className="row container middle__brands">
            <p onMouseOver={() => setActivePopup(1)}>TOYOTA</p>
            <p onMouseOver={() => setActivePopup(2)}>MITSUBHISHI</p>
            <p onMouseOver={() => setActivePopup(3)}>BMW</p>
            <p onMouseOver={() => setActivePopup(4)}>AUDI</p>
            <p onMouseOver={() => setActivePopup(5)}>LEXUS</p>
          </div>
          <div
            onMouseLeave={() => setActivePopup(0)}
            className={`${
              activePopup === 0
                ? "car__popup__container__none"
                : "car__popup_container"
            }`}
          >
            <div className="car__popup__list">
              <h2>{selectedCarData.brand}</h2>
              <ul>
                {selectedCarData.models.map((model) => (
                  <li>{model}</li>
                ))}
              </ul>
            </div>

            <div className="car__popup__details">
              <p>{selectedCarData.paragraph}</p>
            </div>
            <div className="car__popup__image">
              <img src={selectedCarData.imgLink} alt="" />
              <button onClick={()=>setActivePopup(0)}><IoClose/></button>
            </div>
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
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT&nbsp;US</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT&nbsp;US</Link>
              </li>
              {/* Add more link elements as needed */}
            </ul>
            <div className="hamberger__menu__icon">
              <button onClick={() => setShowMenu(true)}>
                <CiMenuFries />
              </button>
            </div>
          </div>
          <div
            className={`${
              showMenu === true ? "hamberger__menu" : "hamberger__menu__hide"
            }`}
          >
            <ul>
              <li>
                <Link
                  to="/"
                  style={{ color: "#707070", textDecoration: "none" }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: "#707070", textDecoration: "none" }}
                >
                  ABOUT&nbsp; US
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: "#707070", textDecoration: "none" }}
                >
                  CONTACT&nbsp;US
                </Link>
              </li>
              <button onClick={() => setShowMenu(false)}>
                <IoClose />
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
