import Table from '../Table';
import PropTypes from 'prop-types';
import SubjectTableRow from './SubjectTableRow';
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {gql} from '@apollo/client';

export default function SubjectTable(props) {
    const {page, onChangePage, onChangeRowsPerPage, children} = props;
    const {pageNumber, pageSize, totalElements} = page;

    const tableHead = (
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last modified</TableCell>
            <TableCell>Version</TableCell>
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
            {children}
        </Table>
    );
}

SubjectTable.propTypes = {
    page: PropTypes.shape({
        pageNumber: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        totalElements: PropTypes.number.isRequired,
    }).isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired,
};

SubjectTable.fragments = {
    subjects: gql`
        fragment SubjectTableXtdSubjectConnection on XtdSubjectConnection {
            nodes {
                id
                ...SubjectTableRowRoot
            }
            page {
                ...TablePage
            }
        }
        ${SubjectTableRow.fragments.root}
        ${Table.fragments.page}
    `,
};
