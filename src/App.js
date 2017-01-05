import React, { Component } from 'react';
import Header from './header';
import Nupp from './nupp';
import Nuppe from './nuppe';
import Tabloo from './tabloo';
import Keskmine from './tabloo2';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state={summa: 0, hinded: [] };
	}
	handleClick(e) {
		var value=parseInt(e.target.getAttribute('data-value'),10);
		var letter=e.target.getAttribute('data-letter');
		console.log('väärtus on:' + value);
		console.log('letter:' + letter);
		console.log('summa alguses on:'+ this.state.summa);
		this.setState((prevState,props) =>
		({
			summa: prevState.summa + value
		}));
		console.log('summa on:'+ this.state.summa);
		this.setState((prevState,props) =>
		({
			hinded: this.state.hinded.concat(letter)
		}));
		console.log('hinded:' + this.state.hinded);

		console.log('hindeid:'+ this.state.hinded.length);


	}
	removeItem() {
		this.setState({
//			hinded: this.state.hinded.pop()
			hinded: this.state.hinded.filter((_, i) => i !== this.state.hinded.length-1)

		});
	}
	clearItem() {
		this.setState({
	//			hinded: this.state.hinded.pop()
			hinded: this.state.hinded.filter((_, i) => i === this.state.hinded.length)

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
        <Nuppe letter='X' onClick={this.clearItem.bind(this)}/>
				<Nuppe letter='<' onClick={this.removeItem.bind(this)}/>
        <Nuppe letter='?'/>
      </div>
		);
	}
}

export default App;
