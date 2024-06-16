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
