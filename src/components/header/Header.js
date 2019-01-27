import React, { Component } from 'react';
import './header.sass';

import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__container">
                    <Logo/>
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Header;