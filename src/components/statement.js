import React, { Component } from 'react';

class Statement extends Component {
  render() {
    return (
      <div className="statement">
      	<div className="text">{this.props.text}</div>
      </div>
    );
  }
}

export default Statement;