import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor (props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    

    onChange(el){
        this.props.onChange && this.props.onChange(el.target.value);
    }

    render () {
        return (
            <div>
                <input 
                    name={this.props.name} 
                    onChange={this.onChange}
                    value={this.props.value}
                     />
            </div>
        )
    }
}

Input.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired
}

export default Input;