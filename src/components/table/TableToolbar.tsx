import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import {TextFieldProps} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AddIconButton from "../buttons/AddIconButton";

const useStyles = makeStyles(theme => ({
    root: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
        'justify-content': 'space-between'
    },
    addButton: {
        'margin-right': theme.spacing(.5)
    }
}))

type TableToolbarProps = {
    title: string
    SearchProps?: TextFieldProps
    onAdd?(): void
}

export default function TableToolbar(props: TableToolbarProps) {
    const { title, SearchProps, onAdd } = props;
    const classes = useStyles();

    return (
        <Toolbar className={classes.root} disableGutters>
            <Typography variant="h6">
                {onAdd && (
                    <AddIconButton
                        className={classes.addButton}
                        color="primary"
                        onClick={onAdd}
                    />
                )}
                {title}
            </Typography>
            <TextField
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
                {...SearchProps}
            />
        </Toolbar>
    )
}
