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
			options: []
		};
	}

	render() {
		return (
			<div className="question">
				<Statement text="Resolva a equação abaixo" />
				<div className="body">
					<DecimalNumber value={this.props.operand_1} />
					<Operator value={this.props.operation.symbol} />
					<DecimalNumber value={this.props.operand_2} />
					<AnswersOptions onAnswerClicked={this.props.onAnswerClicked } values={this.props.options } />
				</div>
			</div>
		);
	}
}

export default Question;