import React, { Component } from 'react';

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
