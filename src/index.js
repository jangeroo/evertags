import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.get('/tags').then(response => {
  ReactDOM.render(<App tags={response.data} />, document.getElementById('root'));
  registerServiceWorker();
})
