import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import {CollectsInput} from "../types";
import XtdRelCollectsForm from "../components/form/XtdRelCollectsForm";

type RelCollectsCreateViewProps = {
    title: string;
    addMutation: DocumentNode;
    onSubmit(): void;
    onCancel(): void;
}

export default function RelCollectsCreateView(props: RelCollectsCreateViewProps) {
    const { title, addMutation, onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(addMutation);

    const handleOnSubmit = async (data: CollectsInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };
    return <XtdRelCollectsForm title={title} onCancel={onCancel} onSubmit={handleOnSubmit} />;
}
