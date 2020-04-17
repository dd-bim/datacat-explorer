import React from 'react';
import {DocumentNode, useMutation, useQuery} from '@apollo/client';
import XtdRelAssociatesForm from '../components/form/XtdRelAssociatesForm';
import {useParams} from 'react-router-dom';
import cloneDeep from 'lodash.clonedeep';
import {AssociationInput} from "../types";

interface AssociationUpdateViewProps {
    findOneQuery: DocumentNode;
    findOneDataKey: string;
    updateMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function AssociationUpdateView(props: AssociationUpdateViewProps) {
    const { findOneQuery, findOneDataKey, updateMutation, onSubmit, onCancel } = props;
    const { id } = useParams();
    const { loading, error, data } = useQuery(findOneQuery, { variables: {id} });
    const [executeCreate] = useMutation(updateMutation);

    const handleOnSubmit = async (data: AssociationInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const defaultValues = cloneDeep(data?.[findOneDataKey]);
    defaultValues.relatedThings = defaultValues.relatedThings.nodes;

    return (
        <XtdRelAssociatesForm
            onCancel={onCancel}
            onSubmit={handleOnSubmit}
            defaultValues={defaultValues}
        />
    );
}
