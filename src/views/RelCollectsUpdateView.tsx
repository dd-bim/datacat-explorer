import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import XtdRelCollectsForm from '../components/form/XtdRelCollectsForm';
import {useParams} from 'react-router-dom';
import {CollectsInput, XtdRelCollects} from "../types";
import {useFindOneQuery} from "../hooks";

interface CollectsUpdateViewProps {
    findOneQuery: DocumentNode;
    findOneDataKey: string;
    updateMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function RelCollectsUpdateView(props: CollectsUpdateViewProps) {
    const { findOneQuery, findOneDataKey, updateMutation, onSubmit, onCancel } = props;
    const { id } = useParams();
    const { loading, error, result } = useFindOneQuery<XtdRelCollects>(findOneQuery, findOneDataKey, { variables: {id} });
    const [executeCreate] = useMutation(updateMutation);

    const handleOnSubmit = async (data: CollectsInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <XtdRelCollectsForm
            title={`Update ${result?.label}`}
            entity={result}
            onCancel={onCancel}
            onSubmit={handleOnSubmit}
        />
    );
}
