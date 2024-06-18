import React from 'react';
import Header from '../components/common/header';
import '../styles/home.css';
import Hero from '../components/home/hero';
import OurServices from '../components/home/ourServices';
import Cars from '../components/home/cars';
import Footer from '../components/common/footer'


const home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <OurServices/>
        <Cars/>
        <Footer/>
    </div>
  )
}

export default home