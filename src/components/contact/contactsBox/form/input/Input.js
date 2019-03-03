import React, { Component } from 'react';
import './input.sass';

class Form extends Component {
    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} className="input"/>
        );
    }
}

export default Form;