import React, { Component } from 'react';
export default class Nupp extends Component {
  render(){
    return (
        <button className="Nupp">
          {this.props.letter}
        </button>
      );
}
}
