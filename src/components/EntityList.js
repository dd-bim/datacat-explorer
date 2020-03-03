import React, {useState} from 'react';
import {LinearProgress, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Add} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import SearchForm from './SearchForm';
import TermList from './term/TermList';
import Grid from '@material-ui/core/Grid';
import XtdChip from './term/XtdChip';
import Box from '@material-ui/core/Box';
import { useQuery, useMutation } from '@apollo/react-hooks';

const useStyles = makeStyles(theme => ({
    paper: {
        'padding': theme.spacing(1),
        'margin-bottom': theme.spacing(1),
    },
    actionBar: {
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end',
    },
    filterBar: {
        padding: theme.spacing(1),
        display: 'flex',
    },
    filterSummary: {
        padding: theme.spacing(1),
        alignContent: 'center',
    }
}));

export default function EntityList(props) {
    const classes = useStyles(props);
    const {
        label,
        queryVariables,
        fetchQuery,
        deleteMutation,
        dataKey,
        toCreate,
        toEdit,
    } = props;

    const [match, setMatch] = useState('');
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const {loading, error, data} = useQuery(fetchQuery, {
        variables: Object.assign({
            match,
            groupId: selectedGroup ? selectedGroup.id : '',
            pageNumber,
            pageSize,
        }, queryVariables),
    });
    const [executeDelete, { data: deleteData }] = useMutation(deleteMutation, {
        update(cache, { data: { id } }) {
            console.log(cache.data);
            // const { entity } = cache.readQuery({ query: GET_TODOS });
            // cache.writeQuery({
            //     query: GET_TODOS,
            //     data: { todos: todos.concat([addTodo]) },
            // });
        }
    });

    const handleSearchChange = event => {
        setPageNumber(0);
        setSelectedGroup('');
        setMatch(event.target.value);
    };

    const handleSelectedGroupChange = group => {
        setPageNumber(0);
        setMatch('');
        setSelectedGroup(group);
    };

    const handleChangeRowsPerPage = newPageSize => {
        setPageNumber(0);
        setPageSize(newPageSize);
    };

    let content = '';

    if (error) {
        content = <p>{error.message}</p>;
    } else if (loading) {
        content = <LinearProgress />;
    } else if (data[dataKey]){
        const {page, nodes} = data[dataKey];
        content = (
            <TermList
                toEdit={toEdit}
                rows={nodes}
                rowsPerPage={pageSize}
                page={pageNumber}
                count={page.totalElements}
                handleChangePage={setPageNumber}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                onSelectRow={handleSelectedGroupChange}
                onDeleteRow={id => executeDelete({variables: {id: id}})}
            />
        );
    }

    return (
        <Box>
            <Box className={classes.actionBar}>
                <Button
                    startIcon={<Add/>}
                    variant={'contained'}
                    component={Link}
                    to={toCreate}
                >
                    {'Add ' + label}
                </Button>
            </Box>
            <Box className={classes.filterBar}>
                <Grid container>
                    <Grid className={classes.filterSummary} item xs={10}>
                        <SearchForm
                            className={classes.searchForm}
                            variant={'outlined'}
                            fullWidth={true}
                            label={'Search'}
                            disabled={error || loading}
                            value={match}
                            onChange={handleSearchChange}
                        />
                    </Grid>
                    <Grid className={classes.filterSummary} item xs={2}>
                        {selectedGroup ? (
                            <XtdChip className={classes.activeFilter} {...selectedGroup} onDelete={() => setSelectedGroup('')}/>
                        ) : (
                            ''
                        )}
                    </Grid>
                </Grid>
            </Box>
            <Box>
                {content}
            </Box>
        </Box>
    );
}
