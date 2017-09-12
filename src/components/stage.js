import React, { Component } from 'react';
import Question from './qa/question';
import BalanceQuestion from './balance/question';


class Stage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			initiated: false,
			turn: 0,
			questions: props.questions.map((q) => this._toQuestion(this, q)),
			history: []
		};
	}

	nextTurn(answer) {
		const question = this.props.questions[this.state.turn];

		let turn = this.state.turn;
		turn += 1;
		let history = [...this.state.history, question.answer === answer];

		this.setState({
			turn,
			history,
		});

		if (turn >= this.state.questions.length) {
			this.props.next(history);
		}
	}

	onClickStart() {
		this.setState({
			initiated: true
		});
	}

	render() {
		if (this.state.initiated) {
			return (
				this.state.questions[this.state.turn]
			)
		} else {
			return (
				<div className="stage text-center" >
					<div dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
					<div className="start">
						<div className="button" onClick={() => this.onClickStart() }>Iniciar</div>
					</div>
				</div>
			)
		}
	}

	getHistory() {
		return this.state.history;
	}

	_toQuestion(context, question) {
		switch(this.props.type) {
			case "QA":
				return <Question text={question.statement}
					operand_1={question.operand_1 }
					operand_2={question.operand_2 }
					operation={question.operation }
					result={question.result } 
					options={question.options } 
					onAnswerClicked={ context.nextTurn.bind(context) } />
			case "BALANCE":
				return <BalanceQuestion text={question.statement}
					left={question.left }
					right={question.right }
					options={question.options } 
					onAnswerClicked={ context.nextTurn.bind(context) } />
			default:
				return null
		}
	}
}

export default Stage;