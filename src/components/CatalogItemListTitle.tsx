import Typography from "@material-ui/core/Typography";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export default function CatalogItemListTitle(props: {id: string, label: string}) {
    const classes = useStyles();
    const {id, label} = props;

    return (
        <React.Fragment>
            <Typography variant="body1">{label}</Typography>
            <Typography className={classes.idLabel} variant="body2">{id}</Typography>
        </React.Fragment>
    );
}
