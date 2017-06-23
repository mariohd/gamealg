import React, { Component } from 'react';
import StageOneQuestion from './stageOne/stageOneQuestion';
import StageTwoQuestion from './stageTwo/stageTwoQuestion';
import '../css/app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 0,
			stage: 0,
			questions: props.questions,
			history: []
		};
	}

	nextTurn(answerClicked) {
		const question = this.state.questions[this.state.stage][this.state.turn];

		let stage = this.state.stage;
		let turn = this.state.turn;
		let history = this.state.history;

		if (history[this.state.stage] === undefined) {
			history[this.state.stage] = [];
		}

		history[this.state.stage][this.state.turn] = answerClicked === question.answer;

		if (this.state.turn + 1 === this.state.questions[this.state.stage].length) {
			stage = stage + 1;
			turn = 0;
			history[stage] = [];
		} else {
			turn += 1;
		}

		this.setState({
			turn,
			stage,
			history
		});
	}

	createQuestionsComponent() {
		switch(this.state.stage) {
			case 0:
				return this.state.questions[0].map((question) => 
					<StageOneQuestion operand_1={question.operand_1 }
								  operand_2={question.operand_2 } 
								  operation={question.operation }
								  result={question.result }
								  options={question.options } 
								  onAnswerClicked={this.nextTurn.bind(this) } />
				);
			case 1:
				return this.state.questions[1].map((question) => 
					<StageTwoQuestion operand_1={question.operand_1 }
								  operand_2={question.operand_2 } 
								  operation={question.operation }
								  options={question.options } 
								  onAnswerClicked={this.nextTurn.bind(this) } />
				);
			default:
				return [<h1>{JSON.stringify(this.state.history) }</h1>];
		}
	}

	render() {
		let component = this.createQuestionsComponent()[this.state.turn];
		return (
			<div className="board">
				{component }
			</div>
		);
	}
}

export default App;