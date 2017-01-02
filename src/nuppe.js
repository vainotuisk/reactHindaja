import React, { Component } from 'react';
export default class Nuppe extends Component {
	render(){
		return (
        <button className="Nuppe" onClick={this.props.onClick}>
          {this.props.letter}
        </button>
		);
	}
}
