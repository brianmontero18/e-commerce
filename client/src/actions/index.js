import { GET_QUERY_RESULT, } from '../appconstants';

export const getQueryResult = (query) => ({
    type: GET_QUERY_RESULT, query
});
