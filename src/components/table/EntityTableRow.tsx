import TableCell from "@material-ui/core/TableCell";
import EntityIcon from "../icons/EntityIcon";
import Typography from "@material-ui/core/Typography";
import {toLocaleDateTimeString} from "../../dateTime";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {XtdEntity} from "../../types";
import {makeStyles} from "@material-ui/core/styles";
import EditIconButton from "../button/EditIconButton";
import DeleteRowAction from "./DeleteRowAction";

const useStyles = makeStyles(theme => ({
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export interface EntityTableRowProps<T> {
    row: T;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
}

export default function EntityTableRow<T extends XtdEntity>(props: EntityTableRowProps<T>) {
    const { row, onEdit, onDelete } = props;
    const classes = useStyles();

    return (
        <TableRow hover>
            <TableCell align={'center'}>
                <EntityIcon entity={row} fontSize={'small'}/>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{row.label}</Typography>
                <Typography className={classes.idLabel} variant="body2">{row.id}</Typography>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(row.created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(row.lastModified)}</TableCell>
            <TableCell align={'center'}>
                {onEdit && <EditIconButton
                    onClick={() => onEdit(row)}
                    size='small'
                />}
                {onDelete && <DeleteRowAction
                    title={`Delete ${row.label}`}
                    onConfirm={() => onDelete(row)}
                    ButtonProps={{size: 'small'}}
                />}
            </TableCell>
        </TableRow>
    );
}
