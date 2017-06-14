import React, { Component } from 'react';
import './resources/styles/App.css';


import MainNav from './views/MainNav';
import SubNav from './views/SubNav';
import Footer from './views/Footer';
import Center from './views/Center';

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
