import React, { Component } from 'react';
import Question from './stageOne/question';

class Stage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			this.turn = 0,
			this.ended = false,
			this.questions = props.questions.map(_toQuestion),
			this.history = []
		};
	}

	nextTurn(answer) {
		alert(1);
	}

	render() {
		if (this.state.ended) {
			return (<h1>acabou, como eu passo agora?</h1>);
		} else {
			return (
				this.state.questions[this.state.turn]
			);
		}
	}

	_toQuestion(question) {
		return <Question operand_1={question.operand_1 }
			operand_2={question.operand_2 }
			operation={question.operation }
			result={question.result } 
			options={question.options } 
			onAnswerClicked={this.nextTurn.bind(this) } />
	}
}

export default Stage;