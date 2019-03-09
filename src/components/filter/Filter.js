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
            slides: this.props.slides
        }
    }

    updateData = (value) => {
        this.setState({ slides: value });
    }
    

    render() {
        return (
            <div className="filter-container">
                <FilterNav>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="all">All</ListItem>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="logo">Logo</ListItem>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="mobile">Mobile App</ListItem>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="wordpress">WordPress</ListItem>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="webDesign">Web Design</ListItem>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="ux/ix">UX/IX</ListItem>
                    <ListItem updateData={this.updateData} slides={this.props.slides} name="branding">Branding</ListItem>
                </FilterNav>
                <ItemBox slides={this.state.slides}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        slides: state.slideInfo.slides
    }
}

export default connect(mapStateToProps)(Filter);