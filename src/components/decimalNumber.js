import React, { Component } from 'react';
import '../css/decimalNumber.css';

class DecimalNumber extends Component {
  render() {
    return (
      <div className="number">
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}

export default DecimalNumber;
