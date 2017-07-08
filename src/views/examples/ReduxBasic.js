import React, { Component } from 'react'
import Input from '../shared/Input'
import { connect } from 'react-redux'
import { updateDesc } from '../../redux/actions';

class ReduxBasic extends Component {

    constructor (props) {
        super(props)
       // this.descChange = this.descChange.bind(this)
        console.log(this.props)
    }
    

    // descChange(value){
    //     return value;
    // }

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
    //console.log(state)
    return state.setDesc
}


function mapDispatchToProps(dispatch){
    return {
        /* descChange: function(desc){
            dispatch(updateDesc(desc));
        } */
        descChange: desc => {
            dispatch(updateDesc(desc))
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxBasic);

