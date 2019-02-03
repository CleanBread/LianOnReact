import React, { Component } from 'react';
import './filter-items.sass';

import Item_1 from '../../../../img/body-1.jpg';
import Item_2 from '../../../../img/body-2.jpg';
import Item_3 from '../../../../img/body-3.jpg';
import Item_4 from '../../../../img/body-4.jpg';
import Item_5 from '../../../../img/body-5.jpg';
import Item_6 from '../../../../img/body-6.jpg';
import Item_7 from '../../../../img/body-7.jpg';
import Item_8 from '../../../../img/body-8.jpg';
import Item_9 from '../../../../img/body-9.jpg';

class FilterItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {
                    eachSlide: `url(${Item_1})`,
                    status: 'logo'
                },
                {
                    eachSlide: `url(${Item_2})`,
                    status: 'mobile'
                },
                {
                    eachSlide: `url(${Item_3})`,
                    status: 'wordpress'
                },
                {
                    eachSlide: `url(${Item_4})`,
                    status: 'logo'
                },
                {
                    eachSlide: `url(${Item_5})`,
                    status: 'wordpress'
                },
                {
                    eachSlide: `url(${Item_6})`,
                    status: 'webDesign'
                },
                {
                    eachSlide: `url(${Item_7})`,
                    status: 'ux/ix'
                },
                {
                    eachSlide: `url(${Item_8})`,
                    status: 'branding'
                },
                {
                    eachSlide: `url(${Item_9})`,
                    status: 'branding'
                }
            ]
        }
        this.filterLogo = this.filterLogo.bind(this);
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.filterLogo(), 3000)
    // }

    filterLogo() {
        this.setState({slides: this.state.slides.filter(item => item.status === 'logo')})
    };

    renderItems() {
        return this.state.slides.map((item, index) => (
            <div
                className= "filter-item" 
                key = {index} 
                style = {{backgroundImage: item.eachSlide}}>
            </div>
        ))
    }

    render() {
        return (
            <div className="item-box" onClick={() => { this.props.updateData(this.filterLogo())}}>
                {this.renderItems()}
            </div>
        );
    }
}

export default FilterItems;