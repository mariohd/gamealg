import React, { Component } from 'react';
import Question from './question';
import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="board">
        <Question />
      </div>
    );
  }
}

export default App;