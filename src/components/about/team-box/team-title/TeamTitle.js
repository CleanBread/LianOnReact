import React, { Component } from 'react';
import './team-title.sass';

class TeamTitle extends Component {
    render() {
        return (
            <div className="team-title">
                <span className="headline">Awesome Team</span>
                <span className="sentence">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</span>
            </div>
        );
    }
}

export default TeamTitle;