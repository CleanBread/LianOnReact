import React, { Component } from 'react';
import './home.sass';

import Slider from '../slider/Slider'


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Slider/>
            </div>
        );
    }
}

export default Home;