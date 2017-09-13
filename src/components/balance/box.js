import React, { Component } from 'react';

class Box extends Component {
  render() {
    return (
      <div className="box text-center">
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}

export default Box;