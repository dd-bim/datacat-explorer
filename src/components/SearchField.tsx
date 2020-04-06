import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface SearchFieldProps {
  loading?: boolean;
}

export default function SearchField(props: TextFieldProps & SearchFieldProps) {
  const {
    loading = false,
    InputProps,
    ...otherProps
  } = props;

    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
                endAdornment: loading ? <CircularProgress color="inherit" size={20} /> : null,
                ...InputProps,
            }}
            {...otherProps}
        />
    );
}
