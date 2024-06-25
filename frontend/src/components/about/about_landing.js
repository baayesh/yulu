import React from "react";
import landing_1 from "../../assets/about/landing_1.webp";
import landing_2 from "../../assets/about/landing_2.webp";
import car from "../../assets/about/Icons/car.png";
import after_service from "../../assets/about/Icons/after_service.png";
import secure_payments from "../../assets/about/Icons/payment.png";
import price_tag from "../../assets/about/Icons/low_price.png";

const About_landing = () => {
  const services = [
    {
      img: car,
      title: "More than 5 luxury car brands",
      description:"Choose from renowned names like Range Rover, Lexus, and Land Cruiser, and discover the perfect vehicle to turn heads and create unforgettable memories."
    },
    {
      img: after_service,
      title: "24/7 After Service",
      description:"Whenever you need assistance, we're here to answer questions and provide support, ensuring your journey is smooth and enjoyable."
    },
    {
      img: secure_payments,
      title: "100% Secure Payment gateway",
      description:"We utilize a 100% secure payment gateway to protect your financial information.  Rent with peace of mind, knowing your transactions are completely secure."
    },
    {
      img: price_tag,
      title: "Lowest Price in Dubai",
      description:" Yulu Dubai offers the most competitive rates for high-end SUVs in Dubai. We believe in transparent pricing with no hidden fees, so you can explore Dubai in style without worry."
    },
  ];
  return (
    <section>
      <div className="about__landing__container">
        <h2>Experience Dubai in Unmatched Luxury with Yulu Dubai</h2>
        <p>
          Yulu Dubai is your gateway to exploring the breathtaking landscapes
          and vibrant energy of Dubai in unparalleled style. We are a <span>premium
          rent-a-car service</span>  specializing in a curated fleet of the most
          prestigious SUVs, designed to elevate your journey beyond
          expectations.
          <br />
          <br />
          At Yulu Dubai, we believe that luxury shouldn't come at a premium
          cost. That's why we offer the most competitive rates in Dubai for
          high-end SUVs. We understand the importance of transparency and
          building trust, so you'll never face any hidden fees or surprise
          charges.
          <br />
          <br />
          Furthermore, unlike many other rental companies, forget about putting
          down a hefty deposit before you drive away. With Yulu Dubai, simply
          choose your dream SUV, complete the <span>hassle-free rental process</span> , and
          get ready to explore Dubai in style. Our commitment to exceptional
          service extends far beyond the exquisite vehicles we offer.
          <br />
          <br />
          We are a Sri Lankan-founded company, and we proudly integrate the
          legendary Sri Lankan hospitality into every aspect of your Yulu Dubai
          experience. Our dedicated team is passionate about creating
          unforgettable memories for our guests. From the moment you contact us
          to the second you return your vehicle, we are here to ensure your
          experience is seamless, personalized, and infused with genuine Sri
          Lankan warmth. 
          
          <br />
          <br />
          So, whether you're cruising down Sheikh Zayed Road in a
          powerful Xpander or embarking on a desert adventure in a luxurious
          Land Cruiser,<span>Yulu Dubai is your partner in crafting a truly
          unforgettable Dubai experience.</span>  Explore our extensive fleet, discover
          our competitive rates, and let us show you the true meaning of luxury
          car rentals in Dubai.
        </p>
        <div className="about__landing__images">
          <img src={landing_1} alt="" />
          <img src={landing_2} alt="" />
        </div>
      </div>
      <div className="about__landing__speciality">
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.img} alt="" />
            <h5>{service.title}</h5>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="get__in__touch">
        <h3>GET IN TOUCH</h3>
        <p>Ready to embark on your luxury Dubai adventure? At Yulu Dubai, we're passionate about making your experience seamless and unforgettable.Stay up-to-date on our latest deals, newest additions to the fleet, and exclusive offers by subscribing to our email newsletter. </p>
        <input type="text" placeholder="YOUR EMAIL" />
        <button type="submit">SIGN UP NOW</button>
      </div>
    </section>
  );
};

export default About_landing;
