import React from 'react';
import Header from '../components/common/header';
import '../styles/home.css';
import Hero from '../components/home/hero';
import OurServices from '../components/home/ourServices';


const home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <OurServices/>
    </div>
  )
}

export default home