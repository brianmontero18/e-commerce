import React from 'react';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    input: {
        marginLeft: '10px',
        width: '93%'
    }
}));

const SearchBox = ({ className, value, onChange }) => {

    const onKeyPress = (event) => {
        if(event.key === 'Enter') {
            window.location.href = `/items?search=${value}`;
        }
    };
    const classes = useStyles();
    
    return (
        <div className={className}>
            <Input
                placeholder="Nunca dejes de buscar"
                classes={{ root: classes.input }}
                inputProps={{ 'aria-label': 'Description'}}
                onChange={(event) => onChange(event.target.value)}
                onKeyPress={onKeyPress}
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
