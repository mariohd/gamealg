import React, { Component } from 'react';
import Result from '../database/result';

class ResultDAO extends Component {
	constructor(props) {
		super(props);
		this.state = { step: 'start' };
	}

	componentDidMount() {
		this.startToUpload();
	}

	updateStep(step) {
		this.setState({
			step
		});
	}

	startToUpload() {
		let resultConnection = new Result();
		this.updateStep('saving');

		resultConnection.save({ result: this.props.history, elapsedTime: this.props.history.elapsedTime }, {
			success: (savedHistory) => {
				this.updateStep('ended');
				console.log(`New object created with objectId: ${savedHistory.id}`);
				this.props.onFinish();
			},
			error: (obj, err) => {
				this.updateStep(err.code);
				console.log(`Failed to create new object, with error code: ${err.code}`);
			}
		});
	}
	
	render() {
		let message = "";
		switch (this.state.step) {
			case 'start':
				message = "Iniciando salvamento..."; 
				break;
			case 'saving':
				message = "Salvando...Não saia da página"; 
				break;
			case 'ended':
				message = "Salvo com sucesso";
				break;
			default:
				message = `Algo deu errado! Step: ${this.state.step}`;
		}
		return (
			<div className="statement text-center">
				<img className="loading" src="/assets/img/loading.gif" alt="Carregando..."/>
				<div className="text">{message}</div>
			</div>
		);
	}
}

export default ResultDAO;