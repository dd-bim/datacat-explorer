import TableCell from '@material-ui/core/TableCell';
import {toLocaleDateTimeString} from '../../dateTime';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import DescriptionButton from '../DescriptionButton';
import DeleteButton from '../DeleteButton';
import {gql, useMutation} from '@apollo/client';
import RelGroupsIcon from './RelGroupsIcon';
import GroupsSelectButton from './GroupsSelectButton';
import GroupedBySelectButton from './GroupedBySelectButton';
import EditButton from '../EditButton';

export const REL_GROUPS_TABLE_VIEW_DELETE_MUTATION = gql`
    mutation GroupsRelationshipTableViewDelete($id: ID!) {
        deleteGroupsRelation(id: $id) {
            id
        }
    }
`;

export default function GroupsRelationTableRow(props) {
    const {groupsRelationship, onEdit} = props;
    const {
        id,
        label,
        descriptions,
        versionId,
        versionDate,
        created,
        lastModified,
        groups,
        groupedBy,
        relatedThing,
        relatedThings
    } = groupsRelationship;
    const title = label ? label : `${id.substring(0, 6)}...<${relatedThing.label}>`;
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
            <TableCell><RelGroupsIcon/></TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>
                <DescriptionButton title={title} descriptions={descriptions} size="small"/>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
            <TableCell>{versionString}</TableCell>
            <TableCell>{relatedThings.page.totalElements}</TableCell>
            <TableCell>
                <GroupsSelectButton id={id} totalElements={groups.page.totalElements} size="small" />
                <GroupedBySelectButton id={id} totalElements={groupedBy.page.totalElements} size="small" />
                <EditButton onClick={() => onEdit(id)} size="small" />
                <DeleteButton onDelete={handleDelete} size="small" />
            </TableCell>
        </TableRow>
    );
}

GroupsRelationTableRow.fragments = {
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
            groups {
                page { totalElements }
            }
            groupedBy {
                page { totalElements }
            }
            relatingThing { id label }
            relatedThings {
                page { totalElements }
            }
        }
    `,
};
