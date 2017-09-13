import React, { Component } from 'react';

class Statement extends Component {
  render() {
    return (
      <div className="statement text-center">
      	<div className="text">{this.props.text}</div>
      </div>
    );
  }
}

export default Statement;