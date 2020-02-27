import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import TermTableRow from '../TermTableRow';

export default function TermList(props) {
    const {
        toEdit,
        rows,
        rowsPerPage = 20,
        rowsPerPageOptions = [10, 20, 50, 100],
        page,
        count,
        handleChangePage,
        handleChangeRowsPerPage,
        onSelectRow,
        onDeleteRow,
    } = props;
    const tableRows = rows.map(row => (
        <TermTableRow
            key={row.uniqueId}
            toEdit={toEdit}
            onSelectRow={onSelectRow}
            onDeleteRow={onDeleteRow}
            row={row}
        />
    ));

    return (
        <Table size={'small'}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Version</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Updated</TableCell>
                    <TableCell/>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableRows}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        colSpan={7}
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={(e, page) => handleChangePage(page)}
                        onChangeRowsPerPage={e => handleChangeRowsPerPage(e.target.value)}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    );
}
