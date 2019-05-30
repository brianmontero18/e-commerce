import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Product from '../../components/Product';

const products = ["jaja", "dalee"];

const Main = () => {
    return (
        <div>
            <Breadcrumb />
            <div>
                { products && products.map(product => (
                    <Product item={product} />
                ))}
            </div>
        </div>
    );
};

export default Main;