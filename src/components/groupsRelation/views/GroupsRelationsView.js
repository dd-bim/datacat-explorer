import {gql, useQuery} from '@apollo/client';
import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SearchField from '../../SearchField';
import ErrorAlert from '../../ErrorAlert';
import LinearProgress from '@material-ui/core/LinearProgress';
import GroupsRelationTable from '../GroupsRelationTable';
import GroupsRelationTableRow from '../GroupsRelationTableRow';
import {useHistory, useRouteMatch} from 'react-router-dom';

export const REL_GROUPS_VIEW_QUERY = gql`
    query RelGroupsView($term: String, $pageSize: Int, $pageNumber: Int) {
        groupsRelations(
            term: $term, 
            options: {
                pageSize: $pageSize
                pageNumber: $pageNumber
            }
        ) {
            ...RelGroupsTableXtdRelGroupsConnection
        }
    }
    ${GroupsRelationTable.fragments.groupRelationships}
`;

export default function GroupsRelationsView() {
    const { path } = useRouteMatch();
    const history = useHistory();
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

    const handleOnEdit = id => history.push(`${path}/${id}`);

    return (
        <Grid container spacing={1}>
            { loading && <LinearProgress /> }
            <Grid item xs={12} sm={6}>
                <SearchField value={searchTerm} onChange={handleSearchTermChange} />
            </Grid>
            <Grid item xs={12}>
                {error && <ErrorAlert/>}
                {!error && !loading && (
                    <GroupsRelationTable
                        page={data.groupsRelations.page}
                        pageNumber={pageNumber}
                        pageSize={pageSize}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        onChangePage={handleChangePage}
                    >{data.groupsRelations.nodes.map((relationship) => (
                        <GroupsRelationTableRow
                            key={relationship.id}
                            groupsRelationship={relationship}
                            onEdit={handleOnEdit}
                        />
                    ))}
                    </GroupsRelationTable>
                )}
            </Grid>
        </Grid>
    );
};
