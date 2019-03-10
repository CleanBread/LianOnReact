import React, { Component } from 'react';
import './project.sass';
import { connect } from 'react-redux'

import title_img from '../../img/project_title.png'

import Title from '../titile/Title'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: this.props.slides[this.props.match.params.number]
        }
    }

    componentDidMount() {
        window.scroll(0, 0);
    };

    render() {
        return (
            <div className="project__container">
                <Title image={`url(${title_img})`} headline="LATEST PROJECTS" sent="We Deliver Quality"/>
                <div className="project__inf-container">
                    <div className="inf">

                    </div>
                    <div className="image" style={{backgroundImage: this.state.slide.eachSlide}}></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        slides: state.slideInfo.slides
    }
}

export default connect(mapStateToProps)(Project);