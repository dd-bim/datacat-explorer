import TableCell from '@material-ui/core/TableCell';
import {toLocaleDateTimeString} from '../../dateTime';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import DescriptionButton from '../DescriptionButton';
import DeleteButton from '../DeleteButton';
import {gql, useMutation} from '@apollo/client';
import SubjectChip from './SubjectChip';
import GroupsSelectButton from '../groupsRelationships/GroupsSelectButton';
import GroupedBySelectButton from '../groupsRelationships/GroupedBySelectButton';
import EditButton from '../EditButton';

export const SUBJECT_TABLE_VIEW_DELETE_MUTATION = gql`
    mutation SubjectTableViewDelete($id: ID!) {
        deleteSubject(id: $id) {
            id
        }
    }
`;

export default function SubjectTableRow(props) {
    const {subject, onEdit} = props;
    const {
        id,
        label,
        descriptions,
        versionId,
        versionDate,
        created,
        lastModified,
        groups,
        groupedBy
    } = subject;
    const versionString = [versionId, toLocaleDateTimeString(versionDate, 'll')].join(' | ');
    const [deleteSubject] = useMutation(SUBJECT_TABLE_VIEW_DELETE_MUTATION, {refetchQueries: ['SubjectsView']});

    const handleEdit = () => {
        onEdit(id);
    };

    const handleDelete = () => {
        deleteSubject({variables: {id}});
    };

    return (
        <TableRow>
            <TableCell>
                <SubjectChip label={label} />
                <DescriptionButton descriptions={descriptions}/>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
            <TableCell>{versionString}</TableCell>
            <TableCell>
                <GroupsSelectButton id={id} totalElements={groups.page.totalElements} />
                <GroupedBySelectButton id={id} totalElements={groupedBy.page.totalElements} />
                <EditButton onClick={() => onEdit(id)} />
                <DeleteButton onDelete={handleDelete} />
            </TableCell>
        </TableRow>
    );
}

SubjectTableRow.fragments = {
    root: gql`
        fragment SubjectTableRowRoot on XtdSubject {
            __typename
            id
            created
            lastModified
            versionId
            versionDate
            label
            descriptions { id value }
            groups {
                page {
                    totalElements
                }
            }
            groupedBy {
                page {
                    totalElements
                }
            }
        }
    `,
};
