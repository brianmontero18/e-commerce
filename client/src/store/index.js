import rootReducer from 'reducers';
import { hashHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    [],
    applyMiddleware(
        sagaMiddleware,
        routerMiddleware(hashHistory)
    )
);

export default store;