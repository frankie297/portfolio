import React, { Component } from 'react';

const SlideOne= (props) => {
  let background = {
    backgroundImage: 'url(./Northern-Lights-Super-Jeep-Tour15-1200x800.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;
