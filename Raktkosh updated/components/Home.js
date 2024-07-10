// src/components/Home.js

import React from 'react';


import './Home.css';
import FooterComponent from './FooterComponent';
import MainComponent from './MainComponent';
import CardComponent from './CardComponent';


const Home = () => {
  return (
    <div className="home">
                
                  <MainComponent/>
                  <CardComponent/>
                 
                
              <FooterComponent/>
    </div>
  );
};

export default Home;
