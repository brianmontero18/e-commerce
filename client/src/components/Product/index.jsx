import React from 'react';

const Product = (props) => {
    return (
        <div>
            <span>{props.image}</span>
            <span>{props.price}</span>
            <span>{props.description}</span>
            <span>{props.free_shipping}</span>
        </div>
    );
};

export default Product;