import React, { Component } from 'react';

class AnswerOption extends Component {
	render() {
		return (
			<div className="answer option">
				{this.props.value }
			</div>
		);
	}
}

export default AnswerOption;
