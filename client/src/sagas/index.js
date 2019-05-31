import 'regenerator-runtime/runtime';
import { all, takeLatest, put } from 'redux-saga/effects';
import * as Actions from '../actions';
import { GET_QUERY_RESULT, } from '../appconstants';

function* getQueryResult() {
    yield put(Actions.getQueryResultSuccess)
}

export default function* () {
    yield all([
        takeLatest(GET_QUERY_RESULT, getQueryResult)
    ]);
}