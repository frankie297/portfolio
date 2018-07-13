import React, { Component } from 'react';
import Background from './Northern-Lights-Super-Jeep-Tour15-1200x800.jpg';

const SlideOne= (props) => {
  let background = {
    backgroundImage: `url(${require("./Northern-Lights-Super-Jeep-Tour15-1200x800.jpg")})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;
