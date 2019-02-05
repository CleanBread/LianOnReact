import React, { Component } from 'react';
import './contact.sass';

import title_img from '../../img/about_title.jpg';

import Title from '../titile/Title'

class Contact extends Component {
    render() {
        return (
            <div className="about-container">
                <Title image={`url(${title_img})`} headline="Get in Touch" sent="Contact us Today"/>
            </div>
        );
    }
}

export default Contact;