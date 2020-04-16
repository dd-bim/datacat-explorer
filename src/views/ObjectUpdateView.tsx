import {DocumentNode, useMutation, useQuery} from '@apollo/client';
import React from 'react';
import {useParams} from 'react-router-dom';
import XtdObjectForm from '../components/form/XtdObjectForm';
import {FieldValues, OnSubmit} from "react-hook-form";
import {XtdObject} from "../types";

interface ObjectUpdateViewProps {
    findOneQuery: DocumentNode;
    findOneDataKey: string;
    updateMutation: DocumentNode;
    onSubmit: () => void;
    onCancel: () => void;
}

interface QueryData<T> {
    [name: string]: T
}

export default function ObjectUpdateView<T extends XtdObject>(props: ObjectUpdateViewProps) {
    const {findOneQuery, findOneDataKey, updateMutation, onSubmit, onCancel} = props;
    const {id} = useParams();
    const {loading, error, data} = useQuery<QueryData<T>>(findOneQuery, {variables: {id}});
    const [executeUpdate] = useMutation(updateMutation);

    const handleSubmit: OnSubmit<FieldValues> = async data => {
        await executeUpdate({variables: {input: data}});
        onSubmit();
    };

    if (loading) return (
        <p>Loading...</p>
    );

    if (error) return (
        <p>Error...</p>
    );

    return (
        <XtdObjectForm<T>
            title={`Update ${data?.[findOneDataKey].label}`}
            onSubmit={handleSubmit}
            onCancel={onCancel}
            defaultValues={data?.[findOneDataKey]}
        />
    );
}
