import React, { Component } from 'react';
import Card from '../shared/Card';
import { connect } from 'react-redux';

class Center extends Component {
    render() {
        
        var components = [
            1,2,3,4, 5
            ];

        return (
            
            <div className="columns">
                {this.props.desc}
                <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                    {components.map(function(cpm){
                        return (
                           <Card key={cpm}/>
                        );
                    })}

                </div>

                <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                    {components.map(function(cpm){
                        return (
                           <Card key={cpm}/>
                        );
                    })}

                </div>
                <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                    {components.map(function(cpm){
                        return (
                            <Card key={cpm}/>
                        );
                    })}

                </div>
                <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                    {components.map(function(cpm){
                        return (
                            <Card key={cpm}/>
                        );
                    })}

                </div>
                
            </div>

        );
    }
}

function mapStateToProps(state){
   
    return {
        desc: state.desc
    }
    
}
export default connect(mapStateToProps)(Center);

