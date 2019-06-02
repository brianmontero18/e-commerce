import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { sagaMiddleware, history } from './store';
import sagas from './sagas';
import * as serviceWorker from './serviceWorker';

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
