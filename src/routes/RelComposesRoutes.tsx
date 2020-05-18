import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {gql} from "@apollo/client";
import ObjectView from "../views/ObjectView";
import {XtdRelGroups} from "../types";
import AssociationCreateView from "../views/AssociationCreateView";
import AssociationUpdateView from "../views/AssociationUpdateView";

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

export const findOneQuery = gql`
    query findOne($id: ID!) {
        node(id: $id) {
            ...Props
            ... on XtdRelComposes {
                relatingThing { id label }
                relatedThings {
                    nodes { id label }
                }
            }
        }
    }
    ${baseProperties}
`;

export const findAllQuery = gql`
    query findAll($term: String, $options: PagingOptions) {
        composesRelations(term: $term, options: $options) {
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
    mutation add($input: AssociationInput!) {
        createComposesRelation(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const updateMutation = gql`
    mutation update($input: AssociationUpdateInput!) {
        updateComposesRelation(input: $input) {
            ...Props
        }
    }
    ${baseProperties}
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteComposesRelation(id: $id) {
            id
        }
    }
`;


export default function RelComposesRoutes() {
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
                            title={'"Composes" relationships'}
                            queryDataKey={'composesRelations'}
                            findAllQuery={findAllQuery}
                            deleteMutation={deleteMutation}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <AssociationCreateView
                            title={'Create "Composes" relationship'}
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
