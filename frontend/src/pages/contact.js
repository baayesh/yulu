import React from "react";
import "../styles/contact.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

const contact = () => {
  const contactDetails = [
    {
      title: "Email",
      content: "info@yuludubai.com",
      description:'Due to a high amount of requests, we might take a few hours to get back to you. We apologize for any inconvenience this may cause.'
    },
    {
      title: "Phone",
      content: "+971 555 555 555",
      description:'Available 24/7'
    },
  ];
  return (
    <section>
      <Header />
      <div className="contact__container">
        <h1>Contact yulu dubai</h1>
        <p>
          At Yulu Dubai, we're here to ensure a seamless and unforgettable
          experience. Feel free to reach out to us with any questions, requests,
          or simply to get started planning your Dubai adventure in style. Here
          are the ways you can connect with our friendly team
        </p>
        <form action="" className="contact__form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Last Name" />
          <input
            type="textarea"
            placeholder="Message"
            className="contact__form__message"
          />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="phone" />
          <button className="contact__form__button">Submit</button>
        </form>

        <div className="contact__details">
          {contactDetails.map((contactDetail, index) => (
            <div className="contact__detail__container" key={index}>
              <h2>{contactDetail.title}</h2>
              <h3 >{contactDetail.content}</h3>
              <p>{contactDetail.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default contact;
