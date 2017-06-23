import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import stages from './questions';
import './css/index.css';

ReactDOM.render(<App questions={stages }/>, document.getElementById('root'));
registerServiceWorker();
