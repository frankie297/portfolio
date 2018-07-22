import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import './Slider.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }

 renderSlider = (images) => {
    images.map((curr, i) => images.push(<Slide key={i} image={images[i]}/>));
    console.log(images);
  }

  // renderSlider = (images) => {
  //   //images will be an array of strings that match to a file
  //   console.log(images);
  //   //for each image generate a slide passing in the filename
  //    const slides = [];
  //   for (let i = 0; i < images.length; i++) {
  //       // note: the key prop here will allow react to uniquely identify each element in
  //       // this array. see: https://reactjs.org/docs/lists-and-keys.html
  //        images.push(<Slide key={i} image={images[i]}/>);
  //   }
  //    return <div>{slides}</div>;
  // }

  render() {

    const {
      images,
      index,
      translateValue
    } = this.props

    const initialState = {
    images: ["Northern-Lights-Super-Jeep-Tour15-1200x800", "Hopetoun_falls", "Experiences_Beach"],
    index: 0,
    translateValue: 0
  }

    return (
      <div className="slider">

      <div className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
         { this.renderSlider(initialState.images) }
      </div>

        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />

      </div>
    )
  }

  nextSlide() {
    const { images, index, translateValue, setTranslateValue, setIndex } = this.props
    if(index === images.length - 1) {
      setTranslateValue(0)
      return setIndex(0)
    }
    setTranslateValue(translateValue - this.slideWidth())
    setIndex(index + 1)
  }

  previousSlide() {
    const { index, translateValue, setTranslateValue, setIndex } = this.props
    if(index === 0) return

    setTranslateValue(translateValue + this.slideWidth())
    setIndex(index - 1)
  }

//   handleDotClick = i => {
//   const { index, translateValue, setTranslateValue, setIndex } = this.props
//   if(i === index) return
//
//   if(i > index)
//     setTranslateValue(-(i * this.slideWidth()))
//   else
//     setTranslateValue(translateValue + ((index - i) * (this.slideWidth())))
//
//   setIndex(i)
// }
//
 slideWidth = () => document.querySelector('.slide').clientWidth

}

const mapStateToProps = ({ slider }) => {
  return {
    images: slider.images,
    index: slider.index,
    translateValue: slider.translateValue
  }
}
