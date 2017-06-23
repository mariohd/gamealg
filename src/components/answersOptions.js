import React, { Component } from 'react';
import AnswerOption from './answerOption';

class AnswersOptions extends Component {
	render() {
		let answers = this.props.values.map((value) => <AnswerOption onClick={this.props.onAnswerClicked } value={value } />);

		return (
			<div className="answers options">
				{answers }
			</div>
		);
	}
}

export default AnswersOptions;
