import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Index from './ReactReduxDumy/index'
// import Index from './ReactReduxDumy/indexImprove1'
// import Index from './ReactRedux/index'
import Index from './AGallery'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



