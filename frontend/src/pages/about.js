import React from 'react';
import '../styles/about.css';
import AboutLanding from '../components/about/about_landing';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const About = () => {
  return (
    <section>
        <Header />
        <AboutLanding />
        <Footer/>

    </section>
  )
}

export default About