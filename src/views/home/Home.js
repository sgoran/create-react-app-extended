import React, { Component } from 'react';
import Card from '../shared/Card';

export default class Center extends Component {
    render() {
        
        var components = [
            1,2,3,4, 5
            ];
console.log('Homeeeeeeeeeeeee')
        return (
            
            <div className="columns">

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


