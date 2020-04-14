import TableRow, {TableRowProps} from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import {toLocaleDateTimeString} from "../../dateTime";
import {XtdRoot} from "../../types";
import {gql} from "@apollo/client";
import {IconButtonProps} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EntityIcon from "../icons/EntityIcon";

interface XtdTableRowProps<T> {
    row: T;
    extras?: React.ReactNode;
    actions?: React.ReactNode;
    onEdit?: () => void;
    onDelete?: () => void;
    ButtonProps?: IconButtonProps;
}

const useStyles = makeStyles(theme => ({
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export default function XtdTableRow<T extends XtdRoot>(props: XtdTableRowProps<T> & TableRowProps) {
    const {
        row: {
            id,
            label,
            versionId,
            versionDate,
            created,
            lastModified
        },
        extras,
        actions,
        onEdit,
        onDelete,
        ButtonProps,
        ...otherProps
    } = props;
    const classes = useStyles();
    const versionString = [
        versionId,
        toLocaleDateTimeString(versionDate, 'll')
    ].filter(x => x).join(' | ');

    return (
            <TableRow {...otherProps}>
                <TableCell>
                    <EntityIcon entity={props.row} fontSize={'small'}/>
                </TableCell>
                <TableCell>
                    <Typography variant="body1">{label}</Typography>
                    <Typography className={classes.idLabel} variant="body2">{id}</Typography>
                </TableCell>
                <TableCell>{toLocaleDateTimeString(created)}</TableCell>
                <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
                <TableCell>{versionString}</TableCell>
                <TableCell align="center">
                    {extras}
                </TableCell>
                <TableCell align="center">
                    {actions}
                </TableCell>
            </TableRow>
    );
}

XtdTableRow.fragments = {
    root: gql`
        fragment XtdTableRow on XtdRoot {
            id
            created
            lastModified
            label
            versionId
            versionDate
        }
    `
};
