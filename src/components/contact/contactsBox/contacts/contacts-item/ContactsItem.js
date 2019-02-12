import React, { Component } from 'react';
import './contacts-item.sass';

class ContactsItem extends Component {
    render() {
        return (
            <div className="contacts-item">
                <span className="item-name">{this.props.name}:</span>
                <span className="item-inf">{this.props.inf}</span>
            </div>
        );
    }
}

export default ContactsItem;