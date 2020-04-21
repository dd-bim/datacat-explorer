import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import XtdRelAssociatesForm from '../components/form/XtdRelAssociatesForm';
import {AssociationInput} from "../types";

interface AssociationCreateViewProps {
    title: string;
    addMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function AssociationCreateView(props: AssociationCreateViewProps) {
    const { title, addMutation, onSubmit, onCancel } = props;
    const [executeCreate] = useMutation(addMutation);

    const handleOnSubmit = async (data: AssociationInput) => {
        await executeCreate({ variables: { input: data } });
        onSubmit?.();
    };
    return <XtdRelAssociatesForm title={title} onCancel={onCancel} onSubmit={handleOnSubmit} />;
}
