import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import hola from './hola';

export default (history) => combineReducers({
    hola,
    router: connectRouter(history)
});