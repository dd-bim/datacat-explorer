import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import {DocumentsInput} from "../types";
import XtdRelDocumentsForm from "../components/form/XtdRelDocumentsForm";

type RelDocumentsCreateViewProps = {
    title: string;
    addMutation: DocumentNode;
    onSubmit(): void;
    onCancel(): void;
}

export default function RelDocumentsCreateView(props: RelDocumentsCreateViewProps) {
    const { title, addMutation, onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(addMutation);

    const handleOnSubmit = async (data: DocumentsInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };
    return <XtdRelDocumentsForm title={title} onCancel={onCancel} onSubmit={handleOnSubmit} />;
}
