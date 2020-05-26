import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import {FieldValues, OnSubmit} from "react-hook-form";
import XtdExternalDocumentForm from "../components/form/XtdExternalDocumentForm";

interface ExternalDocumentCreateViewProps {
    title: string;
    addMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function ExternalDocumentCreateView(props: ExternalDocumentCreateViewProps) {
    const {
        title,
        addMutation,
        onSubmit,
        onCancel
    } = props;
    const [executeCreate] = useMutation(addMutation);

    const handleSubmit: OnSubmit<FieldValues> = async (data, e) => {
        await executeCreate({
            variables: { input: data }
        });
        onSubmit();
    };

    return <XtdExternalDocumentForm
        title={title}
        onSubmit={handleSubmit}
        onCancel={onCancel}
    />;
}
