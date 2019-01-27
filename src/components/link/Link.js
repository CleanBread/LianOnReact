import React, { Component } from 'react';
import './link.sass';

class Link extends Component {
    render() {
        return (
            <a href={this.props.href} className="link">
                {this.props.children}
            </a>
        );
    }
}

export default Link;