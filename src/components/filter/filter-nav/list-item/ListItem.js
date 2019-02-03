import React, { Component } from 'react';
import './list-item.sass';


class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(event) {
        event.preventDefault();
        let items = document.querySelectorAll('.nav-list-item');
        
        items.forEach((item) => {
            item.style.color = '#989898';
        });

        event.currentTarget.style.color = 'black';
    }
    render() {
        return (
            <>
            <li className="nav-list-item" onClick={this.onItemClick}><span>{this.props.children}</span></li>
            </>
        );
    }
}

export default ListItem;