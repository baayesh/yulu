import React from 'react';
import '../styles/contact.css';
import Header from '../components/common/header';
import Footer from '../components/common/footer';


const contact = () => {
  return (
    <section>
        <Header/>
        <div className="contact__container">
            <h1>Contact yulu dubai</h1>
            <p>At Yulu Dubai, we're here to ensure a seamless and unforgettable experience.  Feel free to reach out to us with any questions, requests, or simply to get started planning your Dubai adventure in style.  Here are the ways you can connect with our friendly team</p>
            <form action="" className="contact__form">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Subject' />
                <input type="text" placeholder='Last Name' />
                <input type="textarea" placeholder='Message'  className='contact__form__message'/>
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='phone' />
                <button className='contact__form__button'>Submit</button>
            </form>

        </div>
        <Footer/>
    </section>
  )
}

export default contact