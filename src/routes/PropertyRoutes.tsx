import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {gql} from "@apollo/client";
import ObjectView from "../views/ObjectView";
import {XtdProperty} from "../types";
import ObjectCreateView from "../views/ObjectCreateView";
import ObjectUpdateView from "../views/ObjectUpdateView";

const baseProperties = gql`
    fragment Props on XtdProperty {
        id
        label
        created
        lastModified
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

export const findOneQuery = gql`
    query findOneProperty($id: ID!) {
        property(id: $id) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const findAllQuery = gql`
    query findAllProperties($term: String, $options: PagingOptions) {
        properties(term: $term, options: $options) {
            nodes {
                ...Props
                groups(options: { pageSize: 100 }) {
                    nodes { id label }
                    page {
                        totalElements
                    }
                }
                groupedBy(options: { pageSize: 100 }) {
                    nodes { id label }
                    page {
                        totalElements
                    }
                }
            }
            page {
                pageSize
                pageNumber
                totalElements
                totalPages
            }
        }
    }
    ${baseProperties}
`;

export const addMutation = gql`
    mutation add($input: RootInput!) {
        createProperty(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const updateMutation = gql`
    mutation update($input: RootUpdateInput!) {
        updateProperty(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteProperty(id: $id) {
            id
        }
    }
`;


export default function PropertyRoutes() {
    const {path} = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid item xs={12}>
                        <ObjectView<XtdProperty>
                            title={'Properties'}
                            queryDataKey={'properties'}
                            findAllQuery={findAllQuery}
                            deleteMutation={deleteMutation}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <ObjectCreateView<XtdProperty>
                            title={'Add property'}
                            findAllQuery={findAllQuery}
                            addMutation={addMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <ObjectUpdateView<XtdProperty>
                            findOneQuery={findOneQuery}
                            findOneDataKey={'property'}
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