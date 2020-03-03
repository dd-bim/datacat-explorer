import TableCell from '@material-ui/core/TableCell';
import {toLocaleDateTimeString} from '../../dateTime';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import DescriptionButton from '../DescriptionButton';
import DeleteButton from '../DeleteButton';
import {useMutation} from '@apollo/client';
import gql from 'graphql-tag';
import SubjectChip from './SubjectChip';
import RelGroupsSelectButton from '../groupsRelationships/RelGroupsSelectButton';

export const SUBJECT_TABLE_VIEW_DELETE_MUTATION = gql`
    mutation SubjectTableViewDelete($id: ID!) {
        deleteSubject(id: $id) {
            id
        }
    }
`;

const textReducer = (acc, cur) => acc ? acc + ', ' + cur.name : cur.name;

export default function SubjectTableRow(props) {
    const {subject} = props;
    const {
        id,
        names,
        descriptions,
        versionId,
        versionDate,
        created,
        lastModified,
        groups
    } = subject;
    const versionString = [versionId, toLocaleDateTimeString(versionDate, 'll')].join(' | ');
    const [deleteSubject] = useMutation(SUBJECT_TABLE_VIEW_DELETE_MUTATION, {refetchQueries: ['SubjectsView']});

    const handleDelete = () => {
        deleteSubject({variables: {id}});
    };

    return (
        <TableRow>
            <TableCell>
                <SubjectChip label={names.reduce(textReducer, '')} />
                <DescriptionButton descriptions={descriptions}/>
            </TableCell>
            <TableCell>{toLocaleDateTimeString(created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
            <TableCell>{versionString}</TableCell>
            <TableCell>
                <RelGroupsSelectButton id={id} totalElements={groups.page.totalElements} />
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
            names {
                id
                name
            }
            descriptions {
                id
                description
            }
            groups {
                page { totalElements }
            }
        }
    `,
};
