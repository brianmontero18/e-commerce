import createReducer from './util';

const initialState = {
    result: null,
    isFetching: false,
    productDetail: null
};

const getQueryResult = (state) => {
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

export default createReducer(initialState, {
    GET_QUERY_RESULT: getQueryResult,
    GET_QUERY_RESULT_SUCCESS: getQueryResultSuccess,
    GET_PRODUCT_DETAIL_SUCCESS: getProductDetailSuccess
});