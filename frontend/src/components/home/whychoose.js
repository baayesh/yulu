import React from "react";
import ULF from "../../assets/home/WhyChoose/Unmatched Flexibility.png";

const WhyChoose = () => {
  return (
    <section>
      <div className="why__choose__container">
        <h2>Why Choose Us</h2>
        <div className="why__choose__cards">
          <div className="why__choose__card">
            <img src={ULF} alt="" />
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
            <h3>Title</h3>

            <p>Paragraph</p>
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={ULF} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
