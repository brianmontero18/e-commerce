import React, { useState } from 'react';
import SearchBox from '../../components/SearchBox';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <SearchBox value={searchValue} onChange={(value) => setSearchValue(value)}/>
            <span>BIENVENIDOS A MELI</span>
        </div>
    );
};

export default Home;