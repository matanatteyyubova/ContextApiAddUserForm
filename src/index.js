import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../src/assets/sass/style.css";
import App from './components/App';
import {UserProvider} from './components/context'





ReactDOM.render(<UserProvider> <App /></UserProvider>,document.getElementById('root'));


