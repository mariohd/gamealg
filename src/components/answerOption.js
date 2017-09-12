import React, { Component } from 'react';
import { i18n } from '../utils/utils';


class AnswerOption extends Component {
	render() {
		return (
			<div onClick={() => this.props.onClick(this.props.value)} className="answer option">
				{ `${i18n(this.props.value)}` }
			</div>
		);
	}
}

export default AnswerOption;
