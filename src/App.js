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
import ReduxFormExample from './views/reduxexamples/ReduxFormExample';


import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom'

class App extends Component {

	constructor(props){

		super(props);
		var me = this;


		this.state = {
			broj: 3
		};


		this.promijeni = this.promijeni.bind(this);

	}
	promijeni(value){
		console.log(value)
		this.setState({broj: value})
	}
	render() {
		return (
			<div>
				{this.state.broj}
	<ReduxFormExample  
									key="ReduxFormExample1" 
									stanje={this.state}  
									promijeni={this.promijeni} />
			</div>	
		

		);
	}
}

export default App;
/*<Router>

				<div className="App" key="kita">
					<MainNav broj={this.state.broj} />

					<div className="center-container container">

						<SubNav stanje={this.state} />

						
							<Switch key="imagine" className="switch">
								<Animate animKey="el1" path="/" exact component={Home}  />
								<Animate animKey="el2" path="/documentation" component={Documentation}  />
								<Animate animKey="el3" path="/form" component={Form} />
								<Animate animKey="el4" 
									path="/redux" 
									component={()=>(<ReduxFormExample  
									key="ReduxFormExample1" 
									stanje={this.state}  
									promijeni={this.promijeni}/>)}
								/>
							</Switch>
						
						
					</div>

					<Footer />

				</div>

			</Router> */
			
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