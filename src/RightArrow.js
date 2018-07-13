import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i className="large material-icons">arrow_forward</i>
    </div>
  );
}

export default RightArrow;
