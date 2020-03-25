import React from 'react';
import {gql, useMutation} from '@apollo/client';
import RootForm from '../RootForm';

export const SUBJECT_ADD_MUTATION = gql`
    mutation SubjectFormAdd($input: RootInput!) {
        createSubject(input: $input) {
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

export default function SubjectCreateView(props) {
    const { onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(SUBJECT_ADD_MUTATION);
    const handleOnSubmit = async (data, e) => {
        await executeCreate({ variables: { input: data } });
        onSubmit && onSubmit();
    };
    return <RootForm onCancle={onCancel} onSubmit={handleOnSubmit} />;
}
