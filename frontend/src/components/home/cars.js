import React from "react";

// Images

import rush from "../../assets/home/Cars/rush.webp";
import expander from "../../assets/home/Cars/expander.webp";
import landCruiser from "../../assets/home/Cars/land-cruiser.webp";
import pajero from "../../assets/home/Cars/pajero.webp";
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
          <img src={rush} alt="" />
          <h4 className=""> Rush</h4>

          <p className="">Toyota</p>

          <p className="paragraph">
            The Toyota Rush is your gateway to adventure. This 7-seater SUV
            combines functionality with surprising comfort, making it perfect
            for exploring new horizons with family or friends. Its bold design
            and spacious interior ensure you arrive at your destination in style
            and comfort, ready to conquer any adventure that awaits.
          </p>
        </div>
        <div className="column individual__car">
          <img src={expander} alt="" />
          <h4 className=""> Expander</h4>
          <p className="">Mitsubishi</p>
          <p className="">
            The Mitsubishi Xpander is a crossover MPV, meaning it blends the
            functionality of an MPV (multi-purpose vehicle) with the style and
            handling of a crossover SUV.Perfect for families or those who need
            plenty of passenger and cargo space.Offers a comfortable ride for
            all passengers with features like high ground clearance and
            potentially comfortable seating
          </p>
        </div>
        <div className="column individual__car">
          <img src={landCruiser} alt="" />
          <h4 className=""> Land Cruiser</h4>
          <p className="">Toyota</p>
          <p className="">
            This iconic SUV isn't just about conquering any terrain; it does so
            in unparalleled comfort. Experience the thrill of off-road prowess
            seamlessly blended with a luxurious interior featuring premium
            materials and thoughtful design. Land Cruiser: Where adventure meets
            refinement                                                                                                                                      
          </p>
        </div>
        <div className="column individual__car">
          <img src={pajero} alt="" />
          <h4 className=""> Pajero</h4>
          <p className=""> Mitsubishi</p>
          <p className="">
          The Mitsubishi Pajero isn't just a capable SUV, it's a luxurious companion for adventure.  Conquer any terrain in comfort and style with its powerful engine and surprisingly luxurious interior.  High-quality materials, thoughtful design, and advanced technology features elevate every drive, on or off-road.  The Pajero is for the discerning explorer who demands both capability and unexpected luxury.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cars;
