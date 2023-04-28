import logo from '../assets/logo.png'

import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <header>
        <div className="netflixLogo">
          <a id="logo" href="#home">
            {/* <img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /> */}
            <img src={logo} alt="no img" />
          </a>
        </div>
        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#tvShows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#originals">Originals</a>
          <a href="#">Recently Added</a>
          <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>
        </nav>
        <nav className="sub-nav">
          <a href="#"><i className="fas fa-search sub-nav-logo"></i></a>
          <a href="#"><i className="fas fa-bell sub-nav-logo"></i></a>
          <a href="#">Account</a>
        </nav>
      </header>
    );
  }
}

export default Nav;
