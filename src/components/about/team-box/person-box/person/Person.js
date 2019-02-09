import React, { Component } from 'react';
import './person.sass';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <div className="person__photo" style={{backgroundImage: this.props.photo}}></div>
                <div className="person__inf">
                    <span className="name">{this.props.name}</span>
                    <span className="position">{this.props.position}</span>
                    <span className="description">{this.props.description}</span>
                </div>
            </div>
        );
    }
}

export default Person;