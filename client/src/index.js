import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import { Router, Rout, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import { syncHistoryWithStore } from 'react-router-redux';
import store, { sagaMiddleware } from './store';
import sagas from './sagas';
import * as serviceWorker from './serviceWorker';

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
