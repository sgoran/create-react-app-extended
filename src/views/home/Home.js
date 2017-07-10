import React, { Component } from 'react';
import Card from '../shared/Card';
import { connect } from 'react-redux';

class Center extends Component {
    render() {

        var components = [
            1, 2, 3, 4, 5
        ];

        return (
            <div>
                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Tweets</p>
                            <p className="title">3,456</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Following</p>
                            <p className="title">123</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Followers</p>
                            <p className="title">456K</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Likes</p>
                            <p className="title">789</p>
                        </div>
                    </div>
                </nav>
                <div className="columns">
                    {/*{this.props.desc}*/}
                    <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                        {components.map(function (cpm) {
                            return (
                                <Card key={cpm} />
                            );
                        })}

                    </div>

                    <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                        {components.map(function (cpm) {
                            return (
                                <Card key={cpm} />
                            );
                        })}

                    </div>
                    <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                        {components.map(function (cpm) {
                            return (
                                <Card key={cpm} />
                            );
                        })}

                    </div>
                    <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">

                        {components.map(function (cpm) {
                            return (
                                <Card key={cpm} />
                            );
                        })}

                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        desc: state.desc
    }

}
export default connect(mapStateToProps)(Center);

