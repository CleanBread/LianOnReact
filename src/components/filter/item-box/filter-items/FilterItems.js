import React, { Component } from 'react';
import './filter-items.sass';

import { NavLink as Link } from 'react-router-dom';

class FilterItems extends Component {

    renderItems() {
        return this.props.slides.map((item, index) => (
            <div
                className= "filter-item" 
                key = {index} 
                style = {{backgroundImage: item.eachSlide}}>
                
            <Link to={`/portfolio/${item.to}`} style={{width: '100%', height: '100%'}}>
                <div className="item-active">
                    <span className="gor"></span>
                    <span className="vert"></span>
                </div>
                </Link>
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