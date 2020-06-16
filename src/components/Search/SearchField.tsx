import TextField, {TextFieldProps} from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

export type SearchFieldProps = TextFieldProps;

export default function SearchField(props: SearchFieldProps) {
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            {...props}
        />
    )
}
