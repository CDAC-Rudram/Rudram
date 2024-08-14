// src/components/Home.js

import React from 'react';


import './Home.css';
import FooterComponent from './FooterComponent';
import MainComponent from './MainComponent';
import CardComponent from './CardComponent';
import CompatibleGroup from './CompatibleGroup';
import Navbar from './Navbar';



const Home = () => {
  return (
    <div className="home">
                 <Navbar />
                  <MainComponent/>
                  <CardComponent/>
                 
                <CompatibleGroup/>
               <FooterComponent/>
             
    </div>
  );
};

export default Home;
