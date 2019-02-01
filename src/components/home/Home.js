import React, { Component } from 'react';
import './home.sass';

import Slider from '../slider/Slider'
import Filter from '../filter/Filter'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Slider/>
                <Filter/>
            </div>
        );
    }
}

export default Home;