import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MaterialUITable from '@material-ui/core/Table';
import {TableBody} from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import gql from 'graphql-tag';

export default function Table(props) {
    const {
        head,
        children,
        pageNumber,
        pageSize,
        totalElements,
        onChangeRowsPerPage,
        onChangePage
    } = props;
    return (
        <MaterialUITable>
            <TableHead>
                {head}
            </TableHead>
            <TableBody>
                {children}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        count={totalElements}
                        rowsPerPage={pageSize}
                        page={pageNumber}
                        onChangeRowsPerPage={onChangeRowsPerPage}
                        onChangePage={onChangePage}
                    />
                </TableRow>
            </TableFooter>
        </MaterialUITable>
    );
};

Table.propTypes = {
    head: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalElements: PropTypes.number.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired,
};

Table.fragments = {
    page: gql`
        fragment TablePage on Page {
            pageSize
            pageNumber
            totalElements
        }
    `,
};
