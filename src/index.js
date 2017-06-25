/**
 * Expense Tracker
 * index.js
 * Ryan Isler - 2017
 *
 * This application accounts for all of your expensing needs.
 * Enter in your product name, and price and see a total
 * price.
 */
 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
