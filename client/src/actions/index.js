import * as Types from '../types';

export const getQueryResult = (query) => ({
    type: Types.GET_QUERY_RESULT, query
});

export const getProductDetail = (id) => ({
    type: Types.GET_PRODUCT_DETAIL, id
});

export const getQueryResultSuccess = (result) => ({
    type: Types.GET_QUERY_RESULT_SUCCESS, result
});

export const getProductDetailSuccess = (result) => ({
    type: Types.GET_PRODUCT_DETAIL_SUCCESS, result
});

export const getQueryResultFail = (error) => ({
    type: Types.GET_QUERY_RESULT_FAIL, error
});
