import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function SearchField(props) {
    const {label = 'Search', value, loading = false, onChange, InputProps, ...otherProps} = props;

    return (
        <TextField
            id="search-term-input"
            label={label}
            value={value}
            onChange={onChange}
            {...otherProps}
            InputProps={{
                ...InputProps,
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <React.Fragment>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    </React.Fragment>
                ),
            }}
        />
    );
}

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
