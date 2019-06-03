import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSearchParams } from '../../selectors';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../logo.png';
import SearchBox from '../../components/SearchBox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    colorPrimary: {
        color: "#fff",
        backgroundColor: "#fff159"
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    search: {
        backgroundColor: '#ffffff',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '75%',
        },
    },
    logo: {
        height: '34px',
        top: '11px',
        width: '134px'
    }
}));

const Header = ({ searchParams }) => {
    const [searchValue, setSearchValue] = useState(searchParams);
    const classes = useStyles();

    return (
        <AppBar className={classes.grow} classes={{ colorPrimary: classes.colorPrimary }}position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <img src={logo} className={classes.logo} alt="Logo" />
                    <SearchBox className={classes.search} value={searchValue} onChange={(value) => setSearchValue(value)}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

// export default Header;
const mapStateToProps = (state) => ({
    searchParams: getSearchParams(state)
});

export default connect(mapStateToProps, null)(Header);
