import React, { Component } from 'react';
import {
  NavLink 
} from 'react-router-dom';

export default class MainNav extends Component {
	

	componentDidMount(){
		//console.log('componentDidMount')
		

	}



	navCls (){
		return 'nav-item is-tab';
	}

	

	render() {
		return (
				<nav className="nav has-shadow ">

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
					<div className="nav-right nav-menu ">
						
						<NavLink className={this.navCls()} exact activeClassName="is-active" to="/">
							Home
		  				</NavLink>
						<NavLink className={this.navCls()} activeClassName="is-active" to="/documentation">
							Documentation
		  				</NavLink>
						<NavLink className={this.navCls()} activeClassName="is-active" to="/form">
							Form
		  				</NavLink>

						<div className="nav-item">
							<div className="field is-grouped">
								<p className="control">
									<a className="button is-primary"  target="BLANK_" href="https://github.com/sgoran/create-react-app-extended" >
										<span className="icon">
											<i className="fa fa-download"></i>
										</span>
										<span>
											 <span>Download</span>
										</span>
									</a>
								</p>
							</div>
						</div>
					</div>
				</nav>
		);
	}
}


