import React, { Component } from 'react';

export default class UpdateParentState extends Component {

    constructor(props){
    
        super(props); 
        
        this.handleChange = this.handleChange.bind(this);
        
    }
    componentDidMount(){
        console.log(new Date())
    }
    handleChange(event) {
        this.props.promijeni(event.target.value);
    }

    render() {
      
        return (
    
                            <input 
                            key="broj"
                            onChange={this.handleChange}
                            value={this.props.stanje.broj} 
                            className="input" 
                            type="text"
                            placeholder="Broj" 
                            name="broj"/>
        );
    }
}


