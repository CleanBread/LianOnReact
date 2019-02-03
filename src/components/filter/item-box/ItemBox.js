import React, { Component } from 'react';
import './item-box.sass';

import FilterItems from './filter-items/FilterItems'

class ItemBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            func: this.func
        }
    }

    updateData = (value) => {
        this.setState({ func: value })
    }

    render() {
        return (
            <div className="item-box">
                <FilterItems updateData={this.updateData}/>
            </div>
        );
    }
}

export default ItemBox;