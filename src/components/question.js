import React, { Component } from 'react';
import DecimalNumber from './decimalNumber';
import Operator from './operator';
import Statement from './statement';
import AnswersOptions from './answersOptions';
import '../css/app.css';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			operand_1: parseInt((Math.random() * 100), 10),
			operand_2: parseInt((Math.random() * 100), 10),
			operation: '+',
			options: [10, 20, 30, 40]
		};
	}

	generateOptions() {

	}

	render() {
		return (
			<div className="question">
				<Statement text="Resolva a equação abaixo" />
				<div className="body">
					<DecimalNumber value={this.state.operand_1} />
					<Operator value={this.state.operation} />
					<DecimalNumber value={this.state.operand_2} />
					<AnswersOptions values={this.state.options } />
				</div>
			</div>
		);
	}
}

export default Question;