import React, { Component } from 'react';
import './text-area.sass';

class TextArea extends Component {
    render() {
        return (
            <textarea name="mes" id="" cols="30" rows="10" className="text-area" placeholder={this.props.placeholder}></textarea>
        );
    }
}

export default TextArea;