import Paper, {PaperProps} from "@material-ui/core/Paper";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";

const mail = process.env.REACT_APP_MAIL;

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
                    datacat-explorer {process.env.REACT_APP_EXPLORER_VERSION}
                </Typography>
                <Typography variant="body2" align="right">
                    {mail && (
                        <React.Fragment>
                            <Link href={`mailto:${mail}`}>
                                Admin | Support
                            </Link>
                            <br/>
                        </React.Fragment>
                    )}
                    <Link
                        target="_blank"
                        rel="noopener"
                        href="https://www.htw-dresden.de/hochschule/fakultaeten/geoinformation/ueber-uns/personen/professoren/prof-dr-ing-christian-clemen"
                    >
                        Contact
                    </Link>
                </Typography>
            </Toolbar>
        </React.Fragment>
    );
}
