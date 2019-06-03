import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import { getCurrencySymbol, getNumberFormated } from '../../utils/currency';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        backgroundColor: '#ffffff',
        listStyleType: 'none',
        paddingTop: '21px',
        paddingBottom: '16px'
    },
    title: {
        textDecoration: 'none',
        display: 'block',
        paddingTop: '10px'
    },
    image: {
        margin: '10px 24px 0',
        textDecoration: 'none'
    },
    infoContainer: {
        marginBottom: 'auto',
        width: '70%'
    },
    price: {
        color: '#333',
        fontSize: '24px',
        lineHeight: '1.1'
    },
    priceDecimals: {
        fontSize: '12px',
        fontWeight: '600',
        height: '20px',
        left: '2px',
        lineHeight: '1',
        position: 'relative',
        top: '-8px'
    },
    freeShipping: {
        backgroundColor: '#00a650',
        color: '#fff',
        height: '19px',
        position: 'relative',
        top: '-8px',
        left: '20px'
    }
}));

const Product = ({ item, match }) => {

    const classes = useStyles();

    return (
        <div>
            <ListItem classes={{ container: classes.root }}>
                <ListItemAvatar>
                    <Link to={`/items/${item.id}`} className={classes.image}>
                        <img src={item.picture} alt='' height="100" width="100" />
                    </Link>
                </ListItemAvatar>
                <div className={classes.infoContainer}>
                    <div style={{ display: 'inline-block', width: '93px' }}>
                        <span className={classes.price}>{getCurrencySymbol(item.price.currency)}</span>
                        <span className={classes.price}>{getNumberFormated(item.price.amount)}</span>
                        <span className={classes.priceDecimals}>{item.price.decimals !== 0 ? item.price.decimals : '00'}</span>
                    </div>
                    {item.free_shipping ? 
                        <Chip label="Envío gratis" className={classes.freeShipping} /> : null
                    }
                    <Link to={`/items/${item.id}`} className={classes.title}>
                        <span>{item.title}</span>
                    </Link>
                </div>
                <ListItemSecondaryAction>
                    <span style={{ marginRight: '40px' }}>{item.address}</span>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
};

export default Product;