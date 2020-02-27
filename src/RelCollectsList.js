import React from 'react';
import api from "./api";
import ObjectList from './components/ObjectList';

export default function RelCollectsList(props) {
    const data = query => {
        const options = {
            page: query.page,
            size: query.pageSize,
        };

        if (query.orderBy) {
            options.sort = query.orderBy.field + ',' + query.orderDirection;
        }

        return api
            .fetchRelCollects(options)
            .then(result => {
                return {
                    data: result.content,
                    page: result.number,
                    totalCount: result.totalElements,
                };
            });
    };

    const columns = [
        {title: 'Name', field: 'names[0].name', render: row => row.names[0].name, editable: 'onAdd'},
        {title: 'Items', field: 'itemCount', editable: 'never'},
        {title: 'Version ID', field: 'relationship.versionId', editable: 'onAdd'},
        {title: 'Version Date', field: 'relationship.versionDate', editable: 'onAdd'},
        {
            title: 'Description',
            editable: 'onAdd',
            render: row => {
                const descriptions = row.descriptions;
                return (descriptions.length ? descriptions[0].description : '');
            },
            sorting: false,
        }
    ];

    return (
        <ObjectList columns={columns} data={data} />
    )
}
