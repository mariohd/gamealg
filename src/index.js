import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

let stagesLoaded = ['https://quarkbackend.com/getfile/mariohd/stageone',
					'https://quarkbackend.com/getfile/mariohd/stagetwo',
					'https://quarkbackend.com/getfile/mariohd/stagethree'].map(stageURL => fetch(stageURL));

Promise.all(stagesLoaded).then(responses => {
	let parsedResponses = responses.map(r => r.json());

	Promise.all(parsedResponses).then(stages => {
		ReactDOM.render(<App questions={ stages.map(i => i.questions) }/>, document.getElementById('root'));
		registerServiceWorker();
	});
});
