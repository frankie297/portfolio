import React, { Component } from 'react';
import logo from './FHLogo.png';
class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <nav>
          <div className="nav-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-title">Frankie</span>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
</div>
</nav>
        </header>
    );
  }
}

export default Header;
