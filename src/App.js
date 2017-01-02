import React, { Component } from 'react';
import Header from './header';
import Nupp from './nupp';
import Nuppe from './nuppe';
import Tabloo from './tabloo';
import Keskmine from './tabloo2';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state={ summa: 0, hinded: [] };
	}
	handleClick(e) {
		var value=e.target.getAttribute('data-value');
		var letter=e.target.getAttribute('data-letter');
		console.log(value);
		this.setState({summa: 11});
		this.setState({hinded: this.state.hinded.concat(letter)});
//		this.setState({hinded: hinded+'AB'});
		console.log(this.state.summa);
		console.log('hinded:' + this.state.hinded);
		console.log('letter:' + letter);
	}
	removeItem() {
		this.setState({
//			hinded: this.state.hinded.pop()
			hinded: this.state.hinded.filter((_, i) => i !== this.state.hinded.length-1)

		});
	}

	render() {
		return (
      <div className="App">
        <Header />
        <Tabloo hinded={this.state.hinded}/>

        <div>
          <Nupp onClick={this.handleClick.bind(this)} value="6" letter='A'/>
          <Nupp onClick={this.handleClick.bind(this)} value="5" letter='B'/>
          <Nupp onClick={this.handleClick.bind(this)} value="4" letter='C'/>
          <Nupp onClick={this.handleClick.bind(this)} value="3" letter='D'/>
          <Nupp onClick={this.handleClick.bind(this)} value="2" letter='E'/>
          <Nupp onClick={this.handleClick.bind(this)} value="1" letter='F'/>
        </div>
        <Keskmine />
        <Nuppe letter='X'/>
				<Nuppe letter='<' onClick={this.removeItem.bind(this)}/>
        <Nuppe letter='?'></Nuppe>


      </div>
		);
	}
}

export default App;
