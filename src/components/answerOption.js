import React, { Component } from 'react';

class AnswerOption extends Component {
	render() {
		return (
			<div onClick={() => this.props.onClick(this.props.value)} className="answer option">
				{this.props.value }
			</div>
		);
	}
}

export default AnswerOption;
