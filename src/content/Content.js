import React, { Component } from 'react';
import './content.sass';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/home/Home'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Project from '../components/project/Project'

class Content extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/about" exact component={ About } />
                        <Route path="/contact" exact component={ Contact } />
                        <Route path="/portfolio/:number" exact component={ Project } />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Content;