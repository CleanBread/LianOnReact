import React, { Component } from 'react';
import './logo.sass';

import { NavLink as Link } from 'react-router-dom';
import logo from '../../img/logo.png'

class Logo extends Component {
    render() {
        return (
            <Link to="/">
                <img src={logo} alt="logo" className="logo"/>
            </Link>
        );
    }
}

export default Logo;