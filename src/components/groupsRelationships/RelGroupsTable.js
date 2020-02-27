import Table from '../Table';
import PropTypes from 'prop-types';
import RelGroupsTableRow from './RelGroupsTableRow';
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import gql from 'graphql-tag';

export default function RelGroupsTable(props) {
    const {nodes, page, onChangePage, onChangeRowsPerPage} = props;
    const {pageNumber, pageSize, totalElements} = page;

    const tableHead = (
        <TableRow>
            <TableCell>Relating Object</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last modified</TableCell>
            <TableCell>Version</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
    );

    return (
        <Table
            head={tableHead}
            pageNumber={pageNumber}
            pageSize={pageSize}
            totalElements={totalElements}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
        >
            {nodes.map((relationship) => (
                <RelGroupsTableRow key={relationship.uniqueId} groupsRelationship={relationship} />
            ))}
        </Table>
    );
}

RelGroupsTable.propTypes = {
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    page: PropTypes.object.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired,
};

RelGroupsTable.fragments = {
    groupRelationships: gql`
        fragment RelGroupsTableXtdRelGroupsConnection on XtdRelGroupsConnection {
            nodes {
                uniqueId
                ...RelGroupsTableRowRoot
            }
            page {
                ...TablePage
            }
        }
        ${RelGroupsTableRow.fragments.root}
        ${Table.fragments.page}
    `,
};
