import React, { Component } from 'react';
import './inf-box.sass';

import img from '../../../img/about_content.jpg';

import Story from './information/Story'

class InfBox extends Component {
    render() {
        return (
            <div className="inf-box">
                <div className="image-box" style={{backgroundImage: `url(${img})`}}></div>
                <Story/>
            </div>
        );
    }
}

export default InfBox;