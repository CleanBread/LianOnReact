import React, { Component } from 'react';
import './contacts.sass';

import ContactsItem from './contacts-item/ContactsItem'

class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
                <span className="contacts__headline">Office Info</span>
                <span className="contacts__subheading">People Behind the Success of our Company</span>
                <span className="contacts__line"></span>
                <ContactsItem name="Office Hours" inf="Mon-Friday 8am - 10pm"/>
                <ContactsItem name="Address" inf="Igbalangao, Bugasong, Antique"/>
                <ContactsItem name="Tell" inf="123-456-7890"/>
                <ContactsItem name="Fax" inf="123-456-7890"/>
            </div>
        );
    }
}

export default Contacts;