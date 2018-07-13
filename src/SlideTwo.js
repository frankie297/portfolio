import React, { Component } from 'react';
import Background from './Northern-Lights-Super-Jeep-Tour15-1200x800.jpg';

const SlideTwo= (props) => {
  let background = {
    backgroundImage: `url(${require("./Hopetoun_falls.jpg")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideTwo;
