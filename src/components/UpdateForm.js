import ObjectForm from './ObjectForm';
import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {Redirect, useParams} from 'react-router-dom';
import {removeTypename} from '../utils';

export default function(props) {
    const {fetchQuery, updateMutation, dataKey, after} = props;
    const { uniqueId } = useParams();
    const [submitted, setSubmitted] = useState(false);
    const [updateRes, executeUpdate] = useMutation(updateMutation);
    const [existingObject] = useQuery({
        query: fetchQuery,
        variables: {uniqueId}
    });

    const handleOnSubmit = obj => {
        executeUpdate(obj)
            .then((response) => {
                if (response.error) {
                    console.warn(response);
                } else {
                    setSubmitted(true)
                }
            });
    };

    if (existingObject.error) {
        return <p>Error</p>;
    }

    if (existingObject.fetching) {
        return <p>Loading</p>;
    }

    if (submitted) {
        return <Redirect to={after} />;
    }

    const datum = existingObject.data[dataKey];
    datum.label = datum['__typename'];
    const initialValues = removeTypename(datum);
    return (
        <ObjectForm initialValues={initialValues} onSubmit={handleOnSubmit} />
    )
}
