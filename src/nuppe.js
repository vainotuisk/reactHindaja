import React, { Component } from 'react';
export default class Nuppe extends Component {
	render(){
		return (
        <button className="Nuppe">
          {this.props.letter}
        </button>
		);
	}
}
