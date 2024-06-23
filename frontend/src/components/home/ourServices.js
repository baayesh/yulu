import React from "react";
import S1Img from "../../assets/home/Our Services/S1.png";
import S2Img from "../../assets/home/Our Services/S2.png";
import S3Img from "../../assets/home/Our Services/S3.png";
import S4Img from "../../assets/home/Our Services/S4.png";
import { CiCalendar } from "react-icons/ci";
import { PiSpeedometerThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiBookOpenUserThin } from "react-icons/pi";
import { PiGearThin } from "react-icons/pi";

const OurServices = () => {
  return (
    <section>
      <div className=" container our__services__container">
        <h2 className="">Our Services</h2>
        <h4 className="">Our Best Services for You</h4>
        <div className="our__services__cards">
          {/* Impulse */}
          <div className="column our__services__card">
            <img src={S4Img} alt="" />
            <h3 className="">IMPULSE</h3>
            <div className="row our__services__card__service">
              <CiCalendar />
              <p>Rent for Day</p>
            </div>
            <div className="row our__services__card__service">
              <PiSpeedometerThin />
              <p>Unlimited Milage</p>
            </div>
            <div className="row our__services__card__service">
              <CiUser />
              <p>Dedicated Account Manager</p>
            </div>
            <div className="row our__services__card__service">
              <PiBookOpenUserThin />
              <p>Complementary Detailing </p>
            </div>

            <button>Rent Now</button>
          </div>

          {/* Expedition */}
          <div className="column our__services__card">
            <img src={S3Img} alt="" />
            <h3 className="">EXPEDITION</h3>
            <div className="row our__services__card__service">
              <CiCalendar />
              <p>Rent for Week</p>
            </div>
            <div className="row our__services__card__service">
              <PiSpeedometerThin />
              <p>Unlimited Milage</p>
            </div>
            <div className="row our__services__card__service">
              <CiUser />
              <p>Dedicated Account Manager</p>
            </div>
            <div className="row our__services__card__service">
              <PiBookOpenUserThin />
              <p>Complementary Detailing </p>
            </div>

            <button>Rent Now</button>
          </div>
          {/* Echlon */}
          <div className="column our__services__card">
            <img src={S2Img} alt="" />
            <h3 className="">ECHELON</h3>
            <div className="row our__services__card__service">
              <CiCalendar />
              <p>Rent for Month</p>
            </div>
            <div className="row our__services__card__service">
              <PiSpeedometerThin />
              <p>Unlimited Milage</p>
            </div>
            <div className="row our__services__card__service">
              <CiUser />
              <p>Dedicated Account Manager</p>
            </div>
            <div className="row our__services__card__service">
              <PiBookOpenUserThin />
              <p>Complementary Detailing </p>
            </div>
            <div className="row our__services__card__service">
              <PiGearThin />
              <p>Free Maintanance</p>
            </div>

            <button>Rent Now</button>
          </div>
          {/* Armada */}
          <div className="column our__services__card">
            <img src={S1Img} alt="" />
            <h3 className="">ARMADA</h3>
            <div className="row our__services__card__service">
              <CiCalendar />
              <p>Rent for Year</p>
            </div>
            <div className="row our__services__card__service">
              <PiSpeedometerThin />
              <p>Unlimited Milage</p>
            </div>
            <div className="row our__services__card__service">
              <CiUser />
              <p>Dedicated Account Manager</p>
            </div>
            <div className="row our__services__card__service">
              <PiBookOpenUserThin />
              <p>Complementary Detailing </p>
            </div>
            <div className="row our__services__card__service">
              <PiGearThin />
              <p>Free Maintanance</p>
            </div>

            <button>Rent Now</button>
          </div>

  


        </div>
      </div>
    </section>
  );
};

export default OurServices;
