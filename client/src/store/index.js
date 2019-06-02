import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createHistory from "history/createBrowserHistory";

export const history = createHistory();
export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer(history),
    applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        createLogger()
    )
);

export default store;