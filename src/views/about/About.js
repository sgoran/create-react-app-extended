import React, { Component } from 'react';


export default class About extends Component {
    render() {
        return (
            <div>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="http://bulma.io/images/placeholders/1280x960.png" alt="slika 1" />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="http://bulma.io/images/placeholders/96x96.png" alt="slika 2" />
                            </figure>
                        </div>
                    </div>

                    <div className="content">
                        About Page
                    </div>
                </div>
            </div>
            <br />
            </div>
        );
    }
}


