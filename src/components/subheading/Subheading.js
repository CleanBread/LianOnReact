import React, { Component } from 'react';
import './subheading.sass';

class Subheading extends Component {
    render() {
        return (
            <>
            <span className="subheading">
                {this.props.subheading}
            </span>
            </>
        );
    }
}

export default Subheading;