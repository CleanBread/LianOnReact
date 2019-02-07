import React, { Component } from 'react';
import './skill.sass';

class Skill extends Component {
    render() {
        return (
            <div className="skill">
                <span className="skill__name">
                    {this.props.skillName}
                    <div className="cloud" style={{left: this.props.skillProc + '%'}}>
                        <span className="proc">{this.props.skillProc}%</span>
                    </div>
                    <div className="triangle" style={{left: this.props.skillProc + '%'}}></div>
                </span>
                <span className="skill__progress">
                    <span className="skill__line" style={{width: this.props.skillProc + '%'}}></span>
                    <span className="dot">
                        <span className="dot__white"></span>
                    </span>
                </span>
            </div>
        );
    }
}

export default Skill;