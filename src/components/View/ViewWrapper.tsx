import Paper, {PaperProps} from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    }
}));

export default function ViewWrapper(props: PaperProps) {
    const { children } = props;
    const classes = useStyles();

    return (
        <Paper className={classes.root} {...props}>
            {children}
        </Paper>
    );
}
