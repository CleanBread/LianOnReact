import React, { Component } from 'react';
import './item-box.sass';

import FilterItems from './filter-items/FilterItems'

class ItemBox extends Component {

    render() {
        return (
            <div className="item-box">
                <FilterItems slides={this.props.slides}/>
            </div>
        );
    }
}

export default ItemBox;