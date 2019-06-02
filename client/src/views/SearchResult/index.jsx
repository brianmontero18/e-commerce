import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import Breadcrumb from '../../components/Breadcrumb';
import Product from '../../components/Product';
import { connect } from 'react-redux';
import { getQueryResult } from '../../actions';

const SearchResult = ({ getQueryResult, result, location }) => {
    const query = location.search.split('=')[1];

    useEffect(() => {
        getQueryResult(query);
        // eslint-disable-next-line
    }, [getQueryResult]);

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

const mapStateToProps = (state) => ({
    result: state.hola.result
});

const mapDispatchToProps = {
    getQueryResult
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);