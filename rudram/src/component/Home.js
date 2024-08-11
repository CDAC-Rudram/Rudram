// src/components/Home.js

import React from 'react';


import './Home.css';
import FooterComponent from './FooterComponent';
import MainComponent from './MainComponent';
import CardComponent from './CardComponent';
import CompatibleGroup from './CompatibleGroup';



const Home = () => {
  return (
    <div className="home">
                
                  <MainComponent/>
                  <CardComponent/>
                 
                <CompatibleGroup/>
               
             
    </div>
  );
};

export default Home;
