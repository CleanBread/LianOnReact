import React, { Component } from 'react';
import './contacts-box.sass';

import Contacts from './contacts/Contacts'
import Form from './form/Form'

class ContactsBox extends Component {
    render() {
        return (
            <div className="contacts-box">
                <Contacts/>
                <Form/>
            </div>
        );
    }
}

export default ContactsBox;