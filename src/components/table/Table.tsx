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
import {CatalogItemFragment} from "../../generated/types";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import {toLocaleDateTimeString} from "../../dateTime";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "@material-ui/core/Link";
import EditIcon from "@material-ui/icons/Edit";
import {Link as RouterLink} from "react-router-dom";
import {route} from "../../utils";

const useStyles = makeStyles(theme => ({
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export const useCatalogItemRows = (items?: CatalogItemFragment[]) => {
    const classes = useStyles();
    const columns = React.useMemo(
        () => [
            {id: 'icon', Header: '', accessor: 'icon'},
            {id: 'label', Header: 'Name', accessor: 'label'},
            {id: 'created', Header: 'Created', accessor: 'created'},
            {id: 'lastModified', Header: 'Last modified', accessor: 'lastModified'},
            {id: 'actions', Header: 'Actions', accessor: 'actions'}
        ],
        []
    );
    const rows = React.useMemo(() => {
        if (!items) {
            return [];
        }
        return items.map(item => ({
            icon: <CatalogItemIcon itemType={item.__typename} fontSize={'small'}/>,
            label: (
                <React.Fragment>
                    <Typography variant="body1">{item.label}</Typography>
                    <Typography className={classes.idLabel} variant="body2">{item.id}</Typography>
                </React.Fragment>
            ),
            created: (
                <React.Fragment>
                    <Typography variant="body2">{toLocaleDateTimeString(item.created)}</Typography>
                    <Typography className={classes.idLabel} variant="body2">{item.createdBy}</Typography>
                </React.Fragment>
            ),
            lastModified: (
                <React.Fragment>
                    <Typography variant="body2">{toLocaleDateTimeString(item.lastModified)}</Typography>
                    <Typography className={classes.idLabel} variant="body2">{item.lastModifiedBy}</Typography>
                </React.Fragment>
            ),
            actions: (
                <Link
                    component={RouterLink}
                    to={`${route(item.__typename)}/${item.id}`}
                >
                    <EditIcon
                        fontSize="small"
                        aria-label="edit item"
                    />
                </Link>
            )
        }));
    }, [items]);

    return { columns, rows }
}

export type TableProps = {
    title: string
    onAdd?(): void
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
        onAdd,
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
                onAdd={onAdd}

                SearchProps={{
                    size: "small",
                    label: "Search id, name and description",
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
