import React, { Component } from 'react';
import Stage from './stage';
import Statistics from './statistics';
import '../css/app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState(props);
	}

	getInitialState(props) {
		return {
			stage: 0,
			ended: false,
			stages: props.stages.map((s, k) => this._toStage(this, s, k)),
			history: []
		};
	}

	setInitialState() {
		this.setState(this.getInitialState(this.props));
	}

	nextStage(stageHistory) {
		let history = [...this.state.history, stageHistory];

		if (this.state.stage + 1 === this.state.stages.length) {
			this.setState({
				ended: true,
				history
			});
		} else {
			this.setState({
				stage: this.state.stage + 1,
				history
			});
		}
	}

	render() {
		let toRender;

		if (this.state.ended) {
			toRender = <Statistics result={this.state.history} />
			// toRender = <div className="restart text-center" onClick={() => this.setInitialState() }>Recomeçar</div>;
		} else {
			toRender = this.state.stages[this.state.stage];
		}

		return (
			<div className="board">
				{ toRender }
			</div>
		);
	}

	_toStage(context, stage, key) {
		return (<Stage questions={stage.questions } next={this.nextStage.bind(this) } key={key } />);
	}
}

export default App;