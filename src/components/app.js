import React, { Component } from 'react';
import StageOneQuestion from './stageOne/stageOneQuestion';
import StageTwoQuestion from './stageTwo/stageTwoQuestion';
import '../css/app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			turn: 0,
			stage: 1,
			questions: props.questions,
			history: {1: {}, 2: {}}
		};
	}

	nextTurn(answerClicked) {
		const question = this.state.questions[`${this.state.stage}`][this.state.turn];
		let stage = this.state.stage;
		let turn = this.state.turn;
		if (this.state.turn + 1 == this.state.questions[`${this.state.stage}`].length) {
			stage = stage + 1;
			turn = 0;
		} else {
			turn += 1;
		}

		let stageHistory = this.state.history[`${this.state.stage}`];
		stageHistory[this.state.turn] = question.answer === answerClicked;

		this.setState({
			turn,
			stage,
			history: { ...this.state.history, stageHistory}
		});
	}

	createQuestionsComponent() {
		switch(this.state.stage) {
			case 1:
				return this.state.questions['1'].map((question) => 
					<StageOneQuestion operand_1={question.operand_1 }
								  operand_2={question.operand_2 } 
								  operation={question.operation }
								  result={question.result }
								  options={question.options } 
								  onAnswerClicked={this.nextTurn.bind(this) } />
				);
			case 2:
				return this.state.questions['2'].map((question) => 
					<StageTwoQuestion operand_1={question.operand_1 }
								  operand_2={question.operand_2 } 
								  operation={question.operation }
								  options={question.options } 
								  onAnswerClicked={this.nextTurn.bind(this) } />
				);
			default:
				console.log(this.state.history);
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