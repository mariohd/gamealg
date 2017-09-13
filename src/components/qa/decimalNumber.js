import React, { Component } from 'react';

class DecimalNumber extends Component {
  render() {
    return (
      <div className="number text-center">
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}

export default DecimalNumber;
