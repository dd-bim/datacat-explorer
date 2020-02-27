import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchField(props) {
    const {value, onChange} = props;

    return (
        <TextField
            id="search-term-input"
            label="Search"
            value={value}
            onChange={onChange}
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
            }}
        />
    );
}

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
