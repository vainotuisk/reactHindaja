import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header.js';
import Nupp from './nupp.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Nupp letter='A'/>
        <Nupp letter='B'/>
        <Nupp letter='C'/>
        <Nupp letter='D'/>
        <Nupp letter='E'/>
        <Nupp letter='F'/>
      </div>
    );
  }
}

export default App;
