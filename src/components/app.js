import React, { Component } from 'react';
import Question from './question';
import '../css/app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 0,
			questions: props.questions,
			history: {}
		};
	}

	nextTurn(answerClicked) {
		const question = this.state.questions[this.state.turn];
		this.setState({
			turn: this.state.turn + 1,
			history: { ...this.state.history, [this.state.turn]: question.answer === answerClicked }
		});
	}

	createQuestionsComponent() {
		return this.state.questions.map((question) => 
			<Question operand_1={question.operand_1 } 
						  operand_2={question.operand_2 } 
						  operation={question.operation }
						  options={question.options } 
						  onAnswerClicked={this.nextTurn.bind(this) } />
		); 
	}

	render() {
		let component = this.createQuestionsComponent()[this.state.turn] || <h1>{JSON.stringify(this.state.history) }</h1>
		return (
			<div className="board">
				{component }
			</div>
		);
	}
}

export default App;