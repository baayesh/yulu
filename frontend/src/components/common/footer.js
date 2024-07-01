import React from "react";
import "../../styles/header__footer.css";
// Icons
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// Routings
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-column">
          <h3>QUICK LINKS</h3>

          <Link to="/" className="remove__und">
            <p>Home</p>
          </Link>

          <Link to="/about" className="remove__und">
            <p>About&nbsp;Us</p>
          </Link>
          <Link to="/contact"  className="remove__und">
            <p>Contact&nbsp;Us</p>
          </Link>
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
          <h3>CAR BRANDS</h3>
          <p>BMW</p>
          <p>ALFA ROMEO</p>
          <p>TOYOTA</p>
          <p>MITSUBHISHI</p>
          <p>AUDI</p>
          <p>LEXUS</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="row footer-social">
      {/* Facebook */}
            <a href="https://web.facebook.com/nourancollegeshj/" target="_blank">
              <div className="social-media-icon-container">
                <FaFacebookF className="social-media-icon" />
              </div>
            </a>
        
{/* Instagram */}
          <a href="https://www.instagram.com/yulu_dubai/" target="__blank">
            <div className="social-media-icon-container">
              <AiFillInstagram className="social-media-icon" />
            </div>
          </a>
          {/* Tiktok */}
          <a href="https://www.tiktok.com/@yulurentacar" target="__blank">
            <div className="social-media-icon-container">
              <FaTiktok className="social-media-icon" />
            </div>
          </a>
          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UCFiWhI6goEqqvkoHduE3tfw" target="__blank">
            <div className="social-media-icon-container">
              <FaYoutube className="social-media-icon" />
            </div>
          </a>
        </div>
      </div>

      <div className="footer__leagal">
        <a href="#">
          <p>Privacy Policy</p>
        </a>
        <a href="#">
          <p>Terms and Conditions</p>
        </a>
      </div>

      <div className="footer-lastline">
        <p>&reg;2024 by YULU DUBAI. All Rights Reserved.</p>
        <h2>
          Designed and Developed by{" "}
          <a href="" className="footer__lastline__link">
            ayeshb
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
