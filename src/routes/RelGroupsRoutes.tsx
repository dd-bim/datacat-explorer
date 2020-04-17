import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {gql} from "@apollo/client";
import ObjectView from "../views/ObjectView";
import {XtdRelGroups} from "../types";
import AssociationCreateView from "../views/AssociationCreateView";
import AssociationUpdateView from "../views/AssociationUpdateView";

const baseProperties = gql`
    fragment Props on XtdRelGroups {
        id
        created
        lastModified
        versionId
        versionDate
        label
        names {
            id
            languageCode
            value
        }
        descriptions {
            id
            languageCode
            value
        }
        relatingThing { id label }
        relatedThings {
            nodes { id label }
        }
    }
`;

export const findOneQuery = gql`
    query findOneActor($id: ID!) {
        groupsRelation(id: $id) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const findAllQuery = gql`
    query findAllActors($term: String, $options: PagingOptions) {
        groupsRelations(term: $term, options: $options) {
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
    mutation add($input: AssociationInput!) {
        createGroupsRelation(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const updateMutation = gql`
    mutation update($input: AssociationUpdateInput!) {
        updateGroupsRelation(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteGroupsRelation(id: $id) {
            id
        }
    }
`;


export default function RelGroupsRoutes() {
    const {path} = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid item xs={12}>
                        <ObjectView<XtdRelGroups>
                            title={'Groups relationships'}
                            queryDataKey={'groupsRelations'}
                            findAllQuery={findAllQuery}
                            deleteMutation={deleteMutation}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <AssociationCreateView
                            title={'Create association'}
                            addMutation={addMutation}
                            onSubmit={handleOnSubmit}
                            onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <AssociationUpdateView
                            findOneQuery={findOneQuery}
                            findOneDataKey={'groupsRelation'}
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
