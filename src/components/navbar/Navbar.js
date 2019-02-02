import React, { Component } from 'react';
import './navbar.sass';
import NavbarItem from './navbar__item/NavItem'

class Navbar extends Component {
    render() {
        return (
            <>
            <ul className="list">
                <NavbarItem exact to="/" name="HOME" span="line"/>
                <NavbarItem to="/about" name="ABOUT"/>
                <NavbarItem to="/contact" name="CONTACT"/>
            </ul>
            </>
        );
    }
}

export default Navbar;