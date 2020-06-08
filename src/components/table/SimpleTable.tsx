import * as React from 'react';
import TableHead from "@material-ui/core/TableHead";
import {TableBody, TableProps} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import {gql} from "@apollo/client";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import {PageInfoFragment} from "../../generated/types";

export interface XtdTableProps {
    children: React.ReactNode;
    tableHeader: React.ReactNode;
    totalElements: number;
    pageInfo: PageInfoFragment;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
    onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function SimpleTable(props: XtdTableProps & TableProps) {
    const {
        children,
        tableHeader,
        totalElements,
        pageInfo: {
            pageNumber,
            pageSize
        },
        onChangePage,
        onChangeRowsPerPage,
        className,
        ...otherProps
    } = props;

    return (
        <Paper className={className}>
            <TableContainer>
                <Table {...otherProps}>
                    <TableHead>
                        {tableHeader}
                    </TableHead>
                    <TableBody>
                        {children}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={totalElements}
                rowsPerPage={pageSize}
                page={pageNumber}
                onChangeRowsPerPage={onChangeRowsPerPage}
                onChangePage={onChangePage}
            />
        </Paper>
    );
}

SimpleTable.fragments = {
    pageInfo: gql`
        fragment SimpleTablePage on PageInfo {
            pageSize
            pageNumber
        }
    `
};
