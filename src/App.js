import React, { Component } from 'react';
import Header from './header';
import Nupp from './nupp';
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
        <Nupp letter='A'/>
        <Nupp letter='B'/>
        <Nupp letter='C'/>
        <Nupp letter='D'/>
        <Nupp letter='E'/>
        <Nupp letter='F'/>
</div>
        <Keskmine />
      </div>
    );
  }
}

export default App;
