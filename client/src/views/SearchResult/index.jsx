import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Breadcrumb from '../../components/Breadcrumb';
import Product from '../../components/Product';
import { connect } from 'react-redux';
import { getQueryResult } from '../../actions';
import { makeGetResult } from '../../selectors';

const SearchResult = ({ getQueryResult, result, match, location }) => {
    const query = location.search.split('=')[1];

    useEffect(() => {
        getQueryResult(query);
        // eslint-disable-next-line
    }, [getQueryResult || match.params]);

    const [searchValue, setSearchValue] = useState(query.split('%20').join(' '));

    return (
        <div>
            <SearchBox value={searchValue} onChange={(value) => setSearchValue(value)}/>
            <Breadcrumb categories={result ? result.categories : []} />
            <div>
                { result && result.items.map((product, index) => (
                    <Product key={index} item={product} />
                ))}
            </div>
        </div>
    );
};

const makeMapStateToProps = () => {
    const getResult = makeGetResult();

    return (state) => ({
        result: getResult(state)
    });
};

const mapDispatchToProps = {
    getQueryResult
};

export default connect(makeMapStateToProps, mapDispatchToProps)(SearchResult);