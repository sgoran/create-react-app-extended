import React, { Component } from 'react'
import Input from '../shared/Input'
import { connect } from 'react-redux'
import { updateDesc } from '../../redux/actions/actions';

class ReduxBasic extends Component {

    constructor (props) {
        super(props)
       
    }
    
    render () {
    
        return (
            <div>
                {this.props.desc}
                <Input 
                onChange={this.props.descChange} 
                value={this.props.desc} 
                name="desc" />
            </div>
        )
    }
}

// unidirectional - state iz storea -> props
function mapStateToProps(state){
   
    return {
        desc: state.desc
    }
    
}


function mapDispatchToProps(dispatch){
    return {
        /* 
            descChange: function(desc){
                dispatch(updateDesc(desc));
            } 
            isto kao ovo iznad
        */
        descChange: desc => {
            dispatch(updateDesc(desc))
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxBasic);

