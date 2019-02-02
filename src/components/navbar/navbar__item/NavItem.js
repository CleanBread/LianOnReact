import React, { Component } from 'react';
import './navItem.sass';
import { NavLink as Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return (
            <>
            <li>
                <span className={this.props.span}></span>
                <Link exact={this.props.exact} to={this.props.to} activeClassName="active">{this.props.name}</Link>
            </li>
            </>
        );
    }
}

export default NavItem;