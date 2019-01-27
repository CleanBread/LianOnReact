import React, { Component } from 'react';
import './navItem.sass';
import { Link } from 'react-router-dom'

class NavItem extends Component {
    render() {
        return (
            <>
                <ul className="list">
                    <li className="active">
                        <span className="line"></span>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavItem;