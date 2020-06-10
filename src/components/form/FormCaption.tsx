import Typography from "@material-ui/core/Typography";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        'margin-top': theme.spacing(1)
    }
}));

type FormCaptionProps = {
    children: React.ReactNode
}

export default function FormCaption(props: FormCaptionProps) {
    const {children} = props;
    const classes = useStyles();

    return (
        <Typography className={classes.root} variant="subtitle2">
            {children}
        </Typography>
    );
}
