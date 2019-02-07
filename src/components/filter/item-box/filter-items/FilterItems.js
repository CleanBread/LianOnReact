import React, { Component } from 'react';
import './filter-items.sass';

class FilterItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: this.props.slides
        }
    }


    renderItems() {
        return this.props.slides.map((item, index) => (
            <div
                className= "filter-item" 
                key = {index} 
                style = {{backgroundImage: item.eachSlide}}>
                <div className="item-active">
                    <span className="gor"></span>
                    <span className="vert"></span>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div className="item-box">
                {this.renderItems()}
            </div>
        );
    }
}

export default FilterItems;