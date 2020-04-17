import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {gql} from "@apollo/client";
import ObjectView from "../views/ObjectView";
import {XtdActivity} from "../types";
import ObjectCreateView from "../views/ObjectCreateView";
import ObjectUpdateView from "../views/ObjectUpdateView";

const baseProperties = gql`
    fragment Props on XtdActivity {
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
    query findOneActivity($id: ID!) {
        activity(id: $id) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const findAllQuery = gql`
    query findAllActivities($term: String, $options: PagingOptions) {
        activities(term: $term, options: $options) {
            nodes {
                ...Props
                associates(options: { pageSize: 100 }) {
                    nodes { id label }
                    page {
                        totalElements
                    }
                }
                associatedBy(options: { pageSize: 100 }) {
                    nodes { id label }
                    page {
                        totalElements
                    }
                }
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
        createActivity(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const updateMutation = gql`
    mutation update($input: RootUpdateInput!) {
        updateActivity(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteActivity(id: $id) {
            id
        }
    }
`;


export default function ActivityRoutes() {
    const {path} = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid item xs={12}>
                        <ObjectView<XtdActivity>
                            title={'Activities'}
                            queryDataKey={'activities'}
                            findAllQuery={findAllQuery}
                            deleteMutation={deleteMutation}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <ObjectCreateView<XtdActivity>
                            title={'Add activity'}
                            findAllQuery={findAllQuery}
                            addMutation={addMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <ObjectUpdateView<XtdActivity>
                            findOneQuery={findOneQuery}
                            findOneDataKey={'activity'}
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
