import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";

export default function EntityTableHeader() {
    return (
        <TableRow>
            <TableCell colSpan={2}>Label</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last modified</TableCell>
            <TableCell align={'center'}>Actions</TableCell>
        </TableRow>
    )
}
