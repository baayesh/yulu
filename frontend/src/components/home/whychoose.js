import React from "react";
import L_cars from "../../assets/home/WhyChoose/L_Cars.png";
import D_Free from '../../assets/home/WhyChoose/No_Deposit.png';
import A_M from '../../assets/home/WhyChoose/D_A_Manager.png'

const WhyChoose = () => {
  return (
    <section>
      <div className="why__choose__container">
        <h2>Why Choose Us</h2>
        <div className="why__choose__cards">
          <div className="why__choose__card">
            <img src={L_cars} alt="" />
            <h3>Unmatched Luxury Fleet</h3>

            <p>Ditch ordinary rentals. Yulu Dubai curates a fleet of prestigious SUVs for an unmatched Dubai experience. Explore in luxury.</p>
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={D_Free} alt="" />
            <h3>Drive Now. Pay Later</h3>
            <p>Experience Dubai instantly.  Yulu Dubai offers "Drive Now, Pay Later" rentals for a seamless luxury adventure.</p>
          </div>
          <div className="why__choose__card">
            {" "}
            <img src={A_M} alt="" />
            <h3>Dedicated Account Manager</h3>
            <p>Your personal concierge. Our dedicated account manager ensures a seamless rental experience, catering to your every need.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
