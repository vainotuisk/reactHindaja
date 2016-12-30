import React, { Component } from 'react';
export default class Nupp extends Component {
  render(){
    return (
        <button className="nupp">
          {this.props.letter}
        </button>
      );
}
}
