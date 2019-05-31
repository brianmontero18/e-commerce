import 'regenerator-runtime/runtime';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actions';
import { GET_QUERY_RESULT, } from '../appconstants';
import { getQueryResult } from '../api';

function* getQueryResult(action) {
    try {
        const result = yield call(getQueryResult, action.query);
        yield put(Actions.getQueryResultSuccess(result));
    } catch(error) {
        yield put(Actions.getQueryResultsFail(error));
    }
}

export default function* () {
    yield all([
        takeLatest(GET_QUERY_RESULT, getQueryResult)
    ]);
}
