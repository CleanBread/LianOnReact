import React, { Component } from 'react';
import './input.sass';

class Form extends Component {
    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} className="input"/>
        );
    }
}

export default Form;