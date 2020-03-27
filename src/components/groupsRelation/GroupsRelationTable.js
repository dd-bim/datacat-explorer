import Table from '../Table';
import PropTypes from 'prop-types';
import GroupsRelationTableRow from './GroupsRelationTableRow';
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {gql} from '@apollo/client';

export default function GroupsRelationTable(props) {
    const {page, onChangePage, onChangeRowsPerPage, children} = props;
    const {pageNumber, pageSize, totalElements} = page;

    const tableHead = (
        <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell />
            <TableCell>Created</TableCell>
            <TableCell>Last modified</TableCell>
            <TableCell>Version</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
    );

    return (
        <Table
            size="small"
            head={tableHead}
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalElements={totalElements}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
        >
            {children}
        </Table>
    );
}

GroupsRelationTable.propTypes = {
    page: PropTypes.object.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired,
};

GroupsRelationTable.fragments = {
    groupRelationships: gql`
        fragment RelGroupsTableXtdRelGroupsConnection on XtdRelGroupsConnection {
            nodes {
                id
                ...RelGroupsTableRowRoot
            }
            page {
                ...TablePage
            }
        }
        ${GroupsRelationTableRow.fragments.root}
        ${Table.fragments.page}
    `,
};
