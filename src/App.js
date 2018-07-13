import React, { Component } from 'react';
import Header from './Header';
import './materialize/materialize.min.css';
import './App.css';
import Slider from './Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
        </p>
        <Slider/>
      </div>
    );
  }
}

export default App;
