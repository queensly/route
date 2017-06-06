require('bootstrap/dist/css/bootstrap.css');
import React from 'react';
import ReactDOM from 'react-dom';
import MessageBox from './component/MessageBox.js';
import model from './local.js';
// import model from './remote.js';
ReactDOM.render(<MessageBox model={model}/>,app);

