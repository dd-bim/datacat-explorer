import makeStyles from "@material-ui/core/styles/makeStyles";
import {ButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import useAuthContext from "../../hooks/useAuthContext";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
}));

export function SubmitButton(props: ButtonProps) {
    const classes = useStyles();
    const {hasRole} = useAuthContext()

    return (
        <Button
            className={classes.root}
            disabled={!hasRole('USER')}
            type="submit"
            variant="contained"
            color="primary"
            {...props}
        >
            Submit
        </Button>
    );
}


export function CancelButton(props: ButtonProps) {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            type="button"
            variant="contained"
            color="secondary"
            {...props}
        >
            Cancel
        </Button>
    );
}
