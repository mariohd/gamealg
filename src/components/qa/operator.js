import React, { Component } from 'react';

class Operator extends Component {
  render() {
    return (
      <div className="operator text-center">
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}

export default Operator;
