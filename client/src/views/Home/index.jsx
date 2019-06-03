import React from 'react';
import Header from '../../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Home = () => {
    return (
        <div>
            <Header />
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Home;