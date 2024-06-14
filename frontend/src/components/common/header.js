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
            <p>Alfa Romeo</p>
            <p>Cadillac</p>
            <p>Gensis</p>
            <p>Tesla</p>
            <p>Audi</p>
            <p>Lexus</p>
          </div>
        </div>
        <div className="container nav__container">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <nav className="nav">
            <div className="nav__list">
              <a href="/" className="nav__link tag__1">
                Home
              </a>
              <a href="/about" className="nav__link tag__1">
                About&nbsp;Us
              </a>
              <a href="/contact" className="nav__link tag__1">
                Contact&nbsp;Us
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
