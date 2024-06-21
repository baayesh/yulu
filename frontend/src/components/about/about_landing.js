import React from "react";
import landing_1 from "../../assets/about/landing_1.png";
import landing_2 from "../../assets/about/landing_2.png";
import car from "../../assets/about/Icons/car.png";
import after_service from "../../assets/about/Icons/after_service.png";
import secure_payments from "../../assets/about/Icons/payment.png";
import price_tag from "../../assets/about/Icons/low_price.png";

const About_landing = () => {
  const services = [
    {
      img: car,
      description: "More than 5 luxury car brands",
    },
    {
      img: after_service,
      description: "24/7 After Service",
    },
    {
      img: secure_payments,
      description: "100% Secure Payment gateway",
    },
    {
      img: price_tag,
      description: "Lowest Price in Dubai",
    },
  ];
  return (
    <section>
      <div className="about__landing__container">
        <h2>Rent Luxury SUV @ Dubai</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde facilis
          sapiente laboriosam, veniam numquam magnam voluptates in atque quasi
          quibusdam obcaecati sunt aperiam aspernatur officia illo est id ea
          harum itaque ad rem quisquam! Voluptatum, quaerat illo voluptate earum
          neque cum voluptas eaque adipisci dolorem recusandae quia beatae
          delectus quas dignissimos possimus cumque rerum quis at minus. Eos
          aperiam excepturi veniam quia error illo obcaecati mollitia rem
          dolorum sapiente iusto voluptas repellendus odio facilis magnam
          repellat unde quod atque, possimus, inventore saepe earum quasi
          asperiores non. A sint consectetur, doloribus vel iusto odio,
          cupiditate quam molestiae similique totam repellat praesentium?
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
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="get__in__touch">
        <h3>GET IN TOUCH</h3>
        <p>Get in touch description</p>
        <input type="text" placeholder="YOUR EMAIL" />
        <button type="submit">SIGN UP NOW</button>
      </div>
    </section>
  );
};

export default About_landing;
