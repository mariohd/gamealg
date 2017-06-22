import React, { Component } from 'react';
import '../css/operator.css';

class Operator extends Component {
  render() {
    return (
      <div className="operator">
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}

export default Operator;
