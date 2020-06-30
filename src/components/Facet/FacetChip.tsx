import {ChipProps} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";
import React from "react";

const useStyles = makeStyles(theme => ({
    root: {
        height: 'initial',
        borderRadius: '8px',
        marginRight: theme.spacing(.5)
    }
}))

export default function FacetChip(props: ChipProps) {
    const classes = useStyles();

    return (
        <Chip className={classes.root} {...props}/>
    );
}
