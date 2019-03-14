import React, { Component } from 'react';
import './slider.sass';

import { connect } from 'react-redux'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: this.props.slider,
            autoplay: false,
            active: 0,
            max: 0
        }
        this.state.max = this.state.slider.length;
        this.nextOne = this.nextOne.bind(this);
        this.prevOne = this.prevOne.bind(this);
    }

    nextOne() {
        if (this.state.active < this.state.max - 1) {
            let act = this.state.active;
            this.setState({
                active: ++act
            })
        } else {
            this.setState({
                active: 0
            })
        }
    }

    prevOne() {
        if (this.state.active > 0) {
            let act = this.state.active;
            this.setState({
                active: --act
            })
        } else {
            let max = this.state.max;
            this.setState({
                active: max - 1
            })
        }
    }

    dots(index, event) {
        this.setState({
            active: index
        })
    }

    isActive(value) {
        if(this.state.active === value) {
            return 'active';
        }
    }

    setSliderStyles() {

        const transition = this.state.active * - 100 / this.state.slider.length;

        return {
            width: (this.state.slider.length * 100) + '%',
            transform: `translateX(${transition}%)`
        }
    }

    renderslider() {
        
        const transition = 100 / this.state.slider.length + '%';

        return this.state.slider.map((item, index) => (
            <div
                className= "each-slide slide" 
                key = {index} 
                style = {{backgroundImage: item.eachSlide, width: transition}}>
                <div className="slide-content">
                    <div className="headline">
                        <span>{item.headline}</span>
                    </div>
                    <span className="sentence">{item.sentence}</span>
                </div>
            </div>
        ))
    }

    renderDots() {
        return this.state.slider.map((item, index) => (
            <li
            className = {this.isActive(index) + ' dots'}
            key = {index}
            ref = "dots"
            onClick = {this.dots.bind(this, index)}>
                <span></span>
            </li>
        ))
    }

    renderArrows() {
        return (
            <>
                <button
                type="button"
                className="arrows prev"
                onClick={this.prevOne}>
                    <svg fill='black' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
                <button
                type="button"
                className="arrows next"
                onClick={this.nextOne}>
                    <svg fill='black' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </>
        )
    }

    render() {
        return (
            <div className="slider-container">
                <div className="slider">
                    <div className="wrapper"
                    style = {this.setSliderStyles()}>
                        {this.renderslider()}>
                    </div>

                    {this.renderArrows()}

                    <ul className="dots-container">
                        {this.renderDots()}
                    </ul>
                </div>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        slider: state.slideInfo.slider
    }
}

export default connect(mapStateToProps)(Slider);