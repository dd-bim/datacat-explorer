import React from 'react';
import {gql, useMutation} from '@apollo/client';
import GroupsRelationForm from '../GroupsRelationForm';

export const REL_GROUPS_ADD_MUTATION = gql`
    mutation SubjectFormAdd($input: AssociationInput!) {
        createGroupsRelation(input: $input) {
            id
            created
            lastModified
            versionId
            versionDate
            names {
                id
                created
                lastModified
                languageName { id }
                value
            }
            descriptions {
                id
                created
                lastModified
                languageName { id }
                value
            }
        }
    }
`;

export default function GroupsRelationCreateView(props) {
    const { onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(REL_GROUPS_ADD_MUTATION);

    const handleOnSubmit = async (data, e) => {
        await executeCreate({ variables: { input: data } });
        onSubmit && onSubmit();
    };
    return <GroupsRelationForm onCancle={onCancel} onSubmit={handleOnSubmit} />;
}
