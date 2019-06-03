import { createSelectorCreator, defaultMemoize } from 'reselect';
import { isEqual } from 'lodash';

const createDeepSelector = createSelectorCreator(
    defaultMemoize,
    isEqual
);

export const isFetching = (state) => state.query.isFetching;
export const getResult = (state) => state.query.result;
export const getProductInfo = (state) => state.query.productDetail;
export const getFetchStatus = (state) => state.query.isFetching;

export const getCategories = (state) => {
    if(state.query.result) {
        return state.query.result.categories
    } else {
        return ['Otros', 'Otros Productos']
    }
};
export const getSearchParams = (state) => {
    if(state.router.location.search) {
        return state.router.location.search.split('=')[1].split('%20').join(' ')
    } else {
        return '';
    }
};

export const makeGetResult = () => createDeepSelector(
    getResult,
    result => result
);