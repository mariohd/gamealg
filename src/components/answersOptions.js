import React, { Component } from 'react';
import AnswerOption from './answerOption';

class AnswersOptions extends Component {
	render() {
		return (
			<div className="answers options">
				<AnswerOption onClick={this.props.onAnswerClicked } value={this.props.values[0]} />
				<AnswerOption onClick={this.props.onAnswerClicked } value={this.props.values[1]} />
				<AnswerOption onClick={this.props.onAnswerClicked } value={this.props.values[2]} />
				<AnswerOption onClick={this.props.onAnswerClicked } value={this.props.values[3]} /> 
			</div>
		);
	}
}

export default AnswersOptions;
