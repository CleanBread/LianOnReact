import React, { Component } from 'react';
import './app.sass';

import Header from './components/header/Header';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
            </div>
        );
    }
}

export default App;