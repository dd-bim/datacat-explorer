import TableCell from '@material-ui/core/TableCell';
import {toLocaleDateTimeString} from '../../dateTime';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import DescriptionButton from '../DescriptionButton';
import DeleteButton from '../DeleteButton';
import {gql, useMutation} from '@apollo/client';
import RelGroupsChip from './RelGroupsChip';
import {useHistory} from 'react-router-dom';

export const REL_GROUPS_TABLE_VIEW_DELETE_MUTATION = gql`
    mutation GroupsRelationshipTableViewDelete($id: ID!) {
        deleteGroupsRelation(id: $id) {
            id
        }
    }
`;

export default function RelGroupsTableRow(props) {
    const {groupsRelationship} = props;
    const history = useHistory();
    const {
        id,
        label,
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

    const handleDelete = () => {
        deleteGroupsRelationship({variables: {id}});
    };

    return (
        <TableRow>
            <TableCell>
                <RelGroupsChip label={label ? label : `${id.substring(0, 6)}...<${relatingObject.label}>`} onClick={() => history.push(`/relationships/groups/${id}`)} />
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
            label
            descriptions { id value }
            relatingObject { id label }
            relatedObjects {
                page { totalElements }
            }
        }
    `,
};
