import { combineReducers } from 'redux';
import { GET_QUERY_RESULT, } from '../appconstants';
import hola from './hola';
import createReducer from './util';

export default combineReducers({
    hola
});