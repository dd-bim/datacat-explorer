import EntityList from './EntityList';
import {deleteObject, fetchObjects} from '../gqlQueries';
import React from 'react';

export default function ObjectList(props) {
    const {
        objectType,
        label,
        subpath
    } = props;

    return (
        <EntityList
            label={label}
            queryVariables={{ label: objectType }}
            fetchQuery={fetchObjects}
            deleteMutation={deleteObject}
            dataKey={'objects'}
            toCreate={`/objects/${subpath}/new`}
            toEdit={`/objects/${subpath}`}
        />
    );
}
