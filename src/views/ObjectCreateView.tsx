import React from 'react';
import {DocumentNode, useMutation} from '@apollo/client';
import XtdObjectForm from '../components/form/XtdObjectForm';
import {XtdObject} from "../types";
import {FieldValues, OnSubmit} from "react-hook-form";

interface ObjectCreateViewProps {
    findAllQuery: DocumentNode;
    addMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

export default function ObjectCreateView<T extends XtdObject>(props: ObjectCreateViewProps) {
    const {
        findAllQuery,
        addMutation,
        onSubmit,
        onCancel
    } = props;
    const [executeCreate] = useMutation(addMutation);

    const handleSubmit: OnSubmit<FieldValues> = async (data, e) => {
        await executeCreate({
            variables: { input: data },
            refetchQueries: [ { query: findAllQuery }],
            awaitRefetchQueries: true
        });
        onSubmit();
    };

    return <XtdObjectForm<T>
        title="Add subject"
        onSubmit={handleSubmit}
        onCancel={onCancel}
    />;
}