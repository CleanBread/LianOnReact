import React, { Component } from 'react';
import './content.sass';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home'

class Content extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={ Home } />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Content;