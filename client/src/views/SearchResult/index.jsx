import React, { useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import Container from '@material-ui/core/Container';
import Breadcrumb from '../../components/Breadcrumb';
import Product from '../../components/Product';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { getQueryResult } from '../../actions';
import { makeGetResult, getCategories, getFetchStatus } from '../../selectors';

const SearchResult = ({ getQueryResult, result, match, location, categories, isFetching }) => {
    const query = location.search.split('=')[1];

    useEffect(() => {
        getQueryResult(query);
        // eslint-disable-next-line
    }, [match.params]);

    return (
        <div>
            <Header />
            { !isFetching &&
                <Container maxWidth="lg">
                    <Breadcrumb categories={categories} />
                    { result && result.items.map((product, index) => (
                        <Fragment key={index}>
                            <Product item={product} />
                            { result.items.length - 1 !== index ?
                                <Divider component="li" /> : null
                            }
                        </Fragment>
                    ))}
                </Container>
            }
        </div>
    );
};

const makeMapStateToProps = () => {
    const getResult = makeGetResult();

    return (state) => ({
        result: getResult(state),
        categories: getCategories(state),
        isFetching: getFetchStatus(state)
    });
};

const mapDispatchToProps = {
    getQueryResult
};

export default connect(makeMapStateToProps, mapDispatchToProps)(SearchResult);