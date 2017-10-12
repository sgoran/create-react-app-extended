import React, { Component } from 'react';

import './resources/styles/App.css';
import './resources/font-awesome-4.7.0/css/font-awesome.min.css';

import Animate from './views/shared/Animate';
import MainNav from './views/shared/MainNav';
//import SubNav from './views/shared/SubNav';
//import Footer from './views/shared/Footer';
import SideMenu from './views/shared/SideMenu';

import Home from './views/home/Home';
import Form from './views/form/Form';
import Documentation from './views/documentation/Documentation';
import UpdateParentState from './views/examples/UpdateParentState';
import ReduxBasic from './views/examples/ReduxBasic';
import { toggleNav } from './redux/actions/actions';


import { connect } from 'react-redux';

import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom'

class App extends Component {

	constructor(props) {

		super(props);

		this.state = {
			broj: ''
		};

		this.promijeni = this.promijeni.bind(this);

	}
	promijeni(value) {
		this.setState({ broj: value })
	}

	centerClass () {
		
		var classNames =  "column centerView";
		if(!this.props.settings.toggleNav)
			classNames += " is-10"

		return classNames;	
	}


	render() {

		return (

			<Router>

				<div className="App" key="test">
					
					<MainNav onToggle={this.props.toggleSideNav} hideNav={this.props.settings.toggleNav}/>

					<div className="columns">

						<SideMenu className="column is-2 sideNav menu" hidden={this.props.settings.toggleNav} />
						

						<div className={this.centerClass()}>

				  		<Switch key="imagine" className="switch">
								<Animate  animKey="el1" path="/" exact component={Home} />
								<Animate  animKey="el2" path="/documentation" component={Documentation} />
								<Animate  animKey="el3" path="/form" component={Form} />
								<Animate  animKey="el4"
									path="/parentstate"
									render={() => (<UpdateParentState
										stanje={this.state}
										promijeni={this.promijeni} />)}
								/>
								<Animate  animKey="el3" path="/redux" component={ReduxBasic} />
							</Switch>

						</div>

					</div>	
					
					{/*<Footer />*/}

				</div>

			</Router>

		);
	}
}
function mapStateToProps(state){
    return {
        desc: state.desc,
				settings: state.settings
    }
    
}

function mapDispatchToProps(dispatch){
	  return {
        toggleSideNav: hide => {
					
					//console.log(hide)
					dispatch(toggleNav(hide))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);