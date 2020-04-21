import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import XtdRelAssociatesForm from '../components/form/XtdRelAssociatesForm';
import {useParams} from 'react-router-dom';
import {AssociationInput, XtdRelAssociates} from "../types";
import {useFindOneQuery} from "../hooks";

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
    const { loading, error, result } = useFindOneQuery<XtdRelAssociates>(findOneQuery, findOneDataKey, { variables: {id} });
    const [executeCreate] = useMutation(updateMutation);

    const handleOnSubmit = async (data: AssociationInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <XtdRelAssociatesForm
            title={`Update ${result?.label}`}
            entity={result}
            onCancel={onCancel}
            onSubmit={handleOnSubmit}
        />
    );
}
