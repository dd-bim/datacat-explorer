import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import {useParams} from 'react-router-dom';
import {DocumentsInput, XtdRelDocuments} from "../types";
import {useFindOneQuery} from "../hooks";
import XtdRelDocumentsForm from "../components/form/XtdRelDocumentsForm";

interface DocumentsUpdateViewProps {
    findOneQuery: DocumentNode;
    findOneDataKey: string;
    updateMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function RelDocumentsUpdateView(props: DocumentsUpdateViewProps) {
    const { findOneQuery, findOneDataKey, updateMutation, onSubmit, onCancel } = props;
    const { id } = useParams();
    const { loading, error, result } = useFindOneQuery<XtdRelDocuments>(findOneQuery, findOneDataKey, { variables: {id} });
    const [executeCreate] = useMutation(updateMutation);

    const handleOnSubmit = async (data: DocumentsInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <XtdRelDocumentsForm
            title={`Update ${result?.label}`}
            entity={result}
            onCancel={onCancel}
            onSubmit={handleOnSubmit}
        />
    );
}
