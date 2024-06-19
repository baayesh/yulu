import React from 'react';
import Header from '../components/common/header';
import '../styles/home.css';
import Hero from '../components/home/hero';
import OurServices from '../components/home/ourServices';
import Cars from '../components/home/cars';
import Footer from '../components/common/footer'
import WhyChoose from '../components/home/whychoose';


const home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <WhyChoose/>
        <OurServices/>
        <Cars/>
        <Footer/>
    </div>
  )
}

export default home