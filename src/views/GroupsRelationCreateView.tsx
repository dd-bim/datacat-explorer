import React from 'react';
import {gql, useMutation} from '@apollo/client';
import XtdRelAssociatesForm from '../components/form/XtdRelAssociatesForm';
import {AssociationInput} from "../types";

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

interface GroupsRelationCreateViewProps {
    onSubmit: () => void;
    onCancel: () => void;
}

export default function GroupsRelationCreateView(props: GroupsRelationCreateViewProps) {
    const { onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(REL_GROUPS_ADD_MUTATION);

    const handleOnSubmit = async (data: AssociationInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };
    return <XtdRelAssociatesForm onCancel={onCancel} onSubmit={handleOnSubmit} />;
}
