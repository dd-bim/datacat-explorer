import React from 'react';
import {gql, useMutation, useQuery} from '@apollo/client';
import XtdRelAssociatesForm from '../components/form/XtdRelAssociatesForm';
import {useParams} from 'react-router-dom';
import cloneDeep from 'lodash.clonedeep';
import {AssociationInput} from "../types";

export const GROUPS_FORM_UPDATE_QUERY = gql`
    query GroupsForm($id: ID!) {
        groupsRelation(id: $id) {
            id
            created
            lastModified
            versionId
            versionDate
            names {
                id
                languageCode
                value
            }
            descriptions {
                id
                languageCode
                value
            }
            relatingThing { id label }
            relatedThings {  
                nodes { id label }
            }
        }
    }
`;

export const REL_GROUPS_ADD_MUTATION = gql`
    mutation SubjectFormAdd($input: AssociationUpdateInput!) {
        updateGroupsRelation(input: $input) {
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
            relatingThing { id label }
            relatedThings {
                nodes { id label }
            }
        }
    }
`;

interface GroupsRelationUpdateViewProps {
    onSubmit: () => void;
    onCancel: () => void;
}

export default function GroupsRelationCreateView(props: GroupsRelationUpdateViewProps) {
    const { onSubmit, onCancel } = props;
    const { id } = useParams();
    const { loading, error, data } = useQuery(GROUPS_FORM_UPDATE_QUERY, { variables: {id} });
    const [executeCreate] = useMutation(REL_GROUPS_ADD_MUTATION);

    const handleOnSubmit = async (data: AssociationInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const defaultValues = cloneDeep(data.groupsRelation);
    defaultValues.relatedThings = defaultValues.relatedThings.nodes;

    return (
        <XtdRelAssociatesForm
            onCancel={onCancel}
            onSubmit={handleOnSubmit}
            defaultValues={defaultValues}
        />
    );
}