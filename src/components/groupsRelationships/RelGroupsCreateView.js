import React from 'react';
import {gql, useMutation} from '@apollo/client';
import RootForm from '../RootForm';

export const REL_GROUPS_ADD_MUTATION = gql`
    mutation SubjectFormAdd($input: RootInput!, $relatingThing: ID!, $relatedThings: [ID!]!) {
        createGroupsRelation(input: $input, relatingThing: $relatingThing, relatedThings: $relatedThings) {
            id
            created
            lastModified
            versionId
            versionDate
            names {
                id
                created
                lastModified
                languageCode
                value
            }
            descriptions {
                id
                created
                lastModified
                languageCode
                value
            }
        }
    }
`;

export default function RelGroupsCreateView(props) {
    const { onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(REL_GROUPS_ADD_MUTATION);
    const handleOnSubmit = async (data, e) => {
        await executeCreate({ variables: { input: data } });
        onSubmit && onSubmit();
    };
    return <RootForm onCancle={onCancel} onSubmit={handleOnSubmit} />;
}
