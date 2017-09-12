import React, { Component } from 'react';

class Statistics extends Component {
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
			<div className="statistics">
				<div className="results">Resultados</div>
				{stages }
			</div>
		);
	}
}

export default Statistics;