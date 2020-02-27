import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Form from './Form';

export default function SearchForm(props) {
    return (
        <Form>
            <TextField
                id="search-input"
                label={'Search'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
                {...props}
            />
        </Form>
    )
}
