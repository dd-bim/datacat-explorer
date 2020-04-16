import TableCell from "@material-ui/core/TableCell";
import EntityIcon from "../icons/EntityIcon";
import Typography from "@material-ui/core/Typography";
import {toLocaleDateTimeString} from "../../dateTime";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {XtdEntity, XtdRoot} from "../../types";
import {makeStyles} from "@material-ui/core/styles";
import EditIconButton from "../button/EditIconButton";
import DeleteRowAction from "./DeleteRowAction";
import DescriptionRowAction from "./DescriptionRowAction";
import RelGroupsRowAction from "./RelGroupsRowAction";
import {gql} from "@apollo/client";

const useStyles = makeStyles(theme => ({
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export interface XtdRootTableRowProps<T> {
    row: T;
    onEntitySelect: (entity: XtdEntity) => void;
    onEdit: (row: T) => void;
    onDelete: (row: T) => void;
}

export default function RootTableRow<T extends XtdRoot>(props: XtdRootTableRowProps<T>) {
    const { row, onEntitySelect, onEdit, onDelete } = props;
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell align={'center'}>
                <EntityIcon entity={row} fontSize={'small'}/>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{row.label}</Typography>
                <Typography className={classes.idLabel} variant="body2">{row.id}</Typography>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(row.created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(row.lastModified)}</TableCell>
            <TableCell>{row.versionId} | {toLocaleDateTimeString(row.versionDate, 'll')}</TableCell>
            <TableCell align={'center'}>
                <RelGroupsRowAction
                    row={row}
                    onSelect={onEntitySelect}
                />
            </TableCell>
            <TableCell align={'center'}>
                <DescriptionRowAction row={row} />
                <EditIconButton
                    onClick={() => onEdit(row)}
                    size='small'
                />
                <DeleteRowAction
                    title={`Delete ${row.label}`}
                    onConfirm={() => onDelete(row)}
                    ButtonProps={{size: 'small'}}
                />
            </TableCell>
        </TableRow>
    );
}

RootTableRow.fragments = {
    root: gql`
        fragment RootTableRowRoot on XtdRoot {
            label
            created
            lastModified
            versionId
            versionDate
            ...RelGroupsRowActionRoot
            ...DescriptionRowActionRoot
        }
        ${RelGroupsRowAction.fragments.root}
        ${DescriptionRowAction.fragments.root}
    `
}
