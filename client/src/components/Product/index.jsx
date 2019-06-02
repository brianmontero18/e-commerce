import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item, match }) => {
    return (
        <div>
            <Link to={`/items/${item.id}`}>
                <span>{item.title}</span>
            </Link><br/>
            <span>{item.price.amount}</span><br/>
            <Link to={`/items/${item.id}`}>
                <img src={item.picture} alt="Smiley face" height="42" width="42"/>
            </Link><br/>
            <span>{item.free_shipping}</span><br/>
        </div>
    );
};

export default Product;