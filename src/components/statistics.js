import React, { Component } from 'react';

class Statistics extends Component {
	constructor(props) {
		super(props);
		this.state = { showResults: false };
	}

	toggleViewResults() {
		this.setState({
			showResults: !this.state.showResults
		})
	}

	render() {
		const renderStageStatistics = (stage, index) => {
			return [<div key="index" className="index">Fase {index + 1}</div>, 
					...stage.map(
						(s, index) => <div key={index } className={s}>Questão {index + 1}: {s? `acertou` : `errou` }</div>
					), 
					<div key="stats" className="stageStats">{stage.reduce((p, a) => p + a, 0)}/{stage.length } de acertos</div>]; 
		}

		let stages = this.props.result
			.filter((s) => s.length)
			.map(renderStageStatistics)
			.map((s, index) => <div key={index } className="stage">{s}</div>);

		return (
			<div className="statistics text-center">
				<div>
					<div className="results" onClick={ () => this.toggleViewResults() }>{this.state.showResults ? "Esconder resultados": "Exibir resultados"}</div>
					{ this.state.showResults ? <span id="stage-results">{stages }</span> : '' }
				</div>
			</div>
		);
	}
}

export default Statistics;