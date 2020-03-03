import TableCell from '@material-ui/core/TableCell';
import {toLocaleDateTimeString} from '../../dateTime';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import DescriptionButton from '../DescriptionButton';
import DeleteButton from '../DeleteButton';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import RelGroupsChip from './RelGroupsChip';
import {useHistory} from 'react-router-dom';

export const REL_GROUPS_TABLE_VIEW_DELETE_MUTATION = gql`
    mutation GroupsRelationshipTableViewDelete($id: ID!) {
        deleteGroupsRelationship(id: $id) {
            id
        }
    }
`;

const textReducer = (acc, cur) => acc ? acc + ', ' + cur.name : cur.name;

export default function RelGroupsTableRow(props) {
    const {groupsRelationship} = props;
    const history = useHistory();
    const {
        id,
        names,
        descriptions,
        versionId,
        versionDate,
        created,
        lastModified,
        relatingObject,
        relatedObjects
    } = groupsRelationship;
    const versionString = [versionId, toLocaleDateTimeString(versionDate, 'll')].join(' | ');
    const [deleteGroupsRelationship] = useMutation(
        REL_GROUPS_TABLE_VIEW_DELETE_MUTATION,
        {refetchQueries: ['RelGroupsView']}
    );

    const label = relatingObject.names.reduce(textReducer, '');

    const handleDelete = () => {
        deleteGroupsRelationship({variables: {id}});
    };

    return (
        <TableRow>
            <TableCell>
                <RelGroupsChip label={label} onClick={() => history.push(`/relationships/groups/${id}`)} />
                <DescriptionButton descriptions={descriptions}/>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
            <TableCell>{versionString}</TableCell>
            <TableCell>{relatedObjects.page.totalElements}</TableCell>
            <TableCell>
                <DeleteButton onDelete={handleDelete} />
            </TableCell>
        </TableRow>
    );
}

RelGroupsTableRow.fragments = {
    root: gql`
        fragment RelGroupsTableRowRoot on XtdRelGroups {
            __typename
            id
            created
            lastModified
            versionId
            versionDate
            names { id name }
            descriptions {
                id
                description
            }
            relatingObject {
                id
                names { id name }
            }
            relatedObjects {
                page { totalElements }
            }
        }
    `,
};
