import TableCell from "@material-ui/core/TableCell";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import Typography from "@material-ui/core/Typography";
import {toLocaleDateTimeString} from "../../dateTime";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import EditIconButton from "../buttons/EditIconButton";
// import DeleteRowAction from "./DeleteRowAction";
import useAuthContext from "../../hooks/useAuthContext";
import {CatalogItemFragment} from "../../generated/types";

const useStyles = makeStyles(theme => ({
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export interface EntityTableRowProps {
    row: CatalogItemFragment;
    onEdit?: (row: CatalogItemFragment) => void;
    onDelete?: (row: CatalogItemFragment) => void;
}

export default function EntityTableRow(props: EntityTableRowProps) {
    const { row, onEdit, onDelete } = props;
    const { hasRole } = useAuthContext();
    const classes = useStyles();

    return (
        <TableRow hover>
            <TableCell align={'center'}>
                <CatalogItemIcon itemType={row.__typename} fontSize={'small'}/>
            </TableCell>
            <TableCell>
                <Typography variant="body1">{row.label}</Typography>
                <Typography className={classes.idLabel} variant="body2">{row.id}</Typography>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(row.created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(row.lastModified)}</TableCell>
            <TableCell align={'center'}>
                {onEdit && <EditIconButton
                    disabled={!hasRole('USER')}
                    onClick={() => onEdit(row)}
                    size='small'
                />}
                {/*{onDelete && <DeleteRowAction*/}
                {/*    title={`Delete ${row.label}`}*/}
                {/*    onConfirm={() => onDelete(row)}*/}
                {/*    ButtonProps={{size: 'small'}}*/}
                {/*/>}*/}
            </TableCell>
        </TableRow>
    );
}
