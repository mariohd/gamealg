import React, { Component } from 'react';
import Stage from './stage';
import Statistics from './statistics';
import ResultDAO from './result';
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
			step: 'running',
			stage: 0,
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
				step: 'saving',
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

	saved() {
		this.setState({
			step: 'ended'
		});
	}

	render() {
		let toRender = [];
		switch (this.state.step) {
			case 'saving':
				toRender.push([<ResultDAO history={this.state.history} onFinish={() => this.saved() } />])
				break;
			case 'ended':
				toRender.push(
					(<div key={0} className="thanks text-center">
						<div>Fim</div>
						<div>Obrigado por participar</div>
					</div>));
				toRender.push(<Statistics key={1} result={this.state.history} />)
				toRender.push(<div key={2} className="button restart text-center" onClick={() => this.setInitialState() }>Recomeçar</div>);
				break;
			default:
				toRender.push(this.state.stages[this.state.stage]);
		}

		return (
			<div className="board">
				<input id="environment" type="hidden" value={process.env.NODE_ENV} />
				{ toRender }
			</div>
		);
	}

	_toStage(context, stage, key) {
		return (<Stage type={stage.type || "QA"} questions={stage.questions } intro={stage.intro} next={this.nextStage.bind(this) } key={key } />);
	}
}

export default App;