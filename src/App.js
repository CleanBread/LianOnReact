import React, { Component } from 'react';
import './app.sass';

import Content from './content/Content'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;