import React, { Component } from 'react';
import './about.sass';

import title_img from '../../img/about_title.jpg';

import Title from '../titile/Title'
import InfBox from './inf-box/InfBox'

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <Title image={`url(${title_img})`} headline="About The Agency" sent="Welcome to Lian"/>
                <InfBox/>
            </div>
        );
    }
}

export default About;