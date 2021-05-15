import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import axiosSetupGlobalConfig from 'utils/axiosConfig';

axiosSetupGlobalConfig();
ReactDOM.render(<App />, document.getElementById('root'));
