import {gql, useMutation, useQuery} from '@apollo/client';
import React from 'react';
import {useParams} from 'react-router-dom';
import SubjectForm from '../SubjectForm';

export const SUBJECT_FORM_UPDATE_QUERY = gql`
    query SubjectForm($id: ID!) {
        subject(id: $id) {
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

export const SUBJECT_FORM_UPDATE_MUTATION = gql`
    mutation SubjectFormUpdate($input: RootUpdateInput!) {
        updateSubject(input: $input) {
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

export default function SubjectUpdateView(props) {
    const { onSubmit, onCancel } = props;
    const { id } = useParams();
    const { loading, error, data } = useQuery(SUBJECT_FORM_UPDATE_QUERY, { variables: {id} });
    const [executeUpdate] = useMutation(SUBJECT_FORM_UPDATE_MUTATION);

    const handleSubmit = async (data, e) => {
        await executeUpdate({ variables: { input: data } });
        onSubmit();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    return <SubjectForm onSubmit={handleSubmit} onCancel={onCancel} defaultValues={data.subject} />;
}
