import React, { Component } from 'react';
import './resources/styles/App.css';
import logo  from './resources/images/logo.svg';

import Nav from './views/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />

        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="link is-info">Home</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Menu</a>
          </p>
          <p className="level-item has-text-centered">
            <img src={logo} className="App-logo" alt="logo" />
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Reservations</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Contact</a>
          </p>
        </nav>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
              </p>
              <p>
                <a className="icon" href="https://github.com/jgthms/bulma">
                  <i className="fa fa-github"></i>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
