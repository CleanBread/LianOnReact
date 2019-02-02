import React, { Component } from 'react';
import './navItem.sass';
import { NavLink as Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return (
            <>
                <ul className="list">
                    <li>
                        <span className="line"></span>
                        <Link exact to="/" activeClassName="active">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName="active">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName="active">CONTACT</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavItem;