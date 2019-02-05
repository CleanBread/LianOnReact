import React, { Component } from 'react';
import './content.sass';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/home/Home'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'

class Content extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/about" exact component={ About } />
                        <Route path="/contact" exact component={ Contact } />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Content;