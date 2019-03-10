import React, { Component } from 'react';
import './home.sass';

import Slider from '../slider/Slider'
import Filter from '../filter/Filter'

let cords = ['scrollX','scrollY'];

class Home extends Component {

    componentWillUnmount() {
        cords.forEach(cord => localStorage[cord] = window[cord]);
    };

    componentDidMount() {
        window.scroll(...cords.map(cord => localStorage[cord]));
    };

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