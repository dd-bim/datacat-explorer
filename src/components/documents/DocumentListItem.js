import TableCell from '@material-ui/core/TableCell';
import XtdChip from '../term/XtdChip';
import {toLocaleDateTimeString} from '../../dateTime';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import {DeleteForever} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

export default function DocumentListItem(props) {
    const {
        __typename,
        id,
        names,
        created,
        lastModified,
        onDelete
    } = props;

    return (
        <TableRow key={id}>
            <TableCell>
                <XtdChip type={__typename} names={names} />
            </TableCell>
            <TableCell>{toLocaleDateTimeString(created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
            <TableCell>
                <IconButton onClick={() => onDelete()}>
                    <DeleteForever/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
