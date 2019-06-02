import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';

const createDeepSelector = createSelectorCreator(
    defaultMemoize,
    isEqual
);

export const isFetching = (state) => state.query.isFetching;
export const getResult = (state) => state.query.result;
export const getProductInfo = (state) => state.query.productDetail;

export const makeGetResult = () => createDeepSelector(
    getResult,
    result => result
);