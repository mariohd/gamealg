import React, { Component } from 'react';
import Statement from '../statement';
import DecimalNumber from '../decimalNumber';
import Operator from '../operator';
import AnswersOptions from '../answersOptions';

class StageOneQuestion extends Component {
	render() {
		return (
			<div className="question">
				<Statement text="Responda sobre a afirmação abaixo" />
				<div className="body">
					<DecimalNumber value={this.props.operand_1 } />
					<Operator value={this.props.operation.symbol } />
					<DecimalNumber value={this.props.operand_2 } />
					<Operator value="=" />
					<DecimalNumber value={this.props.result } />
					<AnswersOptions onAnswerClicked={this.props.onAnswerClicked } values={this.props.options } />
				</div>
			</div>
		);
	}
}

export default StageOneQuestion;