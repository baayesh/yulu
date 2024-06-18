import React from "react";
import "../../styles/header__footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <p>Home</p>
          <p>About&nbsp;Us</p>

          <p>Contact&nbsp;Us</p>
          {/* <img src={logo__footer} className="logo-footer" /> */}
        </div>
        <div className="footer-column">
          <h3>SERVICES</h3>
          <p>Impulse</p>
          <p>Expedition</p>
          <p>Echelon</p>
          <p>Armada</p>
        </div>
        <div className="footer-column">
          <h3>CARS</h3>
          <p>Toyota&nbsp;Rush</p>
          <p>Mitsubhishi&nbsp;Expander</p>
          <p>Car&nbsp;1</p>
          <p>Car&nbsp;2</p>
          <p>Car&nbsp;3</p>
        </div>
        <div className="footer-column">
         
          <div className="row footer-social">
            <div className="social-media-icon-container">
              <FaFacebookF className="social-media-icon" />
            </div>
  
            
          <div className="social-media-icon-container">
            <AiFillInstagram  className="social-media-icon"/>
          </div>
          <div className="social-media-icon-container">
            <FaTiktok  className="social-media-icon"/>
          </div>
          <div className="social-media-icon-container">
            <FaYoutube  className="social-media-icon"/>
          </div> 
          </div>
        </div>
      </div>

      <div className="footer-lastline">
        <p>&reg;2024 by YULU DUBAI. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
