import {gql, useQuery} from '@apollo/client';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SearchField from '../../SearchField';
import ErrorAlert from '../../ErrorAlert';
import LinearProgress from '@material-ui/core/LinearProgress';
import SubjectTable from '../SubjectTable';
import SubjectTableRow from '../SubjectTableRow';
import {useHistory, useRouteMatch} from 'react-router-dom';
import AddButton from '../../AddButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const SUBJECTS_VIEW_QUERY = gql`
    query SubjectsView($term: String, $pageSize: Int, $pageNumber: Int) {
        subjects(
            term: $term
            options: {
                pageSize: $pageSize
                pageNumber: $pageNumber
            }
        ) {
            ...SubjectTableXtdSubjectConnection
        }
    }
    ${SubjectTable.fragments.subjects}
`;

export default function SubjectsView(props) {
    const { path } = useRouteMatch();
    const history = useHistory();
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

    const handleOnEdit = id => history.push(`${path}/${id}`);

    let content = null;
    if (error) {
        content = <ErrorAlert/>;
    }
    if (!error && !loading) {
        const {subjects: {nodes: subjects, page}} = data;
        content = (
            <SubjectTable page={page} onChangeRowsPerPage={handleChangeRowsPerPage} onChangePage={handleChangePage}>
                {subjects.map((subject) => (
                    <SubjectTableRow key={subject.id} subject={subject} onEdit={handleOnEdit} />
                ))}
            </SubjectTable>
        );
    }

    return (
        <Grid container spacing={1}>
            { loading && <LinearProgress /> }
            <Grid item xs={8}>
                <SearchField value={searchTerm} onChange={handleSearchTermChange} fullWidth />
            </Grid>
            <Grid item xs={4}>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                >
                    <AddButton to={`${path}/new`}>
                        Add subject
                    </AddButton>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
                {content}
            </Grid>
        </Grid>
    );
};
