import createReducer from './util';

const initialState = {
    result: null,
    isFetching: false,
    productDetail: null,
    error: null
};

const getQueryResult = (state) => {
    return {
        ...state,
        isFetching: true
    }
};
const getProductDetail = (state) => {
    return {
        ...state,
        isFetching: true
    }
};
const getQueryResultSuccess = (state, action) => {
    return {
        ...state,
        isFetching: false,
        result: action.result
    }
};
const getProductDetailSuccess = (state, action) => {
    return {
        ...state,
        isFetching: false,
        productDetail: action.result.item
    }
};
const getQueryResultFail = (state, action) => {
    return {
        ...state,
        isFetching: false,
        error: action.error
    }
};

export default createReducer(initialState, {
    GET_QUERY_RESULT: getQueryResult,
    GET_PRODUCT_DETAIL: getProductDetail,
    GET_QUERY_RESULT_SUCCESS: getQueryResultSuccess,
    GET_PRODUCT_DETAIL_SUCCESS: getProductDetailSuccess,
    GET_QUERY_RESULT_FAIL: getQueryResultFail
});