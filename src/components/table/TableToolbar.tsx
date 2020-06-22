import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import {TextFieldProps} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles(theme => ({
    root: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
        'justify-content': 'space-between'
    },
    icon: {
        'margin-right': theme.spacing(.5),
        '& > svg': {
            'vertical-align': 'text-bottom'
        }
    },
    addButton: {
        'vertical-align': 'text-bottom',
        'margin-left': theme.spacing(1)
    }
}))

type TableToolbarProps = {
    icon?: React.ReactNode,
    title: string
    SearchProps?: TextFieldProps
    createPath?: string
}

export default function TableToolbar(props: TableToolbarProps) {
    const { icon, title, SearchProps, createPath } = props;
    const classes = useStyles();

    return (
        <Toolbar className={classes.root} disableGutters>
            <Typography variant="h6">
                {icon && <span className={classes.icon}>{icon}</span>}
                <span>{title}</span>
                {createPath && (
                    <Link component={RouterLink} to={createPath}>
                        <AddCircleIcon
                            className={classes.addButton}
                            color="primary"
                        />
                    </Link>
                )}
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
