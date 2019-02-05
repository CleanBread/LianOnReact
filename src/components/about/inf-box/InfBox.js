import React, { Component } from 'react';
import './inf-box.sass';

import img from '../../../img/about_content.jpg';

class InfBox extends Component {
    render() {
        return (
            <div className="inf-box">
                <div className="image-box" style={{backgroundImage: `url(${img})`}}></div>
                {/* <img src="../../../about_content.jpg" alt=""/> */}
            </div>
        );
    }
}

export default InfBox;