import React, { Component } from 'react';
import './story.sass';

import Subheading from '../../../subheading/Subheading'
import Skills from './skills/Skills'

class Story extends Component {
    render() {
        return (
            <div className="story-box">
                <Subheading subheading="Our Story"/>
                <span className="sentence">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</span>
                <span className="sentence">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</span>
                <Skills/>
            </div>
        );
    }
}

export default Story;