import React from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const SearchBox = ({ value, onChange }) => {
    return (
        <div>
            <Input
                placeholder="Nunca dejes de buscar"
                // className={}
                inputProps={{ 'aria-label': 'Description'}}
                onChange={(event) => onChange(event.target.value)}
                value={value}
            />
            <Link to={`/items?search=${value}`}>
                <IconButton aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </Link>
        </div>
    );
};

export default SearchBox;
