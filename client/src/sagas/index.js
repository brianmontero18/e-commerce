import 'regenerator-runtime/runtime';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../actions';
import * as Types from '../appconstants';
import { fetchApi } from '../api';

function* getQueryResult(action) {
    try {
        const result = yield call(fetchApi, '/testApi?q=', action.query);
        yield put(Actions.getQueryResultSuccess(result));
    } catch(error) {
        yield put(Actions.getQueryResultFail(error));
    }
}

function* getProductDetail(action) {
    try {
        const result = yield call(fetchApi, '/testApi/items/', action.id);
        yield put(Actions.getProductDetailSuccess(result));
    } catch(error) {
        yield put(Actions.getQueryResultFail(error));
    }
}

export default function* () {
    yield all([
        takeLatest(Types.GET_QUERY_RESULT, getQueryResult),
        takeLatest(Types.GET_PRODUCT_DETAIL, getProductDetail)
    ]);
}
