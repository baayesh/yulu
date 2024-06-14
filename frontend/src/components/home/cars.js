import React from "react";
import carImg from "../../assets/home/Cars/car.png";
import { FaGasPump } from "react-icons/fa";

const Cars = () => {
  return (
    <section>
      <div className=" wrapper__grid container cars__main__container">
        {/* <div className=" cars__row"> */}
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
            
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
        {/* </div> */}
        {/* <div className="row cars__row"> */}
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
          <div className="column individual__car">
            <img src={carImg} alt="" />
            <h4 className="subheading__3"> Car Name</h4>
            <p className="tag__2">Car Brand</p>
            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis dolore cupiditate totam ab nam.</p>
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Cars;
