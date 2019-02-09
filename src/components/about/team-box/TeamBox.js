import React, { Component } from 'react';
import './team-box.sass';

import TeamTitle from './team-title/TeamTitle'
import PersonBox from './person-box/PersonBox'

class TeamBox extends Component {
    render() {
        return (
            <div className="team-box">
                <TeamTitle/>
                <PersonBox/>
            </div>
        );
    }
}

export default TeamBox;