import React, { Component } from 'react';
export default class Nupp extends Component {
	render(){
		return (
        <button className="Nupp" onClick={this.props.onClick} data-letter={this.props.letter} data-value={this.props.value}>
          {this.props.letter}
        </button>
		);
	}
}
