import React, { Component } from 'react';
import './inf-box.sass';

import img from '../../../img/about_content.jpg';

class InfBox extends Component {
    render() {
        return (
            <div className="inf-box">
                <div className="image-box" style={{backgroundImage: `url(${img})`}}></div>
            </div>
        );
    }
}

export default InfBox;