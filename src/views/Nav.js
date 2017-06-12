import React, { Component } from 'react';
import logo from '../../images/logo.svg';

class Nav extends Component {
  render() {
    return (
      <div className="App">
      
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item"> <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" /></a>
          </div>

        <div className="nav-center">
          <a className="nav-item">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a className="nav-item">
            <span className="icon">
              <i className="fa fa-twitter"></i>
            </span>
          </a>
        </div>

        {/* This "nav-toggle" hamburger menu is only visible on mobile You need JavaScript to toggle the "is-active" className on "nav-menu" */}

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        {/* This "nav-menu" is hidden on mobile  Add the modifier "is-active" to display it on mobile */}
        <div className="nav-right nav-menu">
          <a className="nav-item">
            Home
          </a>
          <a className="nav-item">
            Documentation
          </a>
          <a className="nav-item">
            Blog
          </a>

          <div className="nav-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button" >
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>

      </div>
    );
  }
}

export default Nav;
