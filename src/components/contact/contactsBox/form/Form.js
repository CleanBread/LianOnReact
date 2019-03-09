import React, { Component } from 'react';
import './form.sass';

import Input from './input/Input'
import TextArea from './textarea/TextArea'
import Button from '../../../button/Button'

class Form extends Component {
    render() {
        return (
            <div className="form-box">
                <form className="form" target="_blank" action="https://formspree.io/for.spam.from.fortfolio@gmail.com" method="POST">
                    <div className="form__inputs">
                        <Input type="text" placeholder="Name" name="name"/>
                        <Input type="email" placeholder="Email" name="email"/>
                    </div>
                    <TextArea placeholder="Message"/>
                    <div className="form__btn">
                        <Button text="Send Message"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;