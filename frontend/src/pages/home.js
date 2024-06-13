import React from 'react';
import Header from '../components/common/header';
import '../styles/home.css';
import Hero from '../components/home/hero';
import OurServices from '../components/home/ourServices';
import Cars from '../components/home/cars';


const home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <OurServices/>
        <Cars/>
    </div>
  )
}

export default home