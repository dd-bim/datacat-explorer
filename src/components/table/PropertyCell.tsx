import {TypographyProps} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    secondary: {
        'color': theme.palette.text.hint
    }
}));

type PropertyCellProps = {
    primary: string
    secondary?: string
    tooltip?: string
    PrimaryProps?: TypographyProps
    SecondaryProps?: TypographyProps
}

export default function PropertyCell(props: PropertyCellProps) {
    const {primary, PrimaryProps, secondary, SecondaryProps, tooltip = ''} = props;
    const classes = useStyles();

    return (
        <Tooltip title={tooltip} enterDelay={500} placement="bottom-start">
            <div>
                <Typography variant="body2" {...PrimaryProps}>{primary}</Typography>
                <Typography variant="body2" className={classes.secondary} {...SecondaryProps}>{secondary}</Typography>
            </div>
        </Tooltip>
    );
}
