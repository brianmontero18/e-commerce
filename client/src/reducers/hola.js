const initialState = {
    isFetching: false
};

const getQueryResult = (state) => ({
    ...state,
    isFetching: true
});

export default hola = createReducer(initialState, {
    GET_QUERY_RESULT: getQueryResult
});