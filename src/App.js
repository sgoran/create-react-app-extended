import React, { Component } from 'react';
import './resources/styles/App.css';
import MainNav from './views/shared/MainNav';
import SubNav from './views/shared/SubNav';
import Footer from './views/shared/Footer';
import Center from './views/shared/Center';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<div className="App">

				<MainNav />
				
				<div className="center-container container">
					<SubNav />	
					<Center />
				</div>
				<Footer />

			</div>
		);
	}
}

export default App;
