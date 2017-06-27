import React, { Component } from 'react';
import Question from './stageOne/question';
import Statistics from './statistics';
import '../css/app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState(props);
	}

	getInitialState(props) {
		return {
			turn: 0,
			stage: 0,
			ended: false,
			questions: props.questions,
			history: []
		};
	}

	setInitialState() {
		this.setState(this.getInitialState(this.props));
	}

	nextTurn(answerClicked) {
		const question = this.state.questions[this.state.stage][this.state.turn];

		let stage = this.state.stage;
		let turn = this.state.turn;
		let history = this.state.history;
		let ended = this.state.ended;

		if (history[this.state.stage] === undefined) {
			history[this.state.stage] = [];
		}

		history[this.state.stage][this.state.turn] = answerClicked === question.answer;

		if (this.state.turn + 1 === this.state.questions[this.state.stage].length) {
			stage = stage + 1;
			turn = 0;
			if (stage >= this.state.questions.length) {
				ended = true;
			} else {
				history[stage] = [];
			}
		} else {
			turn += 1;
		}


		this.setState({
			turn,
			stage,
			ended,
			history
		});
	}

	createQuestionsComponent() {
		let questions = this.state.questions[this.state.stage];
		switch (true) {
			case (! this.state.ended): 
				return questions.map((q) => <Question operand_1={q.operand_1 }
													  operand_2={q.operand_2 }
													  operation={q.operation }
													  result={q.result } 
													  options={q.options } 
													  onAnswerClicked={this.nextTurn.bind(this) } />);
			default:
				return [
					<Statistics result={this.state.history} />
				];
		}
	}

	render() {
		let component = this.createQuestionsComponent()[this.state.turn];
		let button = this.state.ended ? <div className="restart text-center" onClick={() => this.setInitialState() }>Recomeçar</div> : '';
		return (
			<div className="board">
				{component }
				{button }
			</div>
		);
	}
}

export default App;