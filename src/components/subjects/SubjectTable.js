import Table from '../Table';
import PropTypes from 'prop-types';
import SubjectTableRow from './SubjectTableRow';
import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import gql from 'graphql-tag';

export default function SubjectTable(props) {
    const {data, onChangePage, onChangeRowsPerPage} = props;
    const {subjects: {nodes: subjects, page}} = data;
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
            {subjects.map((subject) => (
                <SubjectTableRow key={subject.uniqueId} subject={subject} />
            ))}
        </Table>
    );
}

SubjectTable.propTypes = {
    data: PropTypes.object.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired,
};

SubjectTable.fragments = {
    subjects: gql`
        fragment SubjectTableXtdSubjectConnection on XtdSubjectConnection {
            nodes {
                uniqueId
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
