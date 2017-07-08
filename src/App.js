import React, { Component } from 'react';

import './resources/styles/App.css';
import './resources/font-awesome-4.7.0/css/font-awesome.min.css';

import Animate from './views/shared/Animate';
import MainNav from './views/shared/MainNav';
import SubNav from './views/shared/SubNav';
import Footer from './views/shared/Footer';

import Home from './views/home/Home';
import Form from './views/form/Form';
import Documentation from './views/documentation/Documentation';
import UpdateParentState from './views/examples/UpdateParentState';
import ReduxBasic from './views/examples/ReduxBasic';


import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom'

class App extends Component {

	constructor(props) {

		super(props);
		var me = this;


		this.state = {
			broj: ''
		};


		this.promijeni = this.promijeni.bind(this);

	}
	promijeni(value) {
		this.setState({ broj: value })
	}
	render() {
		return (

			<Router>

				<div className="App" key="test">
					<MainNav broj={this.state.broj} />

					<div className="center-container container">

						{ /* <SubNav stanje={this.state} /> */}


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

					<Footer />

				</div>

			</Router>

		);
	}
}

export default App;
/*<div>
				{this.state.broj}
	<ReduxFormExample  
									key="ReduxFormExample1" 
									stanje={this.state}  
									promijeni={this.promijeni} />
			</div>	*/

/** PRIMJER KOJI RADI
 
 class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '123'};

    
  }
  
   render() {
    return (
      <div>
        {this.state.value}
      <NameForm otac={this} podaci={this.state}/>
      </div>
    )
   }
}


// NAME FORM
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    alert(1)
  }
  handleChange(event) {
    this.props.otac.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.podaci.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);

*/