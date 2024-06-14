import React from "react";
import "../../styles/header__footer.css";
// Make navigation align to right side

const Header = () => {
  return (
    <section>
      <div className="column header">
        <div className="row  header__top__bar">
          <h3 className="main__heading">...Offers We are offering...</h3>
        </div>
        <div className="row  header__middle__bar">
          <div className="row container middle__brands">
            <p>BMW</p>
            <p>ALFA ROMEO</p>
            <p>CADDILAC</p>
            <p>GENSIS</p>
            <p>TESLA</p>
            <p>AUDI</p>
            <p>LEXUS</p>
          </div>
        </div>
        <div className="container nav__container">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <nav className="row nav">
            <div className="row nav__list">
              <a href="/" className="nav__link ">
                HOME
              </a>
              <a href="/about" className="nav__link ">
                ABOUT&nbsp;US
              </a>
              <a href="/contact" className="nav__link ">
                CONTACT&nbsp;US
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
