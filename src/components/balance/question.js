import React, { Component } from 'react';
import Statement from '../statement';
import BalancePlate from './balancePlate';
import AnswersOptions from '../qa/answersOptions';

class BalanceQuestion extends Component {
	render() {
		return (
			<div className="question balance">
				<Statement text={this.props.text} />
				<div className="body text-center">
					<BalancePlate placement="left" values={this.props.left} />
					<BalancePlate placement="right" values={this.props.right} />
					<img id="balance-img" src="assets/img/balance.svg" alt="balance" />
					<AnswersOptions onAnswerClicked={this.props.onAnswerClicked } values={this.props.options } />
				</div>
			</div>
		);
	}
}

export default BalanceQuestion;