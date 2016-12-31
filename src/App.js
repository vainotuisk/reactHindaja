import React, { Component } from 'react';
import Header from './header';
import Nupp from './nupp';
import Nuppe from './nuppe';
import Tabloo from './tabloo';
import Keskmine from './tabloo2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tabloo />

        <div>
          <Nupp onClick={this.handleClick} value="6" letter='A'/>
          <Nupp letter='B'/>
          <Nupp letter='C'/>
          <Nupp letter='D'/>
          <Nupp letter='E'/>
          <Nupp letter='F'/>
        </div>
        <Keskmine />
        <Nuppe letter='X'/>
        <Nuppe letter='?'/>
      </div>
    );
  }
}

export default App;
