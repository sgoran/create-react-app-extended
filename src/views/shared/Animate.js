import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import {

	Route,
} from 'react-router-dom'

export default class Animate extends Component {

	render() {
		return (
			<CSSTransitionGroup
				transitionName="fade"
				transitionAppear={true}
      			transitionAppearTimeout={500}
				transitionEnterTimeout={200}
				transitionLeave={false}
			>
				<Route key={this.props.animKey}   {...this.props} />
			</CSSTransitionGroup>
		);
	}
}


