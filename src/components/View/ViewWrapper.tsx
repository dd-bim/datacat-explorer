import Paper from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    }
}));

type ViewWrapperProps = {
    children: React.ReactNode
}

export default function ViewWrapper(props: ViewWrapperProps) {
    const classes = useStyles();
    const { children } = props;

    return (
        <Paper className={classes.root}>
            {children}
        </Paper>
    );

}
