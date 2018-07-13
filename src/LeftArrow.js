import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <i className="large material-icons">arrow_back</i>
    </div>
  );
}

export default LeftArrow;
