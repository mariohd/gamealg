import React, { Component } from 'react';
import Question from './stageOne/question';

class Stage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 0,
			questions: props.questions.map((q) => this._toQuestion(this, q)),
			history: []
		};
	}

	nextTurn(answer) {
		const question = this.props.questions[this.state.turn];

		let turn = this.state.turn;
		turn += 1;

		if (turn >= this.state.questions.length) {
			let history = [...this.state.history, question.answer === answer];
			this.setState({
				history
			});
			this.props.next(history);
		} else {
			this.setState({
				turn,
				history: [...this.state.history, question.answer === answer]
			});
		}
	}

	render() {
		return (
			this.state.questions[this.state.turn]
		);
	}

	getHistory() {
		return this.state.history;
	}

	_toQuestion(context, question) {
		return <Question text={question.statement}
			operand_1={question.operand_1 }
			operand_2={question.operand_2 }
			operation={question.operation }
			result={question.result } 
			options={question.options } 
			onAnswerClicked={ context.nextTurn.bind(context) } />
	}
}

export default Stage;