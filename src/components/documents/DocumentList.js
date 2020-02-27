import {useMutation, useQuery} from '@apollo/client';
import React, {useState} from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import {TableBody} from '@material-ui/core';
import DocumentListItem from './DocumentListItem';
import {deleteDoc, getDocs} from './queries';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

export default function DocumentList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const variables = {term: searchTerm, pageSize, pageNumber};
    const {loading, error, data: documents} = useQuery(getDocs, {variables});
    const [deleteDocument] = useMutation(deleteDoc, {refetchQueries: ['getDocuments']});

    const handleSearchTermChange = e => {
        setSearchTerm(e.target.value);
        setPageNumber(0);
    };
    const handleChangeRowsPerPage = e => {
        setPageSize(parseInt(e.target.value, 10));
        setPageNumber(0);
    };
    const handleChangePage = (e, page) => setPageNumber(page);

    let content;

    if (loading) {
        content = <p>Loading ...</p>;
    } else if (error) {
        content = <p>Error ...</p>;
    } else {
        const {
            documents: {
                nodes,
                page: {totalElements},
            },
        } = documents;
        const tableRows = nodes.map(row => {
            const uniqueId = row.uniqueId;
            const handleDelete = () => deleteDocument({variables: {uniqueId}});
            return (
                <DocumentListItem key={uniqueId} onDelete={handleDelete} {...row} />
            );
        });

        content = <Table size={'small'}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Last modified</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableRows}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        count={totalElements}
                        rowsPerPage={pageSize}
                        page={pageNumber}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        onChangePage={handleChangePage}
                    />
                </TableRow>
            </TableFooter>
        </Table>;
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="search-term-input"
                    label="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                {content}
            </Grid>
        </Grid>
    );
};
