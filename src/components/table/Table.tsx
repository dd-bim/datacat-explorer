import React from "react";
import MUITable from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer";
import TableToolbar from "./TableToolbar";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import {useTable} from "react-table";
import {LinearProgress, TableCell, TablePaginationProps} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TablePagination from "@material-ui/core/TablePagination";

export type TableProps = {
    title: string
    createPath?: string
    query: string
    onQueryChange(newQuery: string): void
    error?: boolean
    loading?: boolean
    columns: any
    rows: any
    paginationOptions: Omit<TablePaginationProps<'td'>, 'component'>
}

export default function Table(props: TableProps) {
    const {
        title,
        createPath,
        query,
        onQueryChange,
        error,
        loading,
        columns,
        rows: data,
        paginationOptions
    } = props;
    const {
        headers,
        rows,
        prepareRow
    }= useTable({ columns, data });

    let content;
    if (loading) {
        content = (
            <TableRow key="loading">
                <TableCell colSpan={headers.length}>
                    <LinearProgress  />
                </TableCell>
            </TableRow>
        );
    } else if (error) {
        content = (
            <TableRow key="error">
                <TableCell colSpan={headers.length}>
                    <Typography variant="body1">An error has occured...</Typography>
                </TableCell>
            </TableRow>
        );
    } else if (!rows.length) {
        content = (
            <TableRow key="empty">
                <TableCell colSpan={headers.length}>
                    <Typography variant="body1">No results...</Typography>
                </TableCell>
            </TableRow>
        );
    } else {
        content = rows.map((row, index) => {
            prepareRow(row);
            return (
                <TableRow key={index}>
                    {row.cells.map((cell, index) => (
                        <TableCell key={index}>
                            {cell.value}
                        </TableCell>
                    ))}
                </TableRow>
            );
        });
    }

    return (
        <TableContainer>
            <TableToolbar
                title={title}
                createPath={createPath}
                SearchProps={{
                    size: "small",
                    label: "Search id, name and secondary",
                    placeholder: "Bau*",
                    helperText: "Wildcard characters '?' and '*' are supported. Enabled fuzzy search mode by appending '~'.",
                    value: query,
                    onChange: (e) => onQueryChange(e.target.value)
                }}
            />
            <MUITable size="small">
                <TableHead>
                    <TableRow>
                    {headers.map((column, index) => (
                        <TableCell key={index}>{column.render('Header')}</TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {content}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            colSpan={headers.length}
                            {...paginationOptions}
                        />
                    </TableRow>
                </TableFooter>
            </MUITable>
        </TableContainer>
    );
}
