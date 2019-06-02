import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import { connect } from 'react-redux';
import { getProductDetail } from '../../actions';
import { getProductInfo } from '../../selectors';


const ProductDetail = ({ getProductDetail, match, product }) => {
    useEffect(() => {
        getProductDetail(match.params.id);
        // eslint-disable-next-line
    }, [getProductDetail]);

    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <SearchBox value={searchValue} onChange={(value) => setSearchValue(value)}/>
            { product &&
                <div>
                    <img src={product.picture} alt="Smiley face" height="42" width="42" /><br/>
                    <span>{`${product.condition}-${product.sold_quantity}`}</span><br/>
                    <span>{product.title}</span><br/>
                        <span>{product.price.currency}</span>
                        <span>{product.price.amount}</span><br/>
                    <span>Descripción del Producto</span><br/>
                    <span>{product.description}</span><br/>
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: getProductInfo(state)
});

const mapDispatchToProps = {
    getProductDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);