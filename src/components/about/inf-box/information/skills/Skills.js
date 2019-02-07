import React, { Component } from 'react';
import './skills.sass';

import Subheading from '../../../../subheading/Subheading'
import Skill from './skill/Skill'

class Skills extends Component {
    render() {
        return (
            <div className="skills-box">
                <Subheading subheading="Our SKills"/>
                <Skill skillName="Photoshop" skillProc="90"/>
                <Skill skillName="Branding" skillProc="95"/>
                <Skill skillName="Photography" skillProc="50"/>
                <Skill skillName="Web Design" skillProc="85"/>
            </div>
        );
    }
}

export default Skills;