import Paper, {PaperProps} from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    footer: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

export default function ViewWrapper(props: PaperProps) {
    const {children} = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper className={classes.root} {...props}>
                {children}
            </Paper>
            <Toolbar className={classes.footer}>
                <Typography variant="body2">
                    datacat-explorer {process.env.REACT_APP_VERSION}
                </Typography>
                <Typography variant="body2">
                    <Link href={`mailto:${process.env.REACT_APP_MAIL}`}>
                        Support
                    </Link>
                </Typography>
            </Toolbar>
        </React.Fragment>
    );
}
