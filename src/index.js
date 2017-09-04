import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Main';
import './common/js/flexible';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();