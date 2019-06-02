import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import query from './query';

export default (history) => combineReducers({
    query,
    router: connectRouter(history)
});