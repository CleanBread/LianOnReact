import React, { Component } from 'react';
import './form.sass';

import Input from './input/Input'
import TextArea from './textarea/TextArea'
import Button from '../../../button/Button'

class Form extends Component {
    render() {
        return (
            <div className="form-box">
                <form action="" className="form">
                    <div className="form__inputs">
                        <Input type="text" placeholder="Name"/>
                        <Input type="email" placeholder="Email"/>
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