import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SearchField from '../SearchField';
import ErrorAlert from '../ErrorAlert';
import LinearProgress from '@material-ui/core/LinearProgress';
import SubjectTable from './SubjectTable';
import gql from 'graphql-tag';

export const SUBJECTS_VIEW_QUERY = gql`
    query SubjectsView($term: String, $pageSize: Int, $pageNumber: Int) {
        subjects(options: {
            term: $term
            pageSize: $pageSize
            pageNumber: $pageNumber
        }) {
            ...SubjectTableXtdSubjectConnection
        }
    }
    ${SubjectTable.fragments.subjects}
`;

export default function SubjectsView() {
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const variables = {term: searchTerm, pageSize, pageNumber};
    const {loading, error, data} = useQuery(SUBJECTS_VIEW_QUERY, {variables});

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
            </Grid>
            <Grid item xs={12}>
                {error && <ErrorAlert/>}
                {!error && !loading && (
                    <SubjectTable
                        data={data}
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
