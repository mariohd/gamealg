import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import Parse from './database/parseConnection';
import Stage from './database/stage';
// import './database/seed';

var parseStage = new Stage();
var query = new Parse.Query(parseStage);

query.find({
	success: function(stages) {
		let parsedStages = stages.map(stage => {
			let intro = stage.get('intro');
			let questions = stage.get('questions');
			let level = stage.get('level');
            let type = stage.get('type');
			return {intro, questions, level, type};
		}).sort((a, b) => {
			return a.level > b.level;
		});

		ReactDOM.render(<App stages={ parsedStages }/>, document.getElementById('root'));
		registerServiceWorker();
	},
	error: function(object, error) {
		console.error(object, error);
	}
});