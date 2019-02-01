import React, { Component } from 'react';
import './filter.sass';

import FilterNav from './filter-nav/FilterNav'
import ListItem from './filter-nav/list-item/ListItem'

class Filter extends Component {
    

    render() {
        return (
            <div className="filter-container">
                <FilterNav>
                    <ListItem>All</ListItem>
                    <ListItem>Logo</ListItem>
                    <ListItem>Mobile App</ListItem>
                    <ListItem>WordPress</ListItem>
                    <ListItem>Web Design</ListItem>
                    <ListItem>UX/IX</ListItem>
                    <ListItem>Branding</ListItem>
                </FilterNav>
            </div>
        );
    }
}

export default Filter;