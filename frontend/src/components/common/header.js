import React from "react";
import "../../styles/header__footer.css";
// Make navigation align to right side

const Header = () => {
  return (
    <section>
      <div className="column header_linear__gradient">
        <div className="row  header__top__bar">
          <h3 className="main__heading__2">Yulu Dubai</h3>
        </div>
        <div className="row container nav__container">
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
