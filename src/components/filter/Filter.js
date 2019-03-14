import React, { Component } from 'react';
import './filter.sass';

import { connect } from 'react-redux'

import FilterNav from './filter-nav/FilterNav'
import ListItem from './filter-nav/list-item/ListItem'
import ItemBox from './item-box/ItemBox'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: this.props.projects
        }
    }

    updateData = (value) => {
        this.setState({ projects: value });
    }
    

    render() {
        return (
            <div className="filter-container">
                <FilterNav>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="all">All</ListItem>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="logo">Logo</ListItem>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="mobile">Mobile App</ListItem>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="wordpress">WordPress</ListItem>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="webDesign">Web Design</ListItem>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="ux/ix">UX/IX</ListItem>
                    <ListItem updateData={this.updateData} projects={this.props.projects} name="branding">Branding</ListItem>
                </FilterNav>
                <ItemBox projects={this.state.projects}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.slideInfo.projects
    }
}

export default connect(mapStateToProps)(Filter);