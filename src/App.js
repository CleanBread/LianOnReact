import React, { Component } from 'react';
import './app.sass';
import Content from './content/Content'

import Header from './components/header/Header';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;