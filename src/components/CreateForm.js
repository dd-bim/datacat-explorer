import ObjectForm from './ObjectForm';
import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import {Redirect} from 'react-router-dom';

export default function (props) {
    const {label, createMutation, after} = props;
    const [submitted, setSubmitted] = useState(false);
    const [executeCreate, { data }] = useMutation(createMutation);
    const initialValues = {
        label,
        uniqueId: '',
        uniqueIdOverride: false,
        versionId: '',
        versionDate: new Date(),
        names: [{language: 'de', value: ''}],
        descriptions: [],
    };

    const handleOnSubmit = newEntity => {
        executeCreate(newEntity)
            .then((response) => {
                if (response.error) {
                    console.warn(response);
                } else {
                    setSubmitted(true);
                }
            });
    };

    if (submitted) {
        return <Redirect to={after}/>;
    }

    return (
        <ObjectForm initialValues={initialValues} onSubmit={handleOnSubmit}/>
    );
}
