import React, { Component } from 'react';


export default class MainNav extends Component {
	constructor (props) {
		super(props)
		this.onToggle = this.onToggle.bind(this)
	}
	
	onToggle(e){
		e.preventDefault();
		this.props.onToggle(this.props.hideNav)
	}

	render() {
		
		return (
				<nav className="nav has-shadow ">

					<div className="nav-left">
						<a className="nav-item" href="" onClick={this.onToggle}>
							<span className="icon">
								<i className="fa fa-navicon"></i>
							</span>
						</a>
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


					<div className="nav-right nav-menu ">
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


