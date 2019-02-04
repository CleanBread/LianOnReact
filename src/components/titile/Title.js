import React, { Component } from 'react';
import './title.sass';

class Title extends Component {
    render() {
        return (
            <div className="title" style = {{backgroundImage: this.props.image}}>
                <div className="title__content">
                    <div className="title__headline">
                        <span>{this.props.headline}</span>
                    </div>
                    <span className="title__sentence">
                        {this.props.sent}
                    </span>
                </div>
            </div>
        );
    }
}

export default Title;