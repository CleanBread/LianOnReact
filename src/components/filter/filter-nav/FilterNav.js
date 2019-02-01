import React, { Component } from 'react';
import './filter-nav.sass';

class FilterNav extends Component {
    render() {
        return (
            <div className="filter-navbar">
                <ul className="filter-list">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default FilterNav;