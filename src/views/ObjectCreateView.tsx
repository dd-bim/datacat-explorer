import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import XtdObjectForm from '../components/form/XtdObjectForm';
import {XtdRoot} from "../types";
import {FieldValues, OnSubmit} from "react-hook-form";

interface ObjectCreateViewProps {
    title: string;
    addMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function ObjectCreateView<T extends XtdRoot>(props: ObjectCreateViewProps) {
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

    return <XtdObjectForm<T>
        title={title}
        onSubmit={handleSubmit}
        onCancel={onCancel}
    />;
}
