import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    const [input, setInput] = useState(0);

    const onChange = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    };

    const onSubmit = (event) => {
        console.log('dispatch', input);
    };
    
    return (
        <div>
            <Input
                placeholder="Nunca dejes de buscar"
                // className={}
                inputProps={{ 'aria-label': 'Description'}}
                onChange={onChange}
            />
            <IconButton aria-label="Search" onClick={onSubmit}>
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default Search;