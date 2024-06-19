import React from "react";
import carImg from "../../assets/home/Cars/car.png";
import { FaGasPump } from "react-icons/fa";

const Cars = () => {
  return (
    <section>
      <div className="explore__cars__header">
        <h3>Explore Our SUVs</h3>
      </div>
      <div className=" wrapper__grid container cars__main__container">
        {/* <div className=" cars__row"> */}
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className=""> Rush</h4>

              <p className="">Toyota</p>

            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
            
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className=""> Expander</h4>
            <p className="">Mitsubhishi</p>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className=""> Car Name</h4>
            <p className="">Car Brand</p>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className=""> Car Name</h4>
            <p className="">Car Brand</p>
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
        
      </div>
    </section>
  );
};

export default Cars;
