import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SearchField from '../SearchField';
import ErrorAlert from '../ErrorAlert';
import LinearProgress from '@material-ui/core/LinearProgress';
import RelGroupsTable from './RelGroupsTable';
import gql from 'graphql-tag';
import SubjectSelect from '../subjects/SubjectSelect';

export const REL_GROUPS_VIEW_QUERY = gql`
    query RelGroupsView($term: String, $pageSize: Int, $pageNumber: Int) {
        groupsRelationships(options: {
            term: $term
            pageSize: $pageSize
            pageNumber: $pageNumber
        }) {
            ...RelGroupsTableXtdRelGroupsConnection
        }
    }
    ${RelGroupsTable.fragments.groupRelationships}
`;

export default function RelGroupsView() {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const variables = {term: searchTerm, pageSize, pageNumber};
    const {loading, error, data} = useQuery(REL_GROUPS_VIEW_QUERY, {variables});

    const handleSearchTermChange = e => {
        setSearchTerm(e.target.value);
        setPageNumber(0);
    };

    const handleChangeRowsPerPage = e => {
        setPageSize(parseInt(e.target.value, 10));
        setPageNumber(0);
    };

    const handleChangePage = (e, page) => setPageNumber(page);

    return (
        <Grid container spacing={1}>
            { loading && <LinearProgress /> }
            <Grid item xs={12} sm={6}>
                <SearchField value={searchTerm} onChange={handleSearchTermChange} />
                <SubjectSelect />
            </Grid>
            <Grid item xs={12}>
                {error && <ErrorAlert/>}
                {!error && !loading && (
                    <RelGroupsTable
                        nodes={data.groupsRelationships.nodes}
                        page={data.groupsRelationships.page}
                        pageNumber={pageNumber}
                        pageSize={pageSize}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        onChangePage={handleChangePage}
                    />
                )}
            </Grid>
        </Grid>
    );
};
