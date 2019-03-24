import React, { Component } from 'react';
import './title.sass';

import Subheading from '../subheading/Subheading'

class Title extends Component {
    render() {
        return (
            <div className="title" style = {{backgroundImage: this.props.image, backgroundColor: this.props.color}}>
                <div className="title__content">
                    <div className="title__headline">
                        <span>{this.props.headline}</span>
                    </div>
                    <Subheading subheading={this.props.sent}/>
                </div>
            </div>
        );
    }
}

export default Title;