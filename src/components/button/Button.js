import React, { Component } from 'react';
import './button.sass';

class Button extends Component {
    render() {
        return (
            <button className="send-button">{this.props.text}</button>
        );
    }
}

export default Button;