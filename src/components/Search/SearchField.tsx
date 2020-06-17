import TextField, {TextFieldProps} from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export type SearchFieldProps = {
    loading?: boolean
} & TextFieldProps;

export default function SearchField(props: SearchFieldProps) {
    const {loading, InputProps, ...otherProps} = props;
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: loading ? <CircularProgress color="inherit" size={20} /> : null,
                ...InputProps,
            }}
            {...otherProps}
        />
    );
}
