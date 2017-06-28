import React, { Component } from 'react';
//import { CSSTransitionGroup } from 'react-transition-group';



import './resources/styles/App.css';
import './resources/font-awesome-4.7.0/css/font-awesome.min.css';


import Animate from './views/shared/Animate';
import MainNav from './views/shared/MainNav';
import SubNav from './views/shared/SubNav';
import Footer from './views/shared/Footer';

import Home from './views/home/Home';
import Form from './views/form/Form';
import Documentation from './views/documentation/Documentation';


import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

class App extends Component {
	render() {
		return (

			<Router>

				<div className="App" key="kita">
					<MainNav />

					<div className="center-container container">

						<SubNav />

						
							<Switch key="imagine" className="switch">
								<Animate animKey="el1" path="/" exact component={Home}  />
								<Animate animKey="el2" path="/documentation" component={Documentation}  />
								<Animate animKey="el3" path="/form" component={Form} />
							</Switch>
						
						
					</div>

					<Footer />

				</div>

			</Router>

		);
	}
}

export default App;
