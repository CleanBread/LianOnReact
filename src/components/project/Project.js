import React, { Component } from 'react';
import './project.sass';
import { connect } from 'react-redux'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: this.props.slides[this.props.match.params.number]
        }
    }
    render() {
        return (
            <div>{this.state.slide.status}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        slides: state.slideInfo.slides
    }
}

export default connect(mapStateToProps)(Project);