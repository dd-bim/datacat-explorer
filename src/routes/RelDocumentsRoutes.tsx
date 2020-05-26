import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {gql} from "@apollo/client";
import ObjectView from "../views/ObjectView";
import {XtdRelDocuments} from "../types";
import RelDocumentsCreateView from "../views/RelDocumentsCreateView";
import RelDocumentsUpdateView from "../views/RelDocumentsUpdateView";

const baseProperties = gql`
    fragment Props on XtdRoot {
        id
        label
        created
        createdBy
        lastModified
        lastModifiedBy
        versionId
        versionDate
        names {
            id
            created
            lastModified
            languageCode
            value
        }
        descriptions {
            id
            created
            lastModified
            languageCode
            value
        }
    }
`;

const extendedProperties = gql`
    fragment AllProps on XtdRelDocuments {
        ...Props
        ... on XtdRelDocuments {
            relatingDocument { id label }
            relatedObjects {
                nodes { id label }
            }
        }
    }
    ${baseProperties}
`;

export const findOneQuery = gql`
    query findOne($id: ID!) {
        node(id: $id) {
            ...AllProps
        }
    }
    ${extendedProperties}
`;

export const findAllQuery = gql`
    query findAll($term: String, $options: PagingOptions) {
        documentsRelations(term: $term, options: $options) {
            nodes {
                ...Props
                associates { totalElements }
                associatedBy { totalElements }
                composes { totalElements }
                composedBy { totalElements }
                groups { totalElements }
                groupedBy { totalElements }
                specializes { totalElements }
                specializedBy { totalElements }
                actsUpon { totalElements }
                actedUponBy { totalElements }
            }
            pageInfo {
                pageSize
                pageNumber
                totalPages
            }
            totalElements
        }
    }
    ${baseProperties}
`;

export const addMutation = gql`
    mutation add($input: RelDocumentsInput!) {
        createDocumentsRelation(input: $input) {
            ...AllProps
        }
    }
    ${extendedProperties}
`;

export const updateMutation = gql`
    mutation update($input: RelDocumentsUpdateInput!) {
        updateDocumentsRelation(input: $input) {
            ...AllProps
        }
    }
    ${extendedProperties}
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteDocumentsRelation(id: $id) {
            id
        }
    }
`;


export default function RelDocumentsRoutes() {
    const {path} = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid item xs={12}>
                        <ObjectView<XtdRelDocuments>
                            title={'Documents relationships'}
                            queryDataKey={'documentsRelations'}
                            findAllQuery={findAllQuery}
                            deleteMutation={deleteMutation}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <RelDocumentsCreateView
                            title={'Create documents relation'}
                            addMutation={addMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <RelDocumentsUpdateView
                            findOneQuery={findOneQuery}
                            findOneDataKey={'node'}
                            updateMutation={updateMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
            </Switch>
        </Grid>
    )
}
