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
			start: +new Date(),
			lastStageStartedAt: +new Date(),
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
		stageHistory.elapsedTime = (+new Date() - this.state.lastStageStartedAt);
		let history = [...this.state.history, stageHistory];

		if (this.state.stage + 1 === this.state.stages.length) {
			history.elapsedTime = (+new Date() - this.state.start);

			this.setState({
				ended: true,
				history
			});
		} else {
			this.setState({
				lastStageStartedAt: +new Date(),
				stage: this.state.stage + 1,
				history
			});
		}
	}

	render() {
		let toRender = [];

		if (this.state.ended) {
			toRender.push(<Statistics key={0} result={this.state.history} />)
			toRender.push(<div key={1} className="button restart text-center" onClick={() => this.setInitialState() }>Recomeçar</div>);
		} else {
			toRender.push(this.state.stages[this.state.stage]);
		}

		return (
			<div className="board">	
				{ toRender }
			</div>
		);
	}

	_toStage(context, stage, key) {
		return (<Stage type={stage.type || "QA"} questions={stage.questions } intro={stage.intro} next={this.nextStage.bind(this) } key={key } />);
	}
}

export default App;