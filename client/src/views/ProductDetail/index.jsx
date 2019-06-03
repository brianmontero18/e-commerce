import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Container from '@material-ui/core/Container';
import Breadcrumb from '../../components/Breadcrumb';
import Button from '@material-ui/core/Button';
import { getProductDetail } from '../../actions';
import { getProductInfo, getCategories, getFetchStatus } from '../../selectors';
import { makeStyles } from '@material-ui/core/styles';
import { getCurrencySymbol, getNumberFormated } from '../../utils/currency';

const useStyles = makeStyles((theme) => ({
    infoSubContainer: {
        display: 'inline-block',
        width: '40%',
        marginLeft: 'auto'
    },
    title: {
        fontSize: '26px',
        lineHeight: 1,
        fontWeight: '600',
        textOverflow: 'ellipsis'
    },
    condition: {
        fontSize: '14px',
        color: '#666'
    },
    image: {
        paddingTop: '32px',
        margin: 'auto'
    },
    infoContainer: {
        display: 'flex',
        position: 'relative'
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
    buyButton: {
        display: 'block',
        width: '200px',
        marginTop: '55px'
    },
    product: {
        backgroundColor: '#fff',
        padding: '32px'
    },
    productDescription: {
        fontWeight: '600',
        fontSize: '24px',
        marginBottom: '32px',
        lineHeight: '1'
    }
}));

const ProductDetail = ({ getProductDetail, match, product, categories, isFetching }) => {
    
    const classes = useStyles();

    useEffect(() => {
        getProductDetail(match.params.id);
        // eslint-disable-next-line
    }, [getProductDetail]);

    return (
        <div>
            <Header />
            <Container maxWidth="lg">
                <Breadcrumb categories={categories} />
                { product && !isFetching &&
                    <div className={classes.product} >
                        <div className={classes.infoContainer}>
                            <img className={classes.image} src={product.picture} alt="Smiley face" height="340" width="500" />
                            <div className={classes.infoSubContainer}>
                                <span className={classes.condition}>{`${product.condition} - ${product.sold_quantity} vendidos`}</span><br/>
                                <h1 className={classes.title}>{product.title}</h1>
                                <div style={{ display: 'inline-block', width: '93px' }}>
                                    <span className={classes.price}>{getCurrencySymbol(product.price.currency)}</span>
                                    <span className={classes.price}>{getNumberFormated(product.price.amount)}</span>
                                    <span className={classes.priceDecimals}>{product.price.decimals !== 0 ? product.price.decimals : '00'}</span>
                                </div>
                                <Button className={classes.buyButton} variant="contained" size="large" color="primary">Comprar</Button>
                            </div>
                        </div>
                        <div>
                            <h2 className={classes.productDescription}>Descripción del Producto</h2>
                            <span>{product.description}</span>
                        </div>
                    </div>
                }
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => ({
    product: getProductInfo(state),
    categories: getCategories(state),
    isFetching: getFetchStatus(state)
});

const mapDispatchToProps = {
    getProductDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);