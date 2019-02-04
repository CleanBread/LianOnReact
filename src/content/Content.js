import React, { Component } from 'react';
import './content.sass';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/home/Home'
import About from '../components/about/About'

class Content extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/about" exact component={ About } />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Content;